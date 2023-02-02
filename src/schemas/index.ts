import { JSONSchema7 } from "json-schema";

import AccountLinkageCredential from "./AccountLinkageCredential/latest";
import AttendanceCredential from "./AttendanceCredential/latest";
import BaseVerifiableCredential from "./BaseVerifiableCredential/latest";
import BetaUserCredential from "./BetaUserCredential/latest";
import CertificateOfCompletionCredential from "./CertificateOfCompletionCredential/latest";
import DarkModePrefCredential from "./DarkModePrefCredential/latest";
import GuestSpeakerCredential from "./GuestSpeakerCredential/latest";
import GMCredential from "./GMCredential/latest";
import InvestorCredential from "./InvestorCredential/latest";
import KudosCredential from "./KudosCredential/latest";
import MembershipCredential from "./MembershipCredential/latest";
import OfficialDisconautCredential from "./OfficialDisconautCredential/latest";
import OGTwitterVerificationCredential from "./OGTwitterVerificationCredential/latest";
import OrganizationCredential from "./OrganizationCredential/latest";
import PrimaryLanguageCredential from "./PrimaryLanguageCredential/latest";
import ProfileCredential from "./ProfileCredential/latest";
import PronounsCredential from "./PronounsCredential/latest";
import SnapsCredential from "./SnapsCredential/latest";
import TshirtSizeCredential from "./TshirtSizeCredential/latest";
import StarSignCredential from "./StarSignCredential/latest";
import VouchCredential from "./VouchCredential/latest";
import EthDenverCredential from "./EthDenverCredential/latest";


export {
  AccountLinkageCredential,
  AttendanceCredential,
  BaseVerifiableCredential,
  BetaUserCredential,
  CertificateOfCompletionCredential,
  DarkModePrefCredential,
  EthDenverCredential,
  GuestSpeakerCredential,
  GMCredential,
  InvestorCredential,
  KudosCredential,
  MembershipCredential,
  OfficialDisconautCredential,
  OGTwitterVerificationCredential,
  OrganizationCredential,
  PrimaryLanguageCredential,
  ProfileCredential,
  PronounsCredential,
  SnapsCredential,
  StarSignCredential,
  TshirtSizeCredential,
  VouchCredential,
};

export const issuableSchemas: JSONSchema7[] = [
  GMCredential,
  MembershipCredential,
  BetaUserCredential,
  InvestorCredential,
  OrganizationCredential,
];
