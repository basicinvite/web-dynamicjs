/**
 * @jest-environment jsdom
 */

import { ScriptSettingsInterface } from '../Loader/Interfaces/Settings/settings.interface';
import DynamicJSLoader from '../Loader/jsloader';
test('Dynamic Script returns correct values.', () => {
  const Loader = new DynamicJSLoader();
  const settings: ScriptSettingsInterface = {
    src: 'https://basicinvite.com'
  }
  Loader.loadNewDynamicScript('body', settings);
  const element = document.querySelector('body script');

  expect(element).toBeDefined();
  expect(element?.getAttribute('src')).toBe('https://basicinvite.com');
});

test('Dynamic Script returns correct values if parent selector not found.', () => {
  const Loader = new DynamicJSLoader();
  const settings: ScriptSettingsInterface = {
    src: 'https://basicinvite.com'
  }
  Loader.loadNewDynamicScript('bobby', settings);
  const element = document.querySelector('bobby script');

  expect(element).toBeNull();
});