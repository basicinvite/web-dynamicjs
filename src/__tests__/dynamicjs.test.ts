/**
 * @jest-environment jsdom
 */

import { ScriptSettingsInterface } from '../Loader/Interfaces/Settings/settings.interface';
import DynamicScript from '../Loader/Objects/dynamicscript';

//Test if settings are null.
describe("Test DynamicScript Class returns expected html if settings are null", () => {
  test('When src is set, correct html is returned', () => {
    const settings = {};
    const script = new DynamicScript(settings);

    expect(script.html).toBeNull();
    expect(script.isInline).toBeFalsy();
  });

  test('When src is set, correct code is returned', () => {
    const settings = {};
    const script = new DynamicScript(settings);

    expect(script.code).toBe("");
    expect(script.isInline).toBeFalsy();
  });

  test('When src is set and code is set, then no dynamic script html should be returned because it is not valid', () => {
    const settings: ScriptSettingsInterface = {
      src: "https://basicinvite.com",
      inlineCode: "var x = 0;"
    };
    const script = new DynamicScript(settings);
    expect(script.html).toBeNull();
  });

  test('When src is set and code is set, code is returned, but no dynamic script html should be returned because it is not valid', () => {
    const settings: ScriptSettingsInterface = {
      src: "https://basicinvite.com",
      inlineCode: "var x = 0;"
    };
    const script = new DynamicScript(settings);

    expect(script.code).toBe("var x = 0;");
    expect(script.html).toBeNull();
  });

  test('When src is set and code is set, code is returned, attributes array is populated, but no then no dynamic script html should be returned because it is not valid', () => {
    const settings: ScriptSettingsInterface = {
      src: "https://basicinvite.com",
      inlineCode: "var x = 0;",
      attributes: [{ name: 'test', value: "test" }]
    };
    const script = new DynamicScript(settings);

    expect(script.code).toBe("var x = 0;");
    expect(script.attributesArray).toHaveLength(1);
    expect(script.html).toBeNull();
  });

});

//Test getter and setter methods.
describe("Test getter and setter methods for DynamicScript class", () => {
  test('When src is set, code should be empty string and isInline should be false', () => {
    const settings: ScriptSettingsInterface = {
      src: 'https://www.google.com/recaptcha/api.js?render',
    }
    const script = new DynamicScript(settings);

    expect(script.code).toBe("");
    expect(script.isInline).toBeFalsy();
  });

  test('When src is set and attributes provided, script has a populated attributes array', () => {
    const settings: ScriptSettingsInterface = {
      src: 'https://www.google.com/recaptcha/api.js?render',
      attributes: [{ name: 'test', value: "test" }]
    }
    const script = new DynamicScript(settings);
    const attrArray = script.attributesArray;
    expect(attrArray).toHaveLength(1);
    expect(attrArray && attrArray[0].name).toBe("test");
    expect(script.isInline).toBeFalsy();
  });

});

//Test to make sure that an external script with and without attributes set returns correct html.
describe("Test that when loading dynamic script, script with a source and attributes loads correct html", () => {
  test('When src is set, correct html is returned', () => {
    const settings: ScriptSettingsInterface = {
      src: 'https://www.google.com/recaptcha/api.js?render'
    }
    const script = new DynamicScript(settings);
    const element = document.createElement("script");
    element.setAttribute('src', 'https://www.google.com/recaptcha/api.js?render');
    element.setAttribute('type', 'text/javascript');
    expect(script.html).toStrictEqual(element);
    expect(script.isInline).toBeFalsy();
  });

  test('When src is set and attributes are passed, correct html is returned', () => {
    const settings: ScriptSettingsInterface = {
      src: 'https://www.google.com/recaptcha/api.js?render',
      attributes: [{ name: 'defer', value: 'defer' }]
    }
    const script = new DynamicScript(settings);
    const element = document.createElement("script");
    element.setAttribute('src', 'https://www.google.com/recaptcha/api.js?render');
    element.setAttribute('type', 'text/javascript');
    element.setAttribute('defer', 'defer');
    expect(script.html).toStrictEqual(element);
    expect(script.isInline).toBeFalsy();
  });

});

//Test to make sure that an inline script with and without attributes set returns correct html.
describe("Test that when loading dynamic script, script with a source and attributes loads correct html", () => {
  test('When src is not set, correct html is returned', () => {
    const settings: ScriptSettingsInterface = {
      inlineCode: "var x = 0;"
    }
    const script = new DynamicScript(settings);
    const element = document.createElement("script");
    const codeNode = document.createTextNode('var x = 0;');
    element.setAttribute('type', 'text/javascript');
    element.append(codeNode);
    expect(script.html).toStrictEqual(element);
    expect(script.isInline).toBeTruthy();
  });

  test('When src is not set and has attributes, correct html is returned', () => {
    const settings: ScriptSettingsInterface = {
      inlineCode: "var x = 0;",
      attributes: [{ name: 'defer', value: 'defer' }]
    }
    const script = new DynamicScript(settings);
    const element = document.createElement("script");
    const codeNode = document.createTextNode('var x = 0;');
    element.setAttribute('type', 'text/javascript');
    element.setAttribute('defer', 'defer');
    element.append(codeNode);
    expect(script.html).toStrictEqual(element);
    expect(script.isInline).toBeTruthy();
  });

});

//Test to make sure that a dynamic script being loaded without a source or inline code returns correct html.
describe("Test that when loading dynamic script, script with a source and attributes loads correct html", () => {
  test('When src is not set, correct html is returned', () => {
    const settings: ScriptSettingsInterface = {}
    const script = new DynamicScript(settings);
    expect(script.html).toBeNull();
  });

});