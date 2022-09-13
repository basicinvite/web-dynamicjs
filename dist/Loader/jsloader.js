"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dynamicscript_1 = __importDefault(require("./Objects/dynamicscript"));
class DynamicJSLoader {
    constructor() { }
    loadNewDynamicScript(parentSelector, settings) {
        const scriptElement = new dynamicscript_1.default(settings);
        const element = document.querySelector(parentSelector);
        element === null || element === void 0 ? void 0 : element.append(scriptElement.html);
    }
}
exports.default = DynamicJSLoader;
