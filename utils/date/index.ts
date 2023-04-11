import {BigNumber} from "ethers";

export function firstRebaseTime () {
  let now = new Date();
  let dateTime = Date.UTC(now.getUTCFullYear(),now.getUTCMonth(),now.getUTCDate(),14,0,0);
  if(dateTime<now.getTime()){
    return BigNumber.from(dateTime).div(1000);
  }else{
    let lastDateTime = Date.UTC(now.getUTCFullYear(),now.getUTCMonth(),now.getUTCDate()-1,14,0,0);
    return BigNumber.from(lastDateTime).div(1000);
  }
}
