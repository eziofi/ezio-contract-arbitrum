// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";
import "@openzeppelin/contracts-upgradeable/token/ERC20/utils/SafeERC20Upgradeable.sol";
import "@openzeppelin/contracts-upgradeable/token/ERC20/extensions/IERC20MetadataUpgradeable.sol";
import "@chainlink/contracts/src/v0.8/interfaces/AggregatorV3Interface.sol";
//import "hardhat/console.sol";

contract SwapCollectorUpgradeable is Initializable{
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
  function swap(uint8 channel,bytes calldata quote) internal returns (uint256){
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
  function zeroExSwap(bytes calldata quote) internal returns (uint256){
    (bool success,bytes memory data) = ZEROEX_ADDRESS.call(quote);
    (uint256 buyAmount) = abi.decode(data,(uint256));
    require(success, '0x-swap-failed');
    return buyAmount;
  }

  /**
  * @notice               Trade with 1inch
  * @param quote          Request Parameters
  */
  function oneInchSwap(bytes calldata quote) internal returns (uint256) {
    (bool success, bytes memory data) = ONEINCH_ADDRESS.call(quote);
    (uint256 buyAmount,) = abi.decode(data, (uint256, uint256));
    if (!success) revert("1Inch-swap-failed");
    return buyAmount;
  }

  function parseZeroExData(bytes calldata data) internal pure returns (bytes4 selector,address sellToken, address buyToken, uint256 sellAmount){
    /*    bytes4 selector = bytes4(keccak256("transformERC20(IERC20TokenV06,IERC20TokenV06,uint256,uint256,Transformation[])"));
        console.logBytes4(selector);
        bytes memory header = data[:4];
        console.logBytes(header);
        require(bytesToBytes4(header) == selector, "invalid selector");*/
    selector = bytesToBytes4(data[:4]);
    (sellToken, buyToken, sellAmount) = abi.decode(data[4:],(address,address,uint256));
  }

  function bytesToBytes4(bytes memory input) internal pure returns(bytes4 output){
    assembly {
      output := mload(add(input, 32))
    }
  }

  uint256[50] private __gap;

}
