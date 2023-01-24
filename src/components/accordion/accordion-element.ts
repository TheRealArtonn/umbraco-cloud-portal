import { css, html, LitElement } from 'lit';

import defaultCSS from '../../shared/default-css';

export class AccordionElement extends LitElement {
  static styles = [
    defaultCSS,
    css`
      :host {
        width: 50px;
        height: 50px;
        border: 2px solid #1b264f;
        border-radius: 18px;
      }
    `,
  ];

  render() {
    return html``;
  }
}
