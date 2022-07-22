export enum SigmaType {
  Long = 'Long',
  CollByte = 'Coll[Byte]',
  Int = 'Int',
  Raw = 'Raw',
  ByteArray = 'ByteArray',
}

export type SerializedRegister = {
  serializedValue: string;
  sigmaType: string;
  renderedValue: string;
};

export type RegisterInput = {
  value: any;
  type: SigmaType;
};

export type AdditionalRegisters = {
  R4?: SerializedRegister;
  R5?: SerializedRegister;
  R6?: SerializedRegister;
  R7?: SerializedRegister;
  R8?: SerializedRegister;
  R9?: SerializedRegister;
};

export type Asset = {
  tokenId: string;
  index?: number;
  amount: number;
  name?: string;
  decimals?: number;
  type?: string;
  isMint?: boolean;
};

export type ExplorerBox = {
  additionalRegisters: AdditionalRegisters;
  value: number;
  creationHeight: number;
  ergoTree: string;
  assets: Asset[];
  boxId?: string;
  transactionId?: string;
  blockId?: string;
  extension?: {};
};

export type TypeGetters = {
  get: string;
  isDefined: boolean;
};
