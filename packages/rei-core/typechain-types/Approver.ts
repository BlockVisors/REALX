/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";

export declare namespace Approver {
  export type REIAttributesStruct = {
    country: string;
    city: string;
    gpsCoordinates: string;
    surfaceAreaInSQMTR: BigNumberish;
  };

  export type REIAttributesStructOutput = [
    string,
    string,
    string,
    BigNumber
  ] & {
    country: string;
    city: string;
    gpsCoordinates: string;
    surfaceAreaInSQMTR: BigNumber;
  };

  export type ApplicationStruct = {
    applicationNumber: BigNumberish;
    applicant: string;
    name: string;
    description: string;
    imageURI: string;
    attributes: Approver.REIAttributesStruct;
    applicationStatus: BigNumberish;
  };

  export type ApplicationStructOutput = [
    BigNumber,
    string,
    string,
    string,
    string,
    Approver.REIAttributesStructOutput,
    number
  ] & {
    applicationNumber: BigNumber;
    applicant: string;
    name: string;
    description: string;
    imageURI: string;
    attributes: Approver.REIAttributesStructOutput;
    applicationStatus: number;
  };
}

export interface ApproverInterface extends utils.Interface {
  contractName: "Approver";
  functions: {
    "Applications(uint256)": FunctionFragment;
    "applicationDecision(uint256,uint8,string)": FunctionFragment;
    "applyForApproval(string,string,string,string,string,string,uint256)": FunctionFragment;
    "getApplicationAt(uint256)": FunctionFragment;
    "getPendingApplication()": FunctionFragment;
    "getRejectedApplication()": FunctionFragment;
    "isApprover(address)": FunctionFragment;
    "numberOfApplications()": FunctionFragment;
    "numberOfApplicationsAccepted()": FunctionFragment;
    "numberOfApplicationsRejected()": FunctionFragment;
    "owner()": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "setApprover(address,bool)": FunctionFragment;
    "setApprovers(address[],bool)": FunctionFragment;
    "setREIAddress(address)": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "Applications",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "applicationDecision",
    values: [BigNumberish, BigNumberish, string]
  ): string;
  encodeFunctionData(
    functionFragment: "applyForApproval",
    values: [string, string, string, string, string, string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getApplicationAt",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getPendingApplication",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getRejectedApplication",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "isApprover", values: [string]): string;
  encodeFunctionData(
    functionFragment: "numberOfApplications",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "numberOfApplicationsAccepted",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "numberOfApplicationsRejected",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "setApprover",
    values: [string, boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "setApprovers",
    values: [string[], boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "setREIAddress",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [string]
  ): string;

  decodeFunctionResult(
    functionFragment: "Applications",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "applicationDecision",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "applyForApproval",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getApplicationAt",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getPendingApplication",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getRejectedApplication",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "isApprover", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "numberOfApplications",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "numberOfApplicationsAccepted",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "numberOfApplicationsRejected",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setApprover",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setApprovers",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setREIAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;

  events: {
    "AccessSet(address,bool)": EventFragment;
    "DecisionTaken(uint256,address,uint8)": EventFragment;
    "NewApplicationCreated(uint256,address,string,string,string,string,string,string,uint256,uint8)": EventFragment;
    "OwnershipTransferred(address,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "AccessSet"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "DecisionTaken"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "NewApplicationCreated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
}

export type AccessSetEvent = TypedEvent<
  [string, boolean],
  { _user: string; _enabled: boolean }
>;

export type AccessSetEventFilter = TypedEventFilter<AccessSetEvent>;

export type DecisionTakenEvent = TypedEvent<
  [BigNumber, string, number],
  { applicationNumber: BigNumber; decisionTaker: string; decision: number }
>;

export type DecisionTakenEventFilter = TypedEventFilter<DecisionTakenEvent>;

export type NewApplicationCreatedEvent = TypedEvent<
  [
    BigNumber,
    string,
    string,
    string,
    string,
    string,
    string,
    string,
    BigNumber,
    number
  ],
  {
    applicationNumber: BigNumber;
    applicant: string;
    name: string;
    description: string;
    imageURI: string;
    country: string;
    city: string;
    gpsCoordinates: string;
    surfaceAreaInSQMTR: BigNumber;
    applicationStatus: number;
  }
>;

export type NewApplicationCreatedEventFilter =
  TypedEventFilter<NewApplicationCreatedEvent>;

export type OwnershipTransferredEvent = TypedEvent<
  [string, string],
  { previousOwner: string; newOwner: string }
>;

export type OwnershipTransferredEventFilter =
  TypedEventFilter<OwnershipTransferredEvent>;

export interface Approver extends BaseContract {
  contractName: "Approver";
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: ApproverInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    Applications(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [
        BigNumber,
        string,
        string,
        string,
        string,
        Approver.REIAttributesStructOutput,
        number
      ] & {
        applicationNumber: BigNumber;
        applicant: string;
        name: string;
        description: string;
        imageURI: string;
        attributes: Approver.REIAttributesStructOutput;
        applicationStatus: number;
      }
    >;

    applicationDecision(
      applicationNumber: BigNumberish,
      status: BigNumberish,
      reiURI: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    applyForApproval(
      name: string,
      description: string,
      imageURI: string,
      country: string,
      city: string,
      gpsCoordinates: string,
      surfaceAreaInSQMTR: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    getApplicationAt(
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[Approver.ApplicationStructOutput]>;

    getPendingApplication(
      overrides?: CallOverrides
    ): Promise<[Approver.ApplicationStructOutput[]]>;

    getRejectedApplication(
      overrides?: CallOverrides
    ): Promise<[Approver.ApplicationStructOutput[]]>;

    isApprover(approver: string, overrides?: CallOverrides): Promise<[boolean]>;

    numberOfApplications(
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { _value: BigNumber }>;

    numberOfApplicationsAccepted(
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { _value: BigNumber }>;

    numberOfApplicationsRejected(
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { _value: BigNumber }>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setApprover(
      approver: string,
      enabled: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setApprovers(
      approvers: string[],
      enabled: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setREIAddress(
      reiaddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  Applications(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<
    [
      BigNumber,
      string,
      string,
      string,
      string,
      Approver.REIAttributesStructOutput,
      number
    ] & {
      applicationNumber: BigNumber;
      applicant: string;
      name: string;
      description: string;
      imageURI: string;
      attributes: Approver.REIAttributesStructOutput;
      applicationStatus: number;
    }
  >;

  applicationDecision(
    applicationNumber: BigNumberish,
    status: BigNumberish,
    reiURI: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  applyForApproval(
    name: string,
    description: string,
    imageURI: string,
    country: string,
    city: string,
    gpsCoordinates: string,
    surfaceAreaInSQMTR: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  getApplicationAt(
    index: BigNumberish,
    overrides?: CallOverrides
  ): Promise<Approver.ApplicationStructOutput>;

  getPendingApplication(
    overrides?: CallOverrides
  ): Promise<Approver.ApplicationStructOutput[]>;

  getRejectedApplication(
    overrides?: CallOverrides
  ): Promise<Approver.ApplicationStructOutput[]>;

  isApprover(approver: string, overrides?: CallOverrides): Promise<boolean>;

  numberOfApplications(overrides?: CallOverrides): Promise<BigNumber>;

  numberOfApplicationsAccepted(overrides?: CallOverrides): Promise<BigNumber>;

  numberOfApplicationsRejected(overrides?: CallOverrides): Promise<BigNumber>;

  owner(overrides?: CallOverrides): Promise<string>;

  renounceOwnership(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setApprover(
    approver: string,
    enabled: boolean,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setApprovers(
    approvers: string[],
    enabled: boolean,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setREIAddress(
    reiaddress: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  transferOwnership(
    newOwner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    Applications(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [
        BigNumber,
        string,
        string,
        string,
        string,
        Approver.REIAttributesStructOutput,
        number
      ] & {
        applicationNumber: BigNumber;
        applicant: string;
        name: string;
        description: string;
        imageURI: string;
        attributes: Approver.REIAttributesStructOutput;
        applicationStatus: number;
      }
    >;

    applicationDecision(
      applicationNumber: BigNumberish,
      status: BigNumberish,
      reiURI: string,
      overrides?: CallOverrides
    ): Promise<void>;

    applyForApproval(
      name: string,
      description: string,
      imageURI: string,
      country: string,
      city: string,
      gpsCoordinates: string,
      surfaceAreaInSQMTR: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    getApplicationAt(
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<Approver.ApplicationStructOutput>;

    getPendingApplication(
      overrides?: CallOverrides
    ): Promise<Approver.ApplicationStructOutput[]>;

    getRejectedApplication(
      overrides?: CallOverrides
    ): Promise<Approver.ApplicationStructOutput[]>;

    isApprover(approver: string, overrides?: CallOverrides): Promise<boolean>;

    numberOfApplications(overrides?: CallOverrides): Promise<BigNumber>;

    numberOfApplicationsAccepted(overrides?: CallOverrides): Promise<BigNumber>;

    numberOfApplicationsRejected(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<string>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    setApprover(
      approver: string,
      enabled: boolean,
      overrides?: CallOverrides
    ): Promise<void>;

    setApprovers(
      approvers: string[],
      enabled: boolean,
      overrides?: CallOverrides
    ): Promise<void>;

    setREIAddress(reiaddress: string, overrides?: CallOverrides): Promise<void>;

    transferOwnership(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "AccessSet(address,bool)"(
      _user?: null,
      _enabled?: null
    ): AccessSetEventFilter;
    AccessSet(_user?: null, _enabled?: null): AccessSetEventFilter;

    "DecisionTaken(uint256,address,uint8)"(
      applicationNumber?: BigNumberish | null,
      decisionTaker?: string | null,
      decision?: BigNumberish | null
    ): DecisionTakenEventFilter;
    DecisionTaken(
      applicationNumber?: BigNumberish | null,
      decisionTaker?: string | null,
      decision?: BigNumberish | null
    ): DecisionTakenEventFilter;

    "NewApplicationCreated(uint256,address,string,string,string,string,string,string,uint256,uint8)"(
      applicationNumber?: BigNumberish | null,
      applicant?: string | null,
      name?: null,
      description?: null,
      imageURI?: null,
      country?: null,
      city?: null,
      gpsCoordinates?: null,
      surfaceAreaInSQMTR?: null,
      applicationStatus?: null
    ): NewApplicationCreatedEventFilter;
    NewApplicationCreated(
      applicationNumber?: BigNumberish | null,
      applicant?: string | null,
      name?: null,
      description?: null,
      imageURI?: null,
      country?: null,
      city?: null,
      gpsCoordinates?: null,
      surfaceAreaInSQMTR?: null,
      applicationStatus?: null
    ): NewApplicationCreatedEventFilter;

    "OwnershipTransferred(address,address)"(
      previousOwner?: string | null,
      newOwner?: string | null
    ): OwnershipTransferredEventFilter;
    OwnershipTransferred(
      previousOwner?: string | null,
      newOwner?: string | null
    ): OwnershipTransferredEventFilter;
  };

  estimateGas: {
    Applications(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    applicationDecision(
      applicationNumber: BigNumberish,
      status: BigNumberish,
      reiURI: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    applyForApproval(
      name: string,
      description: string,
      imageURI: string,
      country: string,
      city: string,
      gpsCoordinates: string,
      surfaceAreaInSQMTR: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    getApplicationAt(
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getPendingApplication(overrides?: CallOverrides): Promise<BigNumber>;

    getRejectedApplication(overrides?: CallOverrides): Promise<BigNumber>;

    isApprover(approver: string, overrides?: CallOverrides): Promise<BigNumber>;

    numberOfApplications(overrides?: CallOverrides): Promise<BigNumber>;

    numberOfApplicationsAccepted(overrides?: CallOverrides): Promise<BigNumber>;

    numberOfApplicationsRejected(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setApprover(
      approver: string,
      enabled: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setApprovers(
      approvers: string[],
      enabled: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setREIAddress(
      reiaddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    Applications(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    applicationDecision(
      applicationNumber: BigNumberish,
      status: BigNumberish,
      reiURI: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    applyForApproval(
      name: string,
      description: string,
      imageURI: string,
      country: string,
      city: string,
      gpsCoordinates: string,
      surfaceAreaInSQMTR: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    getApplicationAt(
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getPendingApplication(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getRejectedApplication(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isApprover(
      approver: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    numberOfApplications(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    numberOfApplicationsAccepted(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    numberOfApplicationsRejected(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setApprover(
      approver: string,
      enabled: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setApprovers(
      approvers: string[],
      enabled: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setREIAddress(
      reiaddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}