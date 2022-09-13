import { ScriptSettingsInterface } from "../Loader/Interfaces/Settings/settings.interface";
import JSLoader from "../Loader/jsloader";


const DynamicScriptSettings: ScriptSettingsInterface;
const DynamicScriptLoader = JSLoader;


declare module 'web-dynamicjs' {
  export default DynamicScriptLoader;
  export {
    DynamicScriptLoader,
    DynamicScriptSettings
  }
};