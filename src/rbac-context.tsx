import React from 'react';
import { createContext, PropsWithChildren } from "react";
import { mapRolesToPermissionSet } from "./helpers";
import { Role } from "./model";

interface IRBRACContext {
    authorities: string[],
    permissionSet: Set<string>
}

type RBACProviderProps = PropsWithChildren<{
    roles: ReadonlyArray<Role>,
    authorities: string[],
}>

export const RBACContext = createContext<IRBRACContext>({
    authorities: [],
    permissionSet: new Set<string>()
});

export const RBACConsumer = RBACContext.Consumer;
export const RBACProvider = (props : RBACProviderProps) => 
    <RBACContext.Provider
        value={{
            authorities: props.authorities,
            permissionSet: mapRolesToPermissionSet(props.roles)
        }}
    >
        {props.children}
    </RBACContext.Provider>