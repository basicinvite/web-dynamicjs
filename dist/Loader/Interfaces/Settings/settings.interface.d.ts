import { ScriptAttributesInterface } from "../Objects/dynamicscript.attribute.interface";
export interface ScriptSettingsInterface {
    src?: string;
    inlineCode?: string;
    attributes?: Array<ScriptAttributesInterface>;
}
