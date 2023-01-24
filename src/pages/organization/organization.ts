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
      overflow: hidden;
    }

    div {
      display: flex;
      flex-direction: column;
    }
  `;

  @property({ type: String, attribute: 'page' })
  page: string = 'organization';

  render() {
    return html`
      <side-menu page=${this.page}></side-menu>
      <main>
        <div>
          <header-container></header-container>
          <page-container></page-container>
        </div>
      </main>
    `;
  }
}
