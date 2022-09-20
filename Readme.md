<p align="center">
<img src="https://www.basicinvite.com/skin/frontend/basicinvite/default/images/logomark_bi.svg" alt="Basic Invite Logo, SVG" width="100" />
</p>
<h1 align="center">web-dynamicjs</h1>

![AWS Web Image Generator Version](https://badgen.net/badge/version/1.0.0/green)
![Typescript](https://badgen.net/badge/icon/typescript/orange?icon=typescript&label)

---

*DynamicJSLoader is a tool used to load js dynamically on the page. Supports both inline and external scripts.*

---

## 📜 Table of contents
||
| ----------- |
| [ Installation ](#installation) |
| [ Usage ](#usage) |
| [ Contributing ](#contributing) |

---

# Installation

To install DynamicJSLoader

```bash
npm install git+https://github.com/basicinvite/web-dynamicjs.git#<tag>


EXAMPLE:

npm install git+https://github.com/basicinvite/web-dynamicjs.git#1.0.0
```

# Usage

## Including web-dynamicjs

Import JSLoader and create a new instance of class.

```typescript
import JSLoader from 'web-dynamicjs';

const loader = new JSLoader();

```
## Defining settings for dynamic script

Create new settings to pass into the loader, adhering to the . These settings are used to create the dynamic script that the loader will attempt to dynamically add to the DOM.

External scripts will have src and zero or more attributes.

Inline scripts will have inlineCode and zero or more attributes.

**The loader will determine whether an inline script is being loaded vs an external script.**

If settings are not valid, or no settings are provided, then the loader will not add a new script to the page.

Attributes are defined as an array of objects. The objects in the array must have the following properties:

1. Name of the attribute - `string`
2. Value of the attribute - `string`

For example,

```typescript
//If creating inline script, specify inlineCode property instead of src. 

//Attributes are optional.
const settings = {
  src: "https://basicinvite.com/js_loader.js",
  attributes: [{name: 'async', value: 'async'}]
}

```

To create an inline script, specify the inlineCode property.

```typescript

const settings = {
  inlineCode: "var x = 0;",
  attributes: [{name: 'async', value: 'async'}]
}

```

## Creating and loading a new script

You can load a script dynamically two ways...

### Option #1

1. Create a new `DynamicScript` and pass the script settings (as discussed in the previous section).

2. Call the `loadNewDynamicScript` method on the loader, passing appropriate parameters. 

*Note: the `callback` parameter is optional*

```typescript 

//Option 1:
/************************/

//Create a new DynamicScript 
const script = new DynamicScript(settings);

//Call the loadNewDynamicScript method to actually load the new script element - callback is optional
loader.loadNewDynamicScript(script, 'body', callback);
```

### Option #2

1. Call the `createAndLoadDynamicScript` method to create and load the script in one call.

```typescript
//Option 2:
/************************/

//Just call createAndLoadDynamicScript if you don't need more control over the script.

loader.createAndLoadDynamicScript(settings, 'body', callback);

```

# Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.