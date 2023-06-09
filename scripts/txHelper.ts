import { ContractReceipt, ContractTransaction } from "@ethersproject/contracts";

export async function waitFor(txPromise: Promise<ContractTransaction>): Promise<ContractReceipt> {
    return txPromise.then((tx) => tx.wait());
}
