import { JSLoaderSettingsInterface } from '../Loader/Interfaces/Settings/settings.interface';
import DynamicScript from '../Loader/Objects/dynamicscript';
/**
 * @jest-environment jsdom
 */

test('When src is set, correct html is returned', () => {
  const settings: JSLoaderSettingsInterface = {
    src: 'https://www.google.com/recaptcha/api.js?render'
  }
  const script = new DynamicScript(settings);
  expect(script.html).toBe("<script src=\"https://www.google.com/recaptcha/api.js?render\" />");

});