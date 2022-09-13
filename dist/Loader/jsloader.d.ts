import { JSLoaderInterface } from "./Interfaces/jsloader.interface";
import { ScriptSettingsInterface } from "./Interfaces/Settings/settings.interface";
export default class JSLoader implements JSLoaderInterface {
    constructor();
    loadNewDynamicScript(parentSelector: string, settings: ScriptSettingsInterface): void;
}
