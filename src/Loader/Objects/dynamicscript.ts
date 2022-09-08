import { DynamicScriptAttributesInterface } from "../Interfaces/Objects/dynamicscript.attribute.interface";
import { DynamicScriptInterface } from "../Interfaces/Objects/dynamicscript.interface";
import { JSLoaderSettingsInterface } from "../Interfaces/Settings/settings.interface";

export default class DynamicScript implements DynamicScriptInterface {

  public settings: JSLoaderSettingsInterface;
  public isInline: boolean;


  constructor(settings: JSLoaderSettingsInterface) {

    //Construct object with optional src and attributes. 
    this.settings = settings;

    //If src, then the script is not inline.
    this.settings?.src ? this.isInline = false : this.isInline = true;
  }

  /**
   * Returns code string
   */
  get code(): string {
    return this.settings?.inlineCode ? this.settings?.inlineCode : '';
  }

  /**
   * Returns the attributes array to be used on the script element
   */
  get attributesArray(): Array<DynamicScriptAttributesInterface> | undefined {
    return this.settings?.attributes;
  }

  /**
   * Return the src in the settings
   */
  get srcString(): string {
    return this.settings.src ? this.settings.src : '';
  }

  get html(): HTMLScriptElement {

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

    return html;

  }


}