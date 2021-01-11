"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.check = exports.mapRolesToPermissionSet = exports.hasAnyAuthority = void 0;
var hasAnyAuthority = function (authorities, hasAnyAuthorities) {
    if (authorities && authorities.length !== 0) {
        if (!hasAnyAuthorities || hasAnyAuthorities.length === 0) {
            return true;
        }
        return hasAnyAuthorities.some(function (auth) { return authorities.includes(auth); });
    }
    return false;
};
exports.hasAnyAuthority = hasAnyAuthority;
var mapRolesToPermissionSet = function (roles) {
    var permissionSet = new Set();
    roles.forEach(function (role) {
        var _a;
        (_a = role.permissions) === null || _a === void 0 ? void 0 : _a.forEach(function (permission) {
            permissionSet.add(permission.screen + ":" + permission.action);
        });
    });
    return permissionSet;
};
exports.mapRolesToPermissionSet = mapRolesToPermissionSet;
var check = function (userAuthorities, permissionSet, authorities, screen, action) {
    // check authority first if user authorities matches any given authority return true
    if (exports.hasAnyAuthority(userAuthorities, authorities)) {
        return true;
    }
    return permissionSet.has(screen + ":" + action);
};
exports.check = check;
