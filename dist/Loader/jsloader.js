"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dynamicscript_1 = __importDefault(require("./Objects/dynamicscript"));
class DynamicJSLoader {
    constructor() { }
    /**
     *
     * @param callback
     * @returns
     */
    _onDynamicScriptLoad(callback) {
        //Call callback if one is provided.
        if (callback) {
            callback();
        }
    }
    /**
     *
     * @param script
     * @param parentSelector
     * @param callback
     * @returns Promise<any>
     */
    loadNewDynamicScript(script, parentSelector, callback) {
        //Return a promise to notify when script has been loaded successfully.
        return new Promise((resolve) => {
            const scriptElement = script === null || script === void 0 ? void 0 : script.html;
            if (scriptElement) {
                scriptElement.addEventListener('load', () => {
                    this._onDynamicScriptLoad(callback);
                    resolve(true);
                }, false);
                const element = document.querySelector(parentSelector);
                element === null || element === void 0 ? void 0 : element.append(scriptElement);
            }
        });
    }
    /**
     *
     * @param settings
     * @returns DynamicScript
     */
    createNewDynamicScript(settings) {
        //Create a new dynamic script with the passed settings.
        return new dynamicscript_1.default(settings);
    }
    /**
     *
     * @param settings
     * @param parentSelector
     * @param callback
     */
    createAndLoadDynamicScript(settings, parentSelector, callback) {
        //Create and then load a dynamic script
        const script = this.createNewDynamicScript(settings);
        return this.loadNewDynamicScript(script, parentSelector, callback);
    }
}
exports.default = DynamicJSLoader;
