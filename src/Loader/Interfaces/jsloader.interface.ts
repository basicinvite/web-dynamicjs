import { ScriptSettingsInterface } from "./Settings/settings.interface";

export interface JSLoaderInterface {

  loadNewDynamicScript(parentSelector: string, settings: ScriptSettingsInterface): void

}