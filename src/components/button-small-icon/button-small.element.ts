import { html, css } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import { nanoIcons } from '../../shared/svg/icons';

import { ButtonMedium } from '../button-medium-icon/button-medium.element';
import defaultCSS from '../../shared/default-css';

export class ButtonSmall extends ButtonMedium {
  static styles = [
    defaultCSS,
    css`
      svg {
        fill: currentColor;
      }
      #button {
        width: 24px;
        height: 24px;
        color: #39477c;
        border: 2px solid #39477c;
        border-radius: 8px;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      #button:hover,
      #button.active {
        color: #ffffff;
        background-color: #1b264f;
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

  render() {
    return html` <a
      id="button"
      class=${ifDefined(this.active)}
      href=${ifDefined(this.link)}
    >
      ${nanoIcons[this.icon]}
    </a>`;
  }
}
