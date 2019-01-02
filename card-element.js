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
    <div>
    <h3>[[heading]]</h3>
    <p>[[text]]</p>
    </div>
    `;
  }
  static get properties() {
    return {
      heading: {
        type: String,
        value: '',
      },
      text: {
        type: String,
        value: '',
      },
    };
  }
}

window.customElements.define('card-element', CardElement);
