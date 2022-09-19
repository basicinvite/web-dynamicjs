# DynamicJSLoader

DynamicJSLoader is a tool used to load js dynamically on the page. Supports both inline and external scripts.

## Installation

To install DynamicJSLoader

```bash
npm install https://github.com/basicinvite/web-dynamicjs.git#<version number>


EXAMPLE:

npm install https://github.com/basicinvite/web-dynamicjs.git#1.0.0
```

## Usage

```typescript
import JSLoader from 'web-dynamicjs';


const loader = new JSLoader.Loader();

//If creating inline script, specify inlineCode property instead of src. 

//Attributes are optional.
const settings: WebDynamicJSLoader.Settings = {
  src: "https://basicinvite.com/js_loader.js",
  attributes: [{name: 'async', value: 'async'}]
}

//You can load a script dynamically two ways...

//Option 1:
/************************/

//Create a new DynamicScript 
const script = new DynamicScript(settings);

//Call the loadNewDynamicScript method to actually load the new script element - callback is optional
loader.loadNewDynamicScript(script, 'body', callback);

//Option 2:
/************************/

//Just call createAndLoadDynamicScript if you don't need more control over the script.

loader.createAndLoadDynamicScript(settings, 'body', callback);

```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.