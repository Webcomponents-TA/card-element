import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

/**
 * `card-element`
 * Simple card element
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
class CardElement extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          display: block;
        }
      </style>
      <h2>Hello [[prop1]]!</h2>
    `;
  }
  static get properties() {
    return {
      prop1: {
        type: String,
        value: 'card-element',
      },
    };
  }
}

window.customElements.define('card-element', CardElement);
