import { JSLoaderSettingsInterface } from "./Settings/settings.interface";

export interface JSLoaderInterface {

  loadNewDynamicScript(parentSelector: string, settings: JSLoaderSettingsInterface): void

}