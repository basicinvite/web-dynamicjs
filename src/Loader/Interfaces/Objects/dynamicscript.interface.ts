import { JSLoaderSettingsInterface } from "../Settings/settings.interface"

export interface DynamicScriptInterface {
  settings: JSLoaderSettingsInterface
  code: string,
  srcString: string,
  html: HTMLScriptElement | string
}