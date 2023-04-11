// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";
import "@openzeppelin/contracts-upgradeable/token/ERC20/utils/SafeERC20Upgradeable.sol";
import "@openzeppelin/contracts-upgradeable/token/ERC20/extensions/IERC20MetadataUpgradeable.sol";
import "@chainlink/contracts/src/v0.8/interfaces/AggregatorV3Interface.sol";
import "../../interfaces/v1/ISwapCollector.sol";
//import "hardhat/console.sol";

contract SwapCollectorUpgradeable is Initializable,ISwapCollector{
  using SafeERC20Upgradeable for IERC20MetadataUpgradeable;
  //0x Switching Router
  address internal constant ZEROEX_ADDRESS = 0xDef1C0ded9bec7F1a1670819833240f027b25EfF;
  //1inch Switching Router
  address internal constant ONEINCH_ADDRESS = 0x1111111254EEB25477B68fb85Ed929f73A960582;
  //Error Message Constant
  string internal constant CANNOT_BE_ZERO = "SwapCollector: Cannot be zero";

  function __SwapCollector_init() internal onlyInitializing {
    __SwapCollector_init_unchained();
  }

  function __SwapCollector_init_unchained() internal onlyInitializing {
  }

  /**
  * @notice               Trading Method
  * @param channel        Trading Channel(0 represent 0x,1 represent 1inch)
  * @param quote          Request Parameters
  * @return uint256       Transaction Return Quantity
  */
  function swap(uint8 channel,SwapQuote calldata quote) internal returns (uint256){
    if(channel==0){
      return zeroExSwap(quote);
    }else if(channel==1){
      return oneInchSwap(quote);
    }else{
      revert("SwapCollector: Wrong Parameter");
    }
  }

  /**
  * @notice               Trade with 0x
  * @param quote          Request Parameters
  */
  function zeroExSwap(SwapQuote calldata quote) internal returns (uint256){
    (bool success,bytes memory data) = ZEROEX_ADDRESS.call(quote.swapCallData);
    (uint256 buyAmount) = abi.decode(data,(uint256));
    require(success, '0x-swap-failed');
    return buyAmount;
  }

  /**
  * @notice               Trade with 1inch
  * @param quote          Request Parameters
  */
  function oneInchSwap(SwapQuote calldata quote) internal returns (uint256) {
    (bool success, bytes memory data) = ONEINCH_ADDRESS.call(quote.swapCallData);
    (uint256 buyAmount,) = abi.decode(data, (uint256, uint256));
    if (!success) revert("1Inch-swap-failed");
    return buyAmount;
  }

  uint256[50] private __gap;

}
