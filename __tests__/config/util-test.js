const {
  stringToColour,
  timeSince,
  getDateObject,
} = require('../../src/config/util');

describe('Util', () => {
  describe('stringToColour', () => {
    it('Should return a hex color', () => {
      const hexRegex = /^#[0-9A-F]{6}$/i;
      expect(hexRegex.test(stringToColour('Arjun'))).toBe(true);
    });

    it('Should return the same hex color for a given string', () => {
      const colorCode = '#9266c9';
      expect(stringToColour('Arjun')).toBe(colorCode);
    });

    it('Should return different value for different string', () => {
      const colorCode = '#9266c9';
      expect(stringToColour('This is different string')).not.toBe(colorCode);
    });
  });

  describe('timeSince', () => {
    let now;
    beforeEach(() => {
      now = new Date();
    });
    it('Should return string', () => {
      expect(typeof timeSince(new Date())).toBe('string');
    });

    it('Should return 2 seconds for a date object which is 2 seconds less than current', () => {
      now.setSeconds(now.getSeconds() - 2);
      expect(timeSince(now)).toEqual('2 seconds');
    });

    it('Should return 5 minutes for a date object which is 5 minutes less than current', () => {
      now.setMinutes(now.getMinutes() - 5);
      expect(timeSince(now)).toEqual('5 minutes');
    });

    it('Should return 10 hours for a date object which is 10 hours less than current', () => {
      now.setHours(now.getHours() - 10);
      expect(timeSince(now)).toEqual('10 hours');
    });

    it('Should return 3 days for a date object which is 3 days less than current', () => {
      now.setDate(now.getDate() - 3);
      expect(timeSince(now)).toEqual('3 days');
    });

    it('Should return 8 months for a date object which is 8 months less than current', () => {
      now.setMonth(now.getMonth() - 8);
      expect(timeSince(now)).toEqual('8 months');
    });

    it('Should return 9 year for a date object which is 9 year less than current', () => {
      now.setFullYear(now.getFullYear() - 9);
      expect(timeSince(now)).toEqual('9 years');
    });
  });

  describe('getDateObject', () => {
    it('Should getDateObject from String', () => {
      const date = '1992-01-01';
      expect(getDateObject('01/01/1992')).toStrictEqual(new Date(date));
    });
  });
});
