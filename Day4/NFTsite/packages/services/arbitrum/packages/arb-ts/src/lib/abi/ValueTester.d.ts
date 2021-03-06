/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
} from 'ethers'
import {
  Contract,
  ContractTransaction,
  CallOverrides,
} from '@ethersproject/contracts'
import { BytesLike } from '@ethersproject/bytes'
import { Listener, Provider } from '@ethersproject/providers'
import { FunctionFragment, EventFragment, Result } from '@ethersproject/abi'

interface ValueTesterInterface extends ethers.utils.Interface {
  functions: {
    'deserializeHash(bytes,uint256)': FunctionFragment
    'hashTestTuple()': FunctionFragment
    'hashTuplePreImage(bytes32,uint256)': FunctionFragment
  }

  encodeFunctionData(
    functionFragment: 'deserializeHash',
    values: [BytesLike, BigNumberish]
  ): string
  encodeFunctionData(
    functionFragment: 'hashTestTuple',
    values?: undefined
  ): string
  encodeFunctionData(
    functionFragment: 'hashTuplePreImage',
    values: [BytesLike, BigNumberish]
  ): string

  decodeFunctionResult(
    functionFragment: 'deserializeHash',
    data: BytesLike
  ): Result
  decodeFunctionResult(
    functionFragment: 'hashTestTuple',
    data: BytesLike
  ): Result
  decodeFunctionResult(
    functionFragment: 'hashTuplePreImage',
    data: BytesLike
  ): Result

  events: {}
}

export class ValueTester extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this
  attach(addressOrName: string): this
  deployed(): Promise<this>

  on(event: EventFilter | string, listener: Listener): this
  once(event: EventFilter | string, listener: Listener): this
  addListener(eventName: EventFilter | string, listener: Listener): this
  removeAllListeners(eventName: EventFilter | string): this
  removeListener(eventName: any, listener: Listener): this

  interface: ValueTesterInterface

  functions: {
    deserializeHash(
      data: BytesLike,
      startOffset: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber, string]>

    'deserializeHash(bytes,uint256)'(
      data: BytesLike,
      startOffset: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber, string]>

    hashTestTuple(overrides?: CallOverrides): Promise<[string]>

    'hashTestTuple()'(overrides?: CallOverrides): Promise<[string]>

    hashTuplePreImage(
      innerHash: BytesLike,
      valueSize: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>

    'hashTuplePreImage(bytes32,uint256)'(
      innerHash: BytesLike,
      valueSize: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>
  }

  deserializeHash(
    data: BytesLike,
    startOffset: BigNumberish,
    overrides?: CallOverrides
  ): Promise<[BigNumber, string]>

  'deserializeHash(bytes,uint256)'(
    data: BytesLike,
    startOffset: BigNumberish,
    overrides?: CallOverrides
  ): Promise<[BigNumber, string]>

  hashTestTuple(overrides?: CallOverrides): Promise<string>

  'hashTestTuple()'(overrides?: CallOverrides): Promise<string>

  hashTuplePreImage(
    innerHash: BytesLike,
    valueSize: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>

  'hashTuplePreImage(bytes32,uint256)'(
    innerHash: BytesLike,
    valueSize: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>

  callStatic: {
    deserializeHash(
      data: BytesLike,
      startOffset: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber, string]>

    'deserializeHash(bytes,uint256)'(
      data: BytesLike,
      startOffset: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber, string]>

    hashTestTuple(overrides?: CallOverrides): Promise<string>

    'hashTestTuple()'(overrides?: CallOverrides): Promise<string>

    hashTuplePreImage(
      innerHash: BytesLike,
      valueSize: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>

    'hashTuplePreImage(bytes32,uint256)'(
      innerHash: BytesLike,
      valueSize: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>
  }

  filters: {}

  estimateGas: {
    deserializeHash(
      data: BytesLike,
      startOffset: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>

    'deserializeHash(bytes,uint256)'(
      data: BytesLike,
      startOffset: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>

    hashTestTuple(overrides?: CallOverrides): Promise<BigNumber>

    'hashTestTuple()'(overrides?: CallOverrides): Promise<BigNumber>

    hashTuplePreImage(
      innerHash: BytesLike,
      valueSize: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>

    'hashTuplePreImage(bytes32,uint256)'(
      innerHash: BytesLike,
      valueSize: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>
  }

  populateTransaction: {
    deserializeHash(
      data: BytesLike,
      startOffset: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>

    'deserializeHash(bytes,uint256)'(
      data: BytesLike,
      startOffset: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>

    hashTestTuple(overrides?: CallOverrides): Promise<PopulatedTransaction>

    'hashTestTuple()'(overrides?: CallOverrides): Promise<PopulatedTransaction>

    hashTuplePreImage(
      innerHash: BytesLike,
      valueSize: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>

    'hashTuplePreImage(bytes32,uint256)'(
      innerHash: BytesLike,
      valueSize: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>
  }
}
