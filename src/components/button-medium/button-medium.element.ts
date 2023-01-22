import { css, html, LitElement } from 'lit';
import { property } from 'lit/decorators.js';
import { icons } from './svg/icons';

import defaultCSS from '../../shared/default-css';

export class ButtonMedium extends LitElement {
  static styles = [
    defaultCSS,
    css`
      svg {
        fill: currentColor;
      }

      #button {
        width: 40px;
        height: 40px;
        color: white;
        border: 2px solid #39477c;
        border-radius: 14px;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      #button:hover,
      #button.active {
        color: #39477c;
        background-color: #ffffff;
        border: 0px;
      }

      img {
        color: #39477c;
      }

      #icon,
      a {
        width: 18px;
        height: 18px;
      }
    `,
  ];

  @property()
  active: boolean = false;

  @property()
  link: string = '';

  @property()
  icon: string = '';

  render() {
    return html` <a
      id="button"
      class=${this.active === true ? 'active' : ''}
      href=${this.link}
    >
      ${icons[this.icon]}
    </a>`;
  }
}
