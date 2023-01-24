import { css, html, LitElement } from 'lit';
import { property } from 'lit/decorators.js';

import defaultCSS from '../../shared/default-css';

export class BadgeElement extends LitElement {
  static styles = [
    defaultCSS,
    css`
      :host {
        width: auto;
        height: 21px;
        font-size: 12px;
        font-weight: 600;
        display: flex;
        align-items: center;
        background-color: #f4f4f6;
        border-radius: 4px;
        padding: 0px 15px;
        margin-right: 10px;
      }
    `,
  ];

  @property()
  badgeText: string = '';

  render() {
    return html`${this.badgeText}`;
  }
}
