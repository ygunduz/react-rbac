"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useCan = exports.Can = exports.RBACProvider = void 0;
var rbac_context_1 = require("./rbac-context");
Object.defineProperty(exports, "RBACProvider", { enumerable: true, get: function () { return rbac_context_1.RBACProvider; } });
var can_1 = __importDefault(require("./can"));
exports.Can = can_1.default;
var use_can_1 = require("./use-can");
Object.defineProperty(exports, "useCan", { enumerable: true, get: function () { return use_can_1.useCan; } });
__exportStar(require("./model"), exports);
