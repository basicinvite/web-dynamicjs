import { JSLoaderInterface } from "./Interfaces/jsloader.interface";
import { ScriptSettingsInterface } from "./Interfaces/Settings/settings.interface";
import DynamicScript from "./Objects/dynamicscript";

export default class DynamicJSLoader implements JSLoaderInterface {

  constructor() { }

  /**
   * 
   * @param callback 
   * @returns
   */
  private async _onDynamicScriptLoad(callback?: () => any) {
    //Call callback if one is provided.
    if (callback) {
      await callback();
    }
  }

  /**
   * 
   * @param script 
   * @param parentSelector 
   * @param callback 
   * @returns Promise<any>
   */
  loadNewDynamicScript(script: DynamicScript, parentSelector: string, callback?: () => any): Promise<any> {
    //Return a promise to notify when script has been loaded successfully.
    return new Promise((resolve) => {
      const scriptElement = script?.html;
      if (scriptElement) {
        scriptElement.addEventListener('load', async () => {
          await this._onDynamicScriptLoad(callback);
          resolve(true);
        }, false);
        const element = document.querySelector(parentSelector);
        element?.append(scriptElement);
      }
    });
  }

  /**
   * 
   * @param settings 
   * @returns DynamicScript
   */
  createNewDynamicScript(settings: ScriptSettingsInterface): DynamicScript {
    //Create a new dynamic script with the passed settings.
    return new DynamicScript(settings);
  }

  /**
   * 
   * @param settings 
   * @param parentSelector 
   * @param callback 
   */
  createAndLoadDynamicScript(settings: ScriptSettingsInterface, parentSelector: string, callback?: () => any): Promise<any> {
    //Create and then load a dynamic script
    const script = this.createNewDynamicScript(settings);
    return this.loadNewDynamicScript(script, parentSelector, callback);
  }

}