import { css, html, LitElement } from 'lit';

import defaultCSS from '../../shared/default-css';

export class PageContainer extends LitElement {
  static styles = [
    defaultCSS,
    css`
      :host {
        width: 1024px;
        height: 100%;
        color: #1b264f;
        background-color: var(--uui-color-surface, #ffffff);
        border-radius: 18px;
        padding: 50px;
      }

      #title {
        font-size: 24px;
        /* font-weight: 600; */
        margin-bottom: 50px;
        display: block;
      }

      #content {
        color: #a5acc9;
      }
    `,
  ];

  render() {
    return html`
      <slot id="title" name="title"></slot>
      <slot id="content" name="content"></slot>
    `;
  }
}
