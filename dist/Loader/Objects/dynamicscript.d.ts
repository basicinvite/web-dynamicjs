import { ScriptAttributesInterface } from "../Interfaces/Objects/dynamicscript.attribute.interface";
import { DynamicScriptInterface } from "../Interfaces/Objects/dynamicscript.interface";
import { ScriptSettingsInterface } from "../Interfaces/Settings/settings.interface";
export default class DynamicScript implements DynamicScriptInterface {
    settings: ScriptSettingsInterface;
    isInline: boolean;
    private valid;
    /**
     *
     * @param settings
     */
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
    /**
     *
     * @returns Boolean
     */
    private _checkIfValid;
    /**
     * Using settings, create an HTMLScriptElement.
     * If script created, return element, otherwise return null.
     */
    get html(): HTMLScriptElement | null;
}
