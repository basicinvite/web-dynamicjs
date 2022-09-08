import { JSLoaderSettingsInterface } from "../Settings/settings.interface"
import { DynamicScriptAttributesInterface } from "./dynamicscript.attribute.interface"

export interface DynamicScriptInterface {
  settings: JSLoaderSettingsInterface
  code: string,
  srcString: string,
  html: HTMLScriptElement
}