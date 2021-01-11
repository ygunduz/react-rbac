"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var helpers_1 = require("./helpers");
var rbac_context_1 = require("./rbac-context");
var DefaultProps = {
    yes: function () { return null; },
    no: function () { return null; },
};
var Can = function (props) {
    var screen = props.screen, action = props.action, yes = props.yes, no = props.no;
    return react_1.default.createElement(rbac_context_1.RBACConsumer, null, function (_a) {
        var permissionSet = _a.permissionSet, authorities = _a.authorities;
        return helpers_1.check(authorities, permissionSet, props.authorities, screen, action) ? yes() : no();
    });
};
Can.defaultProps = DefaultProps;
exports.default = Can;
