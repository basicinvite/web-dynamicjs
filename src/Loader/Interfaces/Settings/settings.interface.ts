import { DynamicScriptAttributesInterface } from "../Objects/dynamicscript.attribute.interface";

export interface JSLoaderSettingsInterface {
  src?: string,
  inlineCode?: string,
  attributes?: Array<DynamicScriptAttributesInterface>,
}