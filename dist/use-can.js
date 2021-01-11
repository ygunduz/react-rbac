"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useCan = void 0;
var react_1 = __importDefault(require("react"));
var helpers_1 = require("./helpers");
var rbac_context_1 = require("./rbac-context");
var useCan = function () {
    var context = react_1.default.useContext(rbac_context_1.RBACContext);
    var can = react_1.default.useMemo(function () { return (function (screen, action, authorities) {
        return helpers_1.check(context.authorities, context.permissionSet, authorities, screen, action);
    }); }, [context.authorities, context.permissionSet]);
    return { can: can };
};
exports.useCan = useCan;
