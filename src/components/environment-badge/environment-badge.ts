import { css, html, LitElement } from 'lit';
import { property } from 'lit/decorators.js';

import defaultCSS from '../../shared/default-css';

export class EnvironmentBadge extends LitElement {
  static styles = [
    defaultCSS,
    css`
      :host {
        width: 388px;
        height: 60px;
        display: flex;
        align-items: center;
        background-color: #f4f4f6;
        border-radius: 14px;
        padding: 0px 15px;
      }

      #status {
        width: 38px;
        height: 38px;
        border: 2px solid #e1e1f0;
        border-radius: 8px;
        margin-right: 12px;
      }

      #text {
        display: flex;
        flex-direction: column;
      }

      #title {
        color: #1b264f;
        margin-bottom: 2px;
      }

      #version {
        font-size: 12px;
        color: #b9b9d0;
        display: flex;
      }

      #version div {
        margin-right: 5px;
      }
    `,
  ];

  @property()
  environmentSetting: string = '';

  render() {
    return html`
      <div id="status"></div>
      <div id="text">
        <div id="title">Development</div>
        <div id="version">
          <div>CMS: 10.2.1</div>
          <div>Forms: 10.1.23</div>
          <div>Deploy: 10.0.3</div>
        </div>
      </div>
    `;
  }
}
