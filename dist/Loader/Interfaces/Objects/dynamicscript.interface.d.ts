import { ScriptSettingsInterface } from "../Settings/settings.interface";
export interface DynamicScriptInterface {
    settings: ScriptSettingsInterface;
    code: string;
    srcString: string;
    html: HTMLScriptElement | null;
}
