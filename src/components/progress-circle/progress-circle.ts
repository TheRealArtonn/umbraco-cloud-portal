import { css, LitElement, svg } from 'lit';
import { property } from 'lit/decorators.js';

import defaultCSS from '../../shared/default-css';

export class ProgressCircle extends LitElement {
  static styles = [
    defaultCSS,
    css`
      :host {
        display: block;
      }
      .background {
        fill: none;
        stroke: black;
        stroke-opacity: 0.05;
      }
      .indicator {
        fill: none;
      }

      text {
        font-size: 2em;
        font-family: 'Lato', sans-serif;
        text-anchor: middle;
      }

      #counter {
        font-size: 12px;
        font-weight: 600;
        color: #1b264f;
      }

      #small-text {
        font-size: 8px;
        color: #bebebe;
        z-index: 10;
        margin-top: -2px;
        position: absolute;
      }
    `,
  ];

  @property({ type: Number })
  value: number = 20;

  @property({ type: String })
  color: string = '#E0E3F3';

  @property()
  standardText: string = 'used';

  @property()
  bandwidthMaxValue: number = 100;

  @property()
  storageMaxValue: number = 100;

  @property()
  domainMaxValue: number = 10;

  @property()
  domain: boolean = false;

  render() {
    const value = Math.min(100, Math.max(0, this.value));

    const dx = Math.sin((value / 100.0) * 2 * 3.14) * 50;
    const dy = -Math.cos((value / 100.0) * 2 * 3.14) * 50 + 50;
    const sweep = value > 50 ? 1 : 0;
    const stroke = 13;

    return svg`
      <svg style="height: 51px" viewbox="0 0 120 120">
        <path
          class="background"
          stroke-width="${stroke}"
          d="M60 10 a 50 50 0 1 0 1 0 Z"
        />
        <path
          class="indicator"
          stroke="${this.color}"
          stroke-width="${stroke}"
          d="M60 10 a 50 50 0 ${sweep} 1 ${dx} ${dy}"
        />
        <text x="60" y="70">
          ${
            this.domain == false
              ? svg`<tspan x="64" y="62" color="#1b264f" font-weight="600" font-size="0.750em">${value}%</tspan>`
              : svg`<tspan x="64" y="62" color="#1b264f" font-weight="600" font-size="0.750em">${value}/${this.domainMaxValue}</tspan>`
          }

          <tspan x="60" y="80" color="#bebebe" font-size="0.500em">${
            this.standardText
          }</tspan>
        </text>
      </svg>
    `;
  }
}
