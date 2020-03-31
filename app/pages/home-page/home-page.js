import { LitElement, html, css } from 'lit-element';

class HomePage extends LitElement {
  static get styles() {
    return [
      css`
        
      `
    ];
  }

  static get properties() {
    return {
      
    };
  }

  render() {
    return html`
      Ola2
    `;
  }
}

customElements.define('home-page', HomePage);
