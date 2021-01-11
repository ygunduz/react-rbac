import { Role } from "./model";
export declare const hasAnyAuthority: (authorities: string[], hasAnyAuthorities?: string[] | undefined) => boolean;
export declare const mapRolesToPermissionSet: (roles: ReadonlyArray<Role>) => Set<string>;
export declare const check: (userAuthorities: string[], permissionSet: Set<string>, authorities?: string[] | undefined, screen?: string | undefined, action?: string | undefined) => boolean;
