import { css, html, LitElement } from 'lit';
import { property } from 'lit/decorators.js';
import { smallIcons } from '../../shared/svg/icons';

import { ifDefined } from 'lit/directives/if-defined.js';

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
  active: string | undefined = undefined;

  @property()
  link: string | undefined = undefined;

  @property()
  icon: string = '';

  render() {
    return html` <a
      id="button"
      class=${ifDefined(this.active)}
      href=${ifDefined(this.link)}
    >
      ${smallIcons[this.icon]}
    </a>`;
  }
}
