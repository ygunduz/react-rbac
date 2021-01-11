import { Role } from "./model";

export const hasAnyAuthority = (authorities: string[], hasAnyAuthorities?: string[]) => {
    if (authorities && authorities.length !== 0) {
      if (!hasAnyAuthorities || hasAnyAuthorities.length === 0) {
        return true;
      }
      return hasAnyAuthorities.some(auth => authorities.includes(auth));
    }
    return false;
  };

export const mapRolesToPermissionSet = (roles : ReadonlyArray<Role>) : Set<string> => {
    const permissionSet = new Set<string>(); 
    roles.forEach(role => {
        role.permissions?.forEach(permission => {
            permissionSet.add(`${permission.screen}:${permission.action}`);
        })
    })
    return permissionSet;
}

export const check = (userAuthorities: string[], permissionSet: Set<string>, authorities?: string[], screen?: string, action?: string) : boolean => {
    // check authority first if user authorities matches any given authority return true
    if(hasAnyAuthority(userAuthorities, authorities)) {
        return true;
    }
    
    return permissionSet.has(`${screen}:${action}`);
}