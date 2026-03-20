/* eslint-disable */

// @ts-nocheck

import type { ActorMethod } from '@icp-sdk/core/agent';
import type { IDL } from '@icp-sdk/core/candid';
import type { Principal } from '@icp-sdk/core/principal';

export interface Message { 'text' : string, 'sender' : string }
export interface ProfileView {
  'username' : string,
  'phone' : string,
  'coins' : bigint,
  'isVIP' : boolean,
  'isAdmin' : boolean,
  'lastDailyReward' : bigint,
  'bio' : string,
  'avatarUrl' : string,
}
export interface UserEntry {
  'principal' : string,
  'username' : string,
  'phone' : string,
  'coins' : bigint,
  'isVIP' : boolean,
}
export interface AppStats {
  'totalUsers' : bigint,
  'vipCount' : bigint,
  'totalMessages' : bigint,
}
export interface LeaderboardEntry {
  'username' : string,
  'coins' : bigint,
  'isVIP' : boolean,
}
export interface _SERVICE {
  'registerUser' : ActorMethod<[string, string], undefined>,
  'updateProfile' : ActorMethod<[string, string], undefined>,
  'claimAdminByPhone' : ActorMethod<[string], undefined>,
  'claimAdmin' : ActorMethod<[], undefined>,
  'getProfile' : ActorMethod<[], ProfileView>,
  'claimDailyReward' : ActorMethod<[bigint], undefined>,
  'spinWheel' : ActorMethod<[bigint], undefined>,
  'purchaseVIP' : ActorMethod<[], undefined>,
  'grantVIP' : ActorMethod<[], undefined>,
  'grantVIPToUser' : ActorMethod<[string], undefined>,
  'addCoins' : ActorMethod<[bigint], undefined>,
  'addCoinsToUser' : ActorMethod<[string, bigint], undefined>,
  'sendMessage' : ActorMethod<[string], undefined>,
  'getMessages' : ActorMethod<[], Array<Message>>,
  'clearMessages' : ActorMethod<[], undefined>,
  'getAllUsers' : ActorMethod<[], Array<UserEntry>>,
  'getAppStats' : ActorMethod<[], AppStats>,
  'getLeaderboard' : ActorMethod<[], Array<LeaderboardEntry>>,
  'playSlots' : ActorMethod<[bigint, bigint], undefined>,
  'playDice' : ActorMethod<[bigint, boolean], undefined>,
  'playBlackjack' : ActorMethod<[bigint, boolean], undefined>,
  'playCardFlip' : ActorMethod<[bigint], undefined>,
}
export declare const idlService: IDL.ServiceClass;
export declare const idlInitArgs: IDL.Type[];
export declare const idlFactory: IDL.InterfaceFactory;
export declare const init: (args: { IDL: typeof IDL }) => IDL.Type[];
