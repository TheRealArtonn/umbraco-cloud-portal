import { css, html, LitElement } from 'lit';
import { property } from 'lit/decorators.js';
import { repeat } from 'lit/directives/repeat.js';
import { Project } from '../../api/api.resource';

import defaultCSS from '../../shared/default-css';

export class ProjectCard extends LitElement {
  static styles = [
    defaultCSS,
    css`
      :host {
        width: 667px;
        height: 200px;
        color: #1b264f;
        background-color: var(--uui-color-surface, #ffffff);
        border-radius: 18px;
        display: flex;
        position: relative;
        padding: 15px;
      }

      #color-identity {
        width: 5px;
        height: 100%;
        background-color: #d0a5f3;
        border-radius: 4px;
        margin-right: 15px;
      }

      #header {
        margin-right: 40px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
      }

      #project-name {
        font-size: 24px;
        font-weight: 600;
        color: #1b264f;
        text-decoration: none;
      }

      #project-name:hover {
        color: #000000;
      }

      #badges {
        display: flex;
        margin-top: 10px;
      }

      #stats {
        display: flex;
      }

      .stat {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-right: 20px;
      }

      .stat:last-child {
        margin-right: 0px;
      }

      .progress-circle {
        width: 50px;
        height: 50px;
        background-color: #f4f4f6;
        border-radius: 50px;
        position: Relative;
      }

      .stat-title {
        font-size: 12px;
        font-weight: 600;
        margin-top: 5px;
      }

      #environments {
        display: flex;
        flex-direction: column;
      }

      .env {
        margin-bottom: 10px;
      }

      .env:last-child {
        margin-bottom: 0px;
      }

      #drag {
        width: 16.75px;
        height: 28px;
        color: #e0e3f3;
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        right: 10px;
        top: 44%;
      }
    `,
  ];

  @property()
  projectSetting: Project = {} as Project;

  render() {
    return html`
      <div
        id="color-identity"
        style="background-color: ${this.projectSetting.colorId}"
      ></div>
      <div id="header">
        <div id="header-content">
          <a id="project-name" href="/project/${this.projectSetting.id}"
            >${this.projectSetting.name}</a
          >
          <div id="badges">
            ${repeat(
              this.projectSetting.badges,
              badge => badge.type,
              badge =>
                html`<badge-element .badgeText=${badge.type}></badge-element>`
            )}
          </div>
        </div>
        <div id="stats">
          <div class="stat">
            <progress-circle
              .value=${this.projectSetting.bandwidthUsed}
            ></progress-circle>
            <div class="stat-title">Bandwidth</div>
          </div>
          <div class="stat">
            <progress-circle
              .value=${this.projectSetting.storageUsed}
            ></progress-circle>
            <div class="stat-title">Storage</div>
          </div>
          <div class="stat">
            <progress-circle
              .value=${this.projectSetting.domainsUsed}
              .domain=${true}
            ></progress-circle>
            <div class="stat-title">Domains</div>
          </div>
        </div>
      </div>
      <div id="environments">
        ${repeat(
          this.projectSetting.environments,
          env => env.type,
          env =>
            html`<environment-badge
              class="env"
              .environmentSetting=${env}
            ></environment-badge>`
        )}
      </div>
      <div id="drag">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16.746"
          height="28"
          viewBox="0 0 16.746 28"
        >
          <g id="drag" transform="translate(-0.254)">
            <circle
              id="Ellipse_32"
              data-name="Ellipse 32"
              cx="3"
              cy="3"
              r="3"
              transform="translate(0.254 11)"
            />
            <circle
              id="Ellipse_33"
              data-name="Ellipse 33"
              cx="3"
              cy="3"
              r="3"
              transform="translate(0.254)"
            />
            <circle
              id="Ellipse_34"
              data-name="Ellipse 34"
              cx="3"
              cy="3"
              r="3"
              transform="translate(0.254 22)"
            />
            <circle
              id="Ellipse_42"
              data-name="Ellipse 42"
              cx="3"
              cy="3"
              r="3"
              transform="translate(11 11)"
            />
            <circle
              id="Ellipse_43"
              data-name="Ellipse 43"
              cx="3"
              cy="3"
              r="3"
              transform="translate(11)"
            />
            <circle
              id="Ellipse_44"
              data-name="Ellipse 44"
              cx="3"
              cy="3"
              r="3"
              transform="translate(11 22)"
            />
          </g>
        </svg>
      </div>
    `;
  }
}
