import { JSLoaderInterface } from "./Interfaces/jsloader.interface";
import { JSLoaderSettingsInterface } from "./Interfaces/Settings/settings.interface";
import DynamicScript from "./Objects/dynamicscript";

export class JSLoader implements JSLoaderInterface {

  constructor() { }

  loadNewDynamicScript(parentSelector: string, settings: JSLoaderSettingsInterface) {
    const scriptElement = new DynamicScript(settings);
    const element = document.querySelector(parentSelector);

    element?.append(scriptElement.html);
  }

}