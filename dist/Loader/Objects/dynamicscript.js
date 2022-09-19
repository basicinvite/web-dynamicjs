"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class DynamicScript {
    /**
     *
     * @param settings
     */
    constructor(settings) {
        //Construct object with optional src and attributes. 
        this.settings = settings;
        this.valid = true;
        //If src, then the script is not inline.
        this.settings.inlineCode ? this.isInline = true : this.isInline = false;
    }
    /**
     * Returns code string
     */
    get code() {
        return this.settings.inlineCode ? this.settings.inlineCode : '';
    }
    /**
     * Returns the attributes array to be used on the script element
     */
    get attributesArray() {
        return this.settings.attributes;
    }
    /**
     * Return the src in the settings
     */
    get srcString() {
        return this.settings.src ? this.settings.src : '';
    }
    /**
     *
     * @returns Boolean
     */
    _checkIfValid() {
        if (this.code && this.srcString) {
            this.valid = false;
        }
        if (!this.code && !this.srcString) {
            this.valid = false;
        }
        return this.valid;
    }
    /**
     * Using settings, create an HTMLScriptElement.
     * If script created, return element, otherwise return null.
     */
    get html() {
        var _a;
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
            }
            else {
                //If not inline, just set the src
                html.setAttribute("src", this.srcString);
            }
            //Append any attributes passed in settings to script
            (_a = this.attributesArray) === null || _a === void 0 ? void 0 : _a.forEach(attr => {
                if (attr.name) {
                    html.setAttribute(attr.name, attr.value);
                }
            });
            result = html;
        }
        //Return the html element if there is html, otherwise return null
        return result ? result : null;
    }
}
exports.default = DynamicScript;
