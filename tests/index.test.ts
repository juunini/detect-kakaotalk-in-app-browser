import { clear, mockUserAgent } from 'jest-useragent-mock'

import isKakaotalkInAppBrowser from '../src';

afterEach(clear);

describe('isKakaotalkInAppBrowser', () => {
  context('When user agent is kakaotalk in-app browser', () => {
    it('Should returns true', () => {
      mockUserAgent('Mozilla/5.0 (Linux; Android 12; SM-F926N Build/SP1A.210812.016; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/97.0.4692.87 Mobile Safari/537.36;KAKAOTALK 2309660');

      expect(isKakaotalkInAppBrowser()).toBe(true);
    });
  });

  context('When user agent is not kakaotalk in-app browser', () => {
    it('Should returns false', () => {
      mockUserAgent('Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/97.0.4692.99 Safari/537.36');
      
      expect(isKakaotalkInAppBrowser()).toBe(false);
    });
  });
});
