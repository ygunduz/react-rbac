"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RBACProvider = exports.RBACConsumer = exports.RBACContext = void 0;
var react_1 = __importDefault(require("react"));
var react_2 = require("react");
var helpers_1 = require("./helpers");
exports.RBACContext = react_2.createContext({
    authorities: [],
    permissionSet: new Set()
});
exports.RBACConsumer = exports.RBACContext.Consumer;
var RBACProvider = function (props) {
    return react_1.default.createElement(exports.RBACContext.Provider, { value: {
            authorities: props.authorities,
            permissionSet: helpers_1.mapRolesToPermissionSet(props.roles)
        } }, props.children);
};
exports.RBACProvider = RBACProvider;
