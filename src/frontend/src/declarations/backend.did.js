/* eslint-disable */

// @ts-nocheck

import { IDL } from '@icp-sdk/core/candid';

export const Message = IDL.Record({ 'text' : IDL.Text, 'sender' : IDL.Text });
export const ProfileView = IDL.Record({
  'username' : IDL.Text,
  'phone' : IDL.Text,
  'coins' : IDL.Nat,
  'isVIP' : IDL.Bool,
  'isAdmin' : IDL.Bool,
  'lastDailyReward' : IDL.Int,
  'bio' : IDL.Text,
  'avatarUrl' : IDL.Text,
});
export const UserEntry = IDL.Record({
  'principal' : IDL.Text,
  'username' : IDL.Text,
  'phone' : IDL.Text,
  'coins' : IDL.Nat,
  'isVIP' : IDL.Bool,
});
export const AppStats = IDL.Record({
  'totalUsers' : IDL.Nat,
  'vipCount' : IDL.Nat,
  'totalMessages' : IDL.Nat,
});
export const LeaderboardEntry = IDL.Record({
  'username' : IDL.Text,
  'coins' : IDL.Nat,
  'isVIP' : IDL.Bool,
});

export const idlService = IDL.Service({
  'registerUser' : IDL.Func([IDL.Text, IDL.Text], [], []),
  'updateProfile' : IDL.Func([IDL.Text, IDL.Text], [], []),
  'claimAdminByPhone' : IDL.Func([IDL.Text], [], []),
  'claimAdmin' : IDL.Func([], [], []),
  'getProfile' : IDL.Func([], [ProfileView], ['query']),
  'claimDailyReward' : IDL.Func([IDL.Nat], [], []),
  'spinWheel' : IDL.Func([IDL.Nat], [], []),
  'purchaseVIP' : IDL.Func([], [], []),
  'grantVIP' : IDL.Func([], [], []),
  'grantVIPToUser' : IDL.Func([IDL.Text], [], []),
  'addCoins' : IDL.Func([IDL.Nat], [], []),
  'addCoinsToUser' : IDL.Func([IDL.Text, IDL.Nat], [], []),
  'sendMessage' : IDL.Func([IDL.Text], [], []),
  'getMessages' : IDL.Func([], [IDL.Vec(Message)], ['query']),
  'clearMessages' : IDL.Func([], [], []),
  'getAllUsers' : IDL.Func([], [IDL.Vec(UserEntry)], ['query']),
  'getAppStats' : IDL.Func([], [AppStats], ['query']),
  'getLeaderboard' : IDL.Func([], [IDL.Vec(LeaderboardEntry)], ['query']),
  'playSlots' : IDL.Func([IDL.Nat, IDL.Nat], [], []),
  'playDice' : IDL.Func([IDL.Nat, IDL.Bool], [], []),
  'playBlackjack' : IDL.Func([IDL.Nat, IDL.Bool], [], []),
  'playCardFlip' : IDL.Func([IDL.Nat], [], []),
});

export const idlInitArgs = [];

export const idlFactory = ({ IDL }) => {
  const Message = IDL.Record({ 'text' : IDL.Text, 'sender' : IDL.Text });
  const ProfileView = IDL.Record({
    'username' : IDL.Text,
    'phone' : IDL.Text,
    'coins' : IDL.Nat,
    'isVIP' : IDL.Bool,
    'isAdmin' : IDL.Bool,
    'lastDailyReward' : IDL.Int,
    'bio' : IDL.Text,
    'avatarUrl' : IDL.Text,
  });
  const UserEntry = IDL.Record({
    'principal' : IDL.Text,
    'username' : IDL.Text,
    'phone' : IDL.Text,
    'coins' : IDL.Nat,
    'isVIP' : IDL.Bool,
  });
  const AppStats = IDL.Record({
    'totalUsers' : IDL.Nat,
    'vipCount' : IDL.Nat,
    'totalMessages' : IDL.Nat,
  });
  const LeaderboardEntry = IDL.Record({
    'username' : IDL.Text,
    'coins' : IDL.Nat,
    'isVIP' : IDL.Bool,
  });
  return IDL.Service({
    'registerUser' : IDL.Func([IDL.Text, IDL.Text], [], []),
    'updateProfile' : IDL.Func([IDL.Text, IDL.Text], [], []),
    'claimAdminByPhone' : IDL.Func([IDL.Text], [], []),
    'claimAdmin' : IDL.Func([], [], []),
    'getProfile' : IDL.Func([], [ProfileView], ['query']),
    'claimDailyReward' : IDL.Func([IDL.Nat], [], []),
    'spinWheel' : IDL.Func([IDL.Nat], [], []),
    'purchaseVIP' : IDL.Func([], [], []),
    'grantVIP' : IDL.Func([], [], []),
    'grantVIPToUser' : IDL.Func([IDL.Text], [], []),
    'addCoins' : IDL.Func([IDL.Nat], [], []),
    'addCoinsToUser' : IDL.Func([IDL.Text, IDL.Nat], [], []),
    'sendMessage' : IDL.Func([IDL.Text], [], []),
    'getMessages' : IDL.Func([], [IDL.Vec(Message)], ['query']),
    'clearMessages' : IDL.Func([], [], []),
    'getAllUsers' : IDL.Func([], [IDL.Vec(UserEntry)], ['query']),
    'getAppStats' : IDL.Func([], [AppStats], ['query']),
    'getLeaderboard' : IDL.Func([], [IDL.Vec(LeaderboardEntry)], ['query']),
    'playSlots' : IDL.Func([IDL.Nat, IDL.Nat], [], []),
    'playDice' : IDL.Func([IDL.Nat, IDL.Bool], [], []),
    'playBlackjack' : IDL.Func([IDL.Nat, IDL.Bool], [], []),
    'playCardFlip' : IDL.Func([IDL.Nat], [], []),
  });
};

export const init = ({ IDL }) => { return []; };
