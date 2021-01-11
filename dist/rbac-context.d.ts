import React from 'react';
import { PropsWithChildren } from "react";
import { Role } from "./model";
interface IRBRACContext {
    authorities: string[];
    permissionSet: Set<string>;
}
declare type RBACProviderProps = PropsWithChildren<{
    roles: ReadonlyArray<Role>;
    authorities: string[];
}>;
export declare const RBACContext: React.Context<IRBRACContext>;
export declare const RBACConsumer: React.Consumer<IRBRACContext>;
export declare const RBACProvider: (props: RBACProviderProps) => JSX.Element;
export {};
