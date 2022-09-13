import { ScriptAttributesInterface } from "../Interfaces/Objects/dynamicscript.attribute.interface";
import { DynamicScriptInterface } from "../Interfaces/Objects/dynamicscript.interface";
import { ScriptSettingsInterface } from "../Interfaces/Settings/settings.interface";
export default class DynamicScript implements DynamicScriptInterface {
    settings: ScriptSettingsInterface;
    isInline: boolean;
    private valid;
    constructor(settings: ScriptSettingsInterface);
    /**
     * Returns code string
     */
    get code(): string;
    /**
     * Returns the attributes array to be used on the script element
     */
    get attributesArray(): Array<ScriptAttributesInterface> | undefined;
    /**
     * Return the src in the settings
     */
    get srcString(): string;
    private _checkIfValid;
    get html(): HTMLScriptElement | string;
}
