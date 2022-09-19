import { JSLoaderInterface } from "./Interfaces/jsloader.interface";
import { ScriptSettingsInterface } from "./Interfaces/Settings/settings.interface";
import DynamicScript from "./Objects/dynamicscript";
export default class DynamicJSLoader implements JSLoaderInterface {
    constructor();
    /**
     *
     * @param callback
     * @returns
     */
    private _onDynamicScriptLoad;
    /**
     *
     * @param script
     * @param parentSelector
     * @param callback
     * @returns Promise<any>
     */
    loadNewDynamicScript(script: DynamicScript, parentSelector: string, callback?: () => any): Promise<any>;
    /**
     *
     * @param settings
     * @returns DynamicScript
     */
    createNewDynamicScript(settings: ScriptSettingsInterface): DynamicScript;
    /**
     *
     * @param settings
     * @param parentSelector
     * @param callback
     */
    createAndLoadDynamicScript(settings: ScriptSettingsInterface, parentSelector: string, callback?: () => any): Promise<any>;
}
