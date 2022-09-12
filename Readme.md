# DynamicJSLoader

DynamicJSLoader is a tool used to load js dynamically on the page. Supports both inline and external scripts.

## Installation

To install DynamicJSLoader

```bash
npm install _____
```

## Usage

```typescript
import {WebDynamicJSLoader} from 'web-dynamicjsloader';


const loader = new WebDynamicJSLoader.Loader();

//If creating inline script, specify inlineCode property instead of src. 

//Attributes are optional.
const settings: WebDynamicJSLoader.Settings = {
  src: "https://basicinvite.com/js_loader.js",
  attributes: [{name: 'async', value: 'async'}]
}

//Call this and specify the parent for where js is to be loaded.
loader.loadNewDynamicScript('body', settings);

```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.