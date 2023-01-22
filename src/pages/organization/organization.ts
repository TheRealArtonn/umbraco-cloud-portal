import { LitElement, html, css } from 'lit';
import { property } from 'lit/decorators.js';

export class OrganizationElement extends LitElement {
  static styles = css`
    :host {
      width: 100%;
      display: flex;
    }

    main {
      width: calc(100% - 326px);
      padding: 40px 0px;
      display: flex;
      justify-content: center;
    }

    #page {
      width: 1160px;
    }
  `;

  @property({ type: String, attribute: 'page' })
  page: string = 'organization';

  render() {
    return html`
      <side-menu page=${this.page}></side-menu>
      <main>
        <header></header>
        <page-container></page-container>
      </main>
    `;
  }
}
