import { css, html, LitElement } from 'lit';
import { property } from 'lit/decorators.js';

import defaultCSS from '../../shared/default-css';

export class ProgressCircle extends LitElement {
  static styles = [
    defaultCSS,
    css`
      #progress {
        width: 50px;
        height: 50px;
        background-color: #f4f4f6;
        border-radius: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
        position: Relative;
        overflow: hidden;
      }

      #text {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        z-index: 10;
      }

      #counter {
        font-size: 12px;
        font-weight: 600;
        color: #1b264f;
        z-index: 10;
        margin-top: 2px;
      }

      #small-text {
        font-size: 8px;
        color: #bebebe;
        z-index: 10;
        margin-top: -2px;
      }

      #progress .overlay {
        width: 50%;
        height: 100%;
        position: Absolute;
        top: 0;
        left: 0;
        z-index: 1;
        background-color: #f4f4f6;
      }

      #progress .left,
      #progress .right {
        width: 50%;
        height: 100%;
        position: Absolute;
        top: 0;
        left: 0;
        border: 5px Solid #e0e3f3;
        border-radius: 100px 0px 0px 100px;
        border-right: 0;
        transform-origin: Right;
      }

      #progress .left {
        animation: Load1 1s Linear Forwards;
      }

      #progress:nth-of-type(2) .right,
      #progress:nth-of-type(3) .right {
        animation: Load2 0.5s Linear Forwards 1s;
      }

      #progress:last-of-type .right,
      #progress:first-of-type .right {
        animation: Load3 0.8s Linear Forwards 1s;
      }

      @keyframes Load1 {
        0% {
          transform: Rotate(0deg);
        }

        100% {
          transform: Rotate(180deg);
        }
      }

      @keyframes Load2 {
        0% {
          z-index: 100;
          transform: Rotate(180deg);
        }

        100% {
          z-index: 100;
          transform: Rotate(270deg);
        }
      }

      @keyframes Load3 {
        0% {
          z-index: 100;
          transform: Rotate(180deg);
        }

        100% {
          z-index: 100;
          transform: Rotate(315deg);
        }
      }
    `,
  ];

  @property()
  standardText: string = 'used';

  @property()
  progress: number = 60;

  //TODO: Make functional, problems with changing bars

  render() {
    return html`
      <div id="progress">
        <!-- <div id="percentage"></div>
        <div id="text">${this.standardText}</div> -->
        <div id="text">
          <span
            id="counter"
            class="Title Timer"
            Data-From="0"
            Data-To="${this.progress}"
            Data-Speed="1800"
            >${this.progress}%</span
          >
          <div id="small-text">${this.standardText}</div>
        </div>
        <div class="overlay"></div>
        <div class="left"></div>
        <div class="right"></div>
      </div>
    `;
  }
}
