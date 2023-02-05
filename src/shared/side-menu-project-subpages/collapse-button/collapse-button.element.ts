import { css, html, LitElement } from 'lit';
import { property } from 'lit/decorators.js';
import { medium } from '../../../shared/svg/icons';

import defaultCSS from '../../../shared/default-css';

export class CollapseButton extends LitElement {
  static styles = [
    defaultCSS,
    css`
      #collapse {
        width: 100%;
        height: 18px;
        font-weight: 600;
        color: #a5acc9;
        display: flex;
        align-items: center;
        margin-bottom: 30px;
        transition: all 0.4s ease;
        cursor: pointer;
      }

      #collapse:hover {
        color: #1b264f;
      }

      #collapse #arrow {
        height: 18px;
        transform: rotate(90deg);
      }

      #collapse #project {
        height: 18px;
        margin-top: 1px;
        margin-right: 10px;
        margin-left: 5px;
      }

      #collapse #text {
        line-height: 16px;
        margin-top: -2px;
      }

      :host([active]) #collapse #arrow {
        transform: rotate(270deg);
      }
    `,
  ];

  @property({ type: Boolean, reflect: true })
  active: boolean = false;

  first;

  render() {
    return html`<div id="collapse">
      <div id="arrow">${medium['arrow']}</div>
      <div id="project">${medium['project']}</div>
      <div id="text">
        ${this.active ? 'Close quick menu' : 'Quick project menu'}
      </div>
    </div>`;
  }
}
