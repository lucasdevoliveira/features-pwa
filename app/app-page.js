import { LitElement, html, css } from 'lit-element'
import '../app/pages/home-page/home-page'

class AppPage extends LitElement {
  static get styles() {
    return [
      css`
        * {
          margin: 0px;
          padding: 0px;
        }
        :host {
          display: block;
        }
      `
    ]
  }

  static get properties() {
    return {
      active: {
        type: Boolean
      }
    }
  }

  render() {
    return html`
      <home-page></home-page>
    `
  }
}

customElements.define('app-page', AppPage)
