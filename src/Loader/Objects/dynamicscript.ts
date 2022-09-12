import { ScriptAttributesInterface } from "../Interfaces/Objects/dynamicscript.attribute.interface";
import { DynamicScriptInterface } from "../Interfaces/Objects/dynamicscript.interface";
import { ScriptSettingsInterface } from "../Interfaces/Settings/settings.interface";

export default class DynamicScript implements DynamicScriptInterface {

  public settings: ScriptSettingsInterface;
  public isInline: boolean;
  private valid: boolean;


  constructor(settings: ScriptSettingsInterface) {

    //Construct object with optional src and attributes. 
    this.settings = settings;
    this.valid = true;

    //If src, then the script is not inline.
    this.settings.inlineCode ? this.isInline = true : this.isInline = false;
  }

  /**
   * Returns code string
   */
  get code(): string {
    return this.settings.inlineCode ? this.settings.inlineCode : '';
  }

  /**
   * Returns the attributes array to be used on the script element
   */
  get attributesArray(): Array<ScriptAttributesInterface> | undefined {
    return this.settings.attributes;
  }

  /**
   * Return the src in the settings
   */
  get srcString(): string {
    return this.settings.src ? this.settings.src : '';
  }


  private _checkIfValid() {
    if (this.code && this.srcString) {
      this.valid = false;
    }

    if (!this.code && !this.srcString) {
      this.valid = false;
    }

    return this.valid;
  }

  get html(): HTMLScriptElement | string {

    let result;

    if (this._checkIfValid()) {
      //Create a new script element
      let html = document.createElement("script");

      //Always set attribute for type
      html.setAttribute("type", "text/javascript");

      //Check to see if a src is inline
      if (this.isInline) {

        //Get inline code, create new text node and append to the script element
        const codeNode = document.createTextNode(this.code);
        html.append(codeNode);

      } else {
        //If not inline, just set the src
        html.setAttribute("src", this.srcString);
      }

      //Append any attributes passed in settings to script
      this.attributesArray?.forEach(attr => {
        if (attr.name) {
          html.setAttribute(attr.name, attr.value);
        }
      });
      result = html;
    } else {
      result = '';
    }

    return result;
  }


}