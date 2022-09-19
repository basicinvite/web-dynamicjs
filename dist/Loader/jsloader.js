"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
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
        return __awaiter(this, void 0, void 0, function* () {
            //Call callback if one is provided.
            if (callback) {
                yield callback();
            }
        });
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
                scriptElement.addEventListener('load', () => __awaiter(this, void 0, void 0, function* () {
                    yield this._onDynamicScriptLoad(callback);
                    resolve(true);
                }), false);
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
