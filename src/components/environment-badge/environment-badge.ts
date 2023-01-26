import { css, html, LitElement } from 'lit';
import { property } from 'lit/decorators.js';
import { Environment } from '../../api/api.resource';

import defaultCSS from '../../shared/default-css';
import { nanoIcons } from '../../shared/svg/icons';

export class EnvironmentBadge extends LitElement {
  static styles = [
    defaultCSS,
    css`
      #environment {
        width: 388px;
        height: 60px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: #f4f4f6;
        border-radius: 14px;
        padding: 0px 15px;
      }

      #main {
        display: flex;
        align-items: center;
      }

      #status {
        width: 38px;
        height: 38px;
        border: 2px solid #e1e1f0;
        border-radius: 8px;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-right: 12px;
      }

      #status-symbol {
        width: 15px;
        height: 15px;
        background-color: #25aa60;
        border-radius: 50%;
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

      #buttons {
        display: flex;
      }

      #buttons > * {
        margin-left: 10px;
      }

      #environment.disabled {
        background-color: #ffffff;
        border: 2px solid #ebedf8;
      }
      #environment.disabled #status {
        border: 2px solid #ebedf8;
      }

      #environment.disabled #status-symbol {
        background-color: #ebedf8;
      }

      #environment.disabled #text #title {
        color: #ebedf8;
      }

      .fake-btn {
        width: 24px;
        height: 24px;
        color: #ebedf8;
        border: 2px solid #ebedf8;
        border-radius: 8px;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    `,
  ];

  @property()
  environmentSetting: Environment = {} as Environment;

  @property()
  statusColor: 'positive' | 'warning' | 'danger' = 'positive';

  render() {
    return html`
      ${this.environmentSetting.created == true
        ? html`
            <div id="environment">
              <div id="main">
                <div id="status">
                  <div id="status-symbol"></div>
                </div>
                <div id="text">
                  <div id="title">${this.environmentSetting.type}</div>
                  <div id="version">
                    <div>CMS: ${this.environmentSetting.versionCMS}</div>
                    <div>Forms: ${this.environmentSetting.versionForms}</div>
                    <div>Deploy: ${this.environmentSetting.versionDeploy}</div>
                  </div>
                </div>
              </div>
              <div id="buttons">
                <button-small .icon=${'web'}></button-small>
                <button-small .icon=${'backOffice'}></button-small>
              </div>
            </div>
          `
        : html` <div id="environment" class="disabled">
            <div id="main">
              <div id="status">
                <div id="status-symbol"></div>
              </div>
              <div id="text">
                <div id="title">${this.environmentSetting.type}</div>
              </div>
            </div>
            <div id="buttons">
              <div class="fake-btn">${nanoIcons['web']}</div>
              <div class="fake-btn">${nanoIcons['backOffice']}</div>
            </div>
          </div>`}
    `;
  }
}
