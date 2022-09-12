import { JSLoaderInterface } from "../Loader/Interfaces/jsloader.interface";
import { JSLoaderSettingsInterface } from "../Loader/Interfaces/Settings/settings.interface";

const DynamicJSLoader: JSLoaderInterface;
const DynamicJsLoaderSettings: JSLoaderSettingsInterface;

interface DynamicJSLoaderInterface {
  Loader: DynamicJSLoader,
  Settings: DynamicJsLoaderSettings
}

const WebDynamicJSLoader: DynamicJSLoaderInterface;

declare module "web-dynamicjsloader" {
  export = WebDynamicJSLoader;
}