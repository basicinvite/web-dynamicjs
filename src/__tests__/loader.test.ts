/**
 * @jest-environment jsdom
 */

import { visitFunctionBody } from 'typescript';
import { JSLoaderSettingsInterface } from '../Loader/Interfaces/Settings/settings.interface';
import { JSLoader } from '../Loader/jsloader';
test('Dynamic Script returns correct values.', () => {
  const Loader = new JSLoader();
  const settings: JSLoaderSettingsInterface = {
    src: 'https://basicinvite.com'
  }
  Loader.loadNewDynamicScript('body', settings);
  const element = document.querySelector('body script');

  expect(element).toBeDefined();
  expect(element?.getAttribute('src')).toBe('https://basicinvite.com');
});

test('Dynamic Script returns correct values if parent selector not found.', () => {
  const Loader = new JSLoader();
  const settings: JSLoaderSettingsInterface = {
    src: 'https://basicinvite.com'
  }
  Loader.loadNewDynamicScript('bobby', settings);
  const element = document.querySelector('bobby script');

  expect(element).toBeNull();
});