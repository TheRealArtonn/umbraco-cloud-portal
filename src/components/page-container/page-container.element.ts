import { css, html, LitElement } from 'lit';

import defaultCSS from '../../shared/default-css';

export class PageContainer extends LitElement {
  static styles = [
    defaultCSS,
    css`
      :host {
        width: 1024px;
        height: 100%;
        background-color: var(--uui-color-surface, #ffffff);
        border-radius: 18px;
        padding: 50px;
      }
    `,
  ];

  render() {
    return html`
      <slot name="title"></slot>
      <slot name="content"></slot>
    `;
  }
}
