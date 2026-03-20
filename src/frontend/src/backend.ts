/* eslint-disable */

// @ts-nocheck

import { Actor, HttpAgent, type HttpAgentOptions, type ActorConfig, type Agent, type ActorSubclass } from "@icp-sdk/core/agent";
import type { Principal } from "@icp-sdk/core/principal";
import { idlFactory, type _SERVICE } from "./declarations/backend.did";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
function some<T>(value: T): Some<T> {
    return { __kind__: "Some", value: value };
}
function none(): None {
    return { __kind__: "None" };
}
function isNone<T>(option: Option<T>): option is None {
    return option.__kind__ === "None";
}
function isSome<T>(option: Option<T>): option is Some<T> {
    return option.__kind__ === "Some";
}
function unwrap<T>(option: Option<T>): T {
    if (isNone(option)) throw new Error("unwrap: none");
    return option.value;
}
function candid_some<T>(value: T): [T] { return [value]; }
function candid_none<T>(): [] { return []; }
function record_opt_to_undefined<T>(arg: T | null): T | undefined {
    return arg == null ? undefined : arg;
}
export class ExternalBlob {
    _blob?: Uint8Array<ArrayBuffer> | null;
    directURL: string;
    onProgress?: (percentage: number) => void = undefined;
    private constructor(directURL: string, blob: Uint8Array<ArrayBuffer> | null) {
        if (blob) { this._blob = blob; }
        this.directURL = directURL;
    }
    static fromURL(url: string): ExternalBlob {
        return new ExternalBlob(url, null);
    }
    static fromBytes(blob: Uint8Array<ArrayBuffer>): ExternalBlob {
        const url = URL.createObjectURL(new Blob([new Uint8Array(blob)], { type: 'application/octet-stream' }));
        return new ExternalBlob(url, blob);
    }
    public async getBytes(): Promise<Uint8Array<ArrayBuffer>> {
        if (this._blob) return this._blob;
        const response = await fetch(this.directURL);
        const blob = await response.blob();
        this._blob = new Uint8Array(await blob.arrayBuffer());
        return this._blob;
    }
    public getDirectURL(): string { return this.directURL; }
    public withUploadProgress(onProgress: (percentage: number) => void): ExternalBlob {
        this.onProgress = onProgress;
        return this;
    }
}

export interface Message { text: string; sender: string; }
export interface ProfileView {
    username: string;
    phone: string;
    coins: bigint;
    isVIP: boolean;
    isAdmin: boolean;
    lastDailyReward: bigint;
    bio: string;
    avatarUrl: string;
}
export interface UserEntry {
    principal: string;
    username: string;
    phone: string;
    coins: bigint;
    isVIP: boolean;
}
export interface AppStats {
    totalUsers: bigint;
    vipCount: bigint;
    totalMessages: bigint;
}
export interface LeaderboardEntry {
    username: string;
    coins: bigint;
    isVIP: boolean;
}
export interface backendInterface {
    registerUser(username: string, phone: string): Promise<void>;
    updateProfile(bio: string, avatarUrl: string): Promise<void>;
    claimAdminByPhone(phone: string): Promise<void>;
    claimAdmin(): Promise<void>;
    getProfile(): Promise<ProfileView>;
    claimDailyReward(reward: bigint): Promise<void>;
    spinWheel(reward: bigint): Promise<void>;
    purchaseVIP(): Promise<void>;
    grantVIP(): Promise<void>;
    grantVIPToUser(principalText: string): Promise<void>;
    addCoins(amount: bigint): Promise<void>;
    addCoinsToUser(principalText: string, amount: bigint): Promise<void>;
    sendMessage(text: string): Promise<void>;
    getMessages(): Promise<Array<Message>>;
    clearMessages(): Promise<void>;
    getAllUsers(): Promise<Array<UserEntry>>;
    getAppStats(): Promise<AppStats>;
    getLeaderboard(): Promise<Array<LeaderboardEntry>>;
    playSlots(bet: bigint, won: bigint): Promise<void>;
    playDice(bet: bigint, won: boolean): Promise<void>;
    playBlackjack(bet: bigint, won: boolean): Promise<void>;
    playCardFlip(reward: bigint): Promise<void>;
}

export class Backend implements backendInterface {
    constructor(private actor: ActorSubclass<_SERVICE>, private _uploadFile: (file: ExternalBlob) => Promise<Uint8Array>, private _downloadFile: (file: Uint8Array) => Promise<ExternalBlob>, private processError?: (error: unknown) => never) {}

    private async call<T>(fn: () => Promise<T>): Promise<T> {
        if (this.processError) {
            try { return await fn(); }
            catch (e) { this.processError(e); throw new Error("unreachable"); }
        }
        return await fn();
    }

    async registerUser(arg0: string, arg1: string): Promise<void> {
        return this.call(() => this.actor.registerUser(arg0, arg1));
    }
    async updateProfile(arg0: string, arg1: string): Promise<void> {
        return this.call(() => this.actor.updateProfile(arg0, arg1));
    }
    async claimAdminByPhone(arg0: string): Promise<void> {
        return this.call(() => this.actor.claimAdminByPhone(arg0));
    }
    async claimAdmin(): Promise<void> {
        return this.call(() => this.actor.claimAdmin());
    }
    async getProfile(): Promise<ProfileView> {
        return this.call(async () => {
            const result = await this.actor.getProfile();
            return result as unknown as ProfileView;
        });
    }
    async claimDailyReward(arg0: bigint): Promise<void> {
        return this.call(() => this.actor.claimDailyReward(arg0));
    }
    async spinWheel(arg0: bigint): Promise<void> {
        return this.call(() => this.actor.spinWheel(arg0));
    }
    async purchaseVIP(): Promise<void> {
        return this.call(() => this.actor.purchaseVIP());
    }
    async grantVIP(): Promise<void> {
        return this.call(() => this.actor.grantVIP());
    }
    async grantVIPToUser(arg0: string): Promise<void> {
        return this.call(() => this.actor.grantVIPToUser(arg0));
    }
    async addCoins(arg0: bigint): Promise<void> {
        return this.call(() => this.actor.addCoins(arg0));
    }
    async addCoinsToUser(arg0: string, arg1: bigint): Promise<void> {
        return this.call(() => this.actor.addCoinsToUser(arg0, arg1));
    }
    async sendMessage(arg0: string): Promise<void> {
        return this.call(() => this.actor.sendMessage(arg0));
    }
    async getMessages(): Promise<Array<Message>> {
        return this.call(async () => {
            const result = await this.actor.getMessages();
            return result as unknown as Array<Message>;
        });
    }
    async clearMessages(): Promise<void> {
        return this.call(() => this.actor.clearMessages());
    }
    async getAllUsers(): Promise<Array<UserEntry>> {
        return this.call(async () => {
            const result = await this.actor.getAllUsers();
            return result as unknown as Array<UserEntry>;
        });
    }
    async getAppStats(): Promise<AppStats> {
        return this.call(async () => {
            const result = await this.actor.getAppStats();
            return result as unknown as AppStats;
        });
    }
    async getLeaderboard(): Promise<Array<LeaderboardEntry>> {
        return this.call(async () => {
            const result = await this.actor.getLeaderboard();
            return result as unknown as Array<LeaderboardEntry>;
        });
    }
    async playSlots(arg0: bigint, arg1: bigint): Promise<void> {
        return this.call(() => this.actor.playSlots(arg0, arg1));
    }
    async playDice(arg0: bigint, arg1: boolean): Promise<void> {
        return this.call(() => this.actor.playDice(arg0, arg1));
    }
    async playBlackjack(arg0: bigint, arg1: boolean): Promise<void> {
        return this.call(() => this.actor.playBlackjack(arg0, arg1));
    }
    async playCardFlip(arg0: bigint): Promise<void> {
        return this.call(() => this.actor.playCardFlip(arg0));
    }
}

export interface CreateActorOptions {
    agent?: Agent;
    agentOptions?: HttpAgentOptions;
    actorOptions?: ActorConfig;
    processError?: (error: unknown) => never;
}
export function createActor(canisterId: string, _uploadFile: (file: ExternalBlob) => Promise<Uint8Array>, _downloadFile: (file: Uint8Array) => Promise<ExternalBlob>, options: CreateActorOptions = {}): Backend {
    const agent = options.agent || HttpAgent.createSync({ ...options.agentOptions });
    if (options.agent && options.agentOptions) {
        console.warn("Detected both agent and agentOptions passed to createActor. Ignoring agentOptions and proceeding with the provided agent.");
    }
    const actor = Actor.createActor<_SERVICE>(idlFactory, {
        agent,
        canisterId: canisterId,
        ...options.actorOptions
    });
    return new Backend(actor, _uploadFile, _downloadFile, options.processError);
}
