import { Asset, RegisterInput } from './Box';

export type TransactionJson = {
  inputs: {
    additionalRegisters: any;
    value: string;
    extension: {};
    creationHeight: number;
    ergoTree: string;
    assets: Asset[];
    boxId?: string | undefined;
    transactionId?: string | undefined;
    blockId?: string | undefined;
  }[];
  outputs: {
    additionalRegisters: any;
    value: string;
    extension: {};
    creationHeight: number;
    ergoTree: string;
    assets: Asset[];
    boxId?: string | undefined;
    transactionId?: string | undefined;
    blockId?: string | undefined;
  }[];
  fee: string;
  dataInputs: [];
};
