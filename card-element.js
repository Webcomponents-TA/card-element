import { html, PolymerElement } from '@polymer/polymer/polymer-element.js';

/**
 * `card-element`
 * Simple card element
 *
 *  * for styling:
 *
 * Custom property | Description | Default
 * ----------------|-------------|----------
 * `--header-banner` | Background image for the card | `url(../download.jpg)`
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
    .card {
      border: 1px solid red;
      
    }
    .button::slotted(*){ 
      text-align:center;
      padding: 20px;       
    }
   
    .para::slotted(:first-child){ 
    
      padding: 20px;  
    }
    p{
      color:white;
    }
    h3{
      margin:0;
      color:white;
    }
    .top-section{
      background-image: var(--header-banner, url(../download.jpg));
      min-height:200px;
      background-repeat: no-repeat;
      background-size:cover;
      text-align:center;
    }
    </style>
    <div class="card">
    <div class="top-section">
      <h3>[[heading]]</h3>
      <p>[[text]]</p>
    </div>
    <div class="content">
      <slot name="para" class="para"></slot>
      <slot name="button" class="button"></slot>
    </div>
    </div>
    `;
  }
  static get properties() {
    return {
      /** Heading of the card*/
      heading: {
        type: String,
        value: '',
      },
      /** Subtitle of the card*/
      text: {
        type: String,
        value: '',
      }
    };
  }
}

window.customElements.define('card-element', CardElement);
