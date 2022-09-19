import DynamicScript from "Loader/Objects/dynamicscript";
import { ScriptSettingsInterface } from "./Settings/settings.interface";
export interface JSLoaderInterface {
    loadNewDynamicScript(script: DynamicScript, parentSelector: string, callback?: () => any): Promise<any>;
    createNewDynamicScript(settings: ScriptSettingsInterface): DynamicScript;
    createAndLoadDynamicScript(settings: ScriptSettingsInterface, parentSelector: string, callback?: () => any): Promise<any>;
}
