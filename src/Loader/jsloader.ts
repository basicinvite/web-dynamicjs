import { JSLoaderInterface } from "./Interfaces/jsloader.interface";
import { ScriptSettingsInterface } from "./Interfaces/Settings/settings.interface";
import DynamicScript from "./Objects/dynamicscript";

export class JSLoader implements JSLoaderInterface {

  constructor() { }

  loadNewDynamicScript(parentSelector: string, settings: ScriptSettingsInterface) {
    const scriptElement = new DynamicScript(settings);
    const element = document.querySelector(parentSelector);

    element?.append(scriptElement.html);
  }

}