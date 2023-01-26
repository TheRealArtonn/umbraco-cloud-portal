import { css, html, LitElement } from 'lit';
import { property, state } from 'lit/decorators.js';
import { subpageFixture } from '../../api/api-subpages.fixture';
import { Category } from '../../api/api.resource';

import defaultCSS from '../default-css';

export class SideMenu extends LitElement {
  static styles = [
    defaultCSS,
    css`
      :host {
        width: 326px;
        height: 100%;
      }

      aside {
        width: 100%;
        height: 100%;
        background-color: var(--uui-color-surface, #ffffff);
        padding: 30px;
      }
    `,
  ];

  @property({ type: String, attribute: 'page' })
  page: string = '';

  @property({ type: String, attribute: 'subPage' })
  subPage: string = '';

  @property({ type: String, attribute: 'project-id' })
  projectId: string = '';

  @state()
  _subpageSettings: Array<Category> = [];

  firstUpdated() {
    this.getData();
  }

  private async getData() {
    try {
      const [subpageSettings] = await Promise.all([subpageFixture]);

      if (subpageSettings) {
        this._subpageSettings = subpageSettings;
      }
    } catch (error) {
      console.log('Projects could not be fetched');
    }
  }

  private _setPage(subPage) {
    this.subPage = subPage;
    console.log(this.subPage);
  }

  render() {
    return html`
      <aside>
        <nav>
          <a
            href="project/${this.projectId}/"
            @click=${() => this._setPage('overview')}
            >Overview</a
          >
          <a href="project/${this.projectId}/environments">Environments</a>
          <a href="project/${this.projectId}/edit-teams">Edit teams</a>
          <a href="project/${this.projectId}/usage">Usage</a>
        </nav>
      </aside>
    `;
  }
}
