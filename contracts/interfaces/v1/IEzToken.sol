// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts-upgradeable/token/ERC20/IERC20Upgradeable.sol";

interface IEzToken is IERC20Upgradeable{

  /**
  * @notice  Total Net Token Value
  * @return uint256
  */
  function totalNetWorth() external view returns(uint256);

  /**
  * @notice  Net Token Value
  * @return uint256
  */
  function netWorth() external view returns (uint256);

  /**
  * @notice    Mining token
  * @param to          Account to obtain the token
  * @param amount      Mining quantity
  */
  function mint(address to, uint256 amount) external;

  /**
  * @notice    Burning token
  * @param from        Account to burn the token
  * @param amount      Burning quantity
  */
  function burn(address from, uint256 amount) external;

}
