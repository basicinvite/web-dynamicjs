import { JSLoaderInterface } from "../Loader/Interfaces/jsloader.interface";
import { ScriptSettingsInterface } from "../Loader/Interfaces/Settings/settings.interface";

interface DynamicJSInterface {
  Loader: JSLoaderInterface,
  Settings: ScriptSettingsInterface
}

const dynamicJsLoader: DynamicJSInterface;

declare module "web-dynamicjsloader" {
  export = dynamicJsLoader;
}