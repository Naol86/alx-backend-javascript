import Currency from './3-currency.js';

export default class Pricing {
  constructor(price, currency) {
    this._price = price;
    this._currency = currency;
  }

  get price() {
    return this._price;
  }

  set price(value) {
    if (typeof value !== 'number') {
      throw new TypeError('Price must be a number');
    }
    this._price = value;
  }

  get currency() {
    return this._currency;
  }

  set currency(value) {
    if (!(value instanceof Currency)) {
      throw new TypeError('Currency must be a Currency');
    }
    this._currency = value;
  }

  displayFullPrice() {
    return `${this._price} ${this._currency.name} (${this._currency.code})`;
  }

  static convertPrice(amount, conversionRate) {
    if (typeof amount !== 'number' || typeof conversionRate !== 'number') {
      throw new TypeError('Amount and conversion rate must be numbers');
    }
    return amount * conversionRate;
  }
}
