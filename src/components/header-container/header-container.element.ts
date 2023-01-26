import { css, html, LitElement } from 'lit';
import { property } from 'lit/decorators.js';
import defaultCSS from '../../shared/default-css';

export class HeaderContainer extends LitElement {
  static styles = [
    defaultCSS,
    css`
      :host {
        width: 100%;
        color: #1b264f;
        margin-bottom: 35px;
      }

      header {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
      }

      #info {
        display: flex;
        align-items: center;
      }

      #color-identity {
        width: 5px;
        height: 55px;
        background-color: #d0a5f3;
        border-radius: 4px;
        margin-right: 10px;
      }

      h1 {
        font-size: 24px;
        font-weight: 700;
        line-height: 19px;
        margin-bottom: 5px;
      }

      p {
        color: var(--ucp-unfocused-text-color);
        margin-top: 0px;
      }
    `,
  ];

  @property()
  colorIdentity: string = '';

  @property()
  projectName: string = '';

  @property()
  pageBreadcrumb: string = '';

  render() {
    return html`
      <header>
        <div id="info">
          <div
            id="color-identity"
            style="background-color: ${this.colorIdentity}"
          ></div>
          <div id="text">
            <h1>${this.projectName}</h1>
            <p>/ ${this.pageBreadcrumb}</p>
          </div>
        </div>
        <button-large-outline-icon></button-large-outline-icon>
      </header>
    `;
  }
}
