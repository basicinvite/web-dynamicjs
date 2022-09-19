/**
 * @jest-environment jsdom
 */

import { ScriptSettingsInterface } from '../Loader/Interfaces/Settings/settings.interface';
import DynamicJSLoader from '../Loader/jsloader';

let Loader: DynamicJSLoader | null;

//Create new Loader instance before each test.
beforeEach(() => {
  Loader = new DynamicJSLoader();
});

//Reset Loader instance after each test.
afterEach(() => {
  Loader = null;
});

//Creating callback to pass as param
function callback() {
  console.log("Working");
}

test('Test that method to create a new dynamic script returns a dynamic script with data.', () => {
  const settings: ScriptSettingsInterface = {
    src: 'https://basicinvite.com'
  }
  const script = Loader?.createNewDynamicScript(settings);
  expect(script).not.toBeNull();
  expect(script?.html).not.toBeNull();
});

test('Test that create and load dynamic script method (without a callback) works successfully.', () => {
  const Loader = new DynamicJSLoader();
  const settings: ScriptSettingsInterface = {
    src: 'https://basicinvite.com'
  }
  Loader.createAndLoadDynamicScript(settings, 'body');
  const element = document.querySelector('body script');
  const event = new Event('load')
  element?.dispatchEvent(event);
  expect(element).not.toBeNull();
  expect(element?.getAttribute('src')).toBe('https://basicinvite.com');
});

test('Test that create and load dynamic script method (with a callback) works successfully.', () => {
  const Loader = new DynamicJSLoader();
  const settings: ScriptSettingsInterface = {
    src: 'https://basicinvite.com'
  }
  Loader.createAndLoadDynamicScript(settings, 'body', callback);
  const element = document.querySelector('body script');
  const event = new Event('load')
  element?.dispatchEvent(event);
  expect(element).not.toBeNull();
  expect(element?.getAttribute('src')).toBe('https://basicinvite.com');
});