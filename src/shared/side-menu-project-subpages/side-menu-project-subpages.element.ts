import { css, html, LitElement } from 'lit';
import { property, state } from 'lit/decorators.js';
import { repeat } from 'lit/directives/repeat.js';
import { projectGroupFixture } from '../../api/api-projectGroup.fixture';
import { subpageFixture } from '../../api/api-subpages.fixture';
import { Category, ProjectGroup } from '../../api/api.resource';

import defaultCSS from '../default-css';

export class SideMenu extends LitElement {
  static styles = [
    defaultCSS,
    css`
      :host {
        height: calc(100vh - 90px);
        display: flex;
      }

      aside {
        width: 326px;
        height: 100%;
        background-color: var(--uui-color-surface, #ffffff);
        padding: 30px;
        overflow: hidden;
      }
      #divider {
        width: 1px;
        height: 100%;
        background-color: #ececec;
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

  @state()
  _projectGroupSettings: Array<ProjectGroup> = [];

  firstUpdated() {
    this.getData();
  }

  private async getData() {
    try {
      const [subpageSettings, projectGroupSettings] = await Promise.all([
        subpageFixture,
        projectGroupFixture,
      ]);

      if (subpageSettings) {
        this._subpageSettings = subpageSettings;
      }

      if (projectGroupSettings) {
        this._projectGroupSettings = projectGroupSettings;
      }
    } catch (error) {
      console.log('Projects could not be fetched');
    }
  }

  // private _setPage(subPage) {
  //   this.subPage = subPage;
  //   console.log(this.subPage);
  // }

  // private _closeAllOthers() {}

  render() {
    return html`
      <aside>
        ${repeat(
          this._projectGroupSettings,
          category => category.name,
          category =>
            html`<accordion-project-element
              .projectId=${this.projectId}
              .categorySetting=${category}
            ></accordion-project-element>`
        )}
      </aside>
      <div id="divider"></div>
      <aside>
        ${repeat(
          this._subpageSettings,
          category => category.name,
          category =>
            html`<accordion-element
              .projectId=${this.projectId}
              .categorySetting=${category}
            ></accordion-element>`
        )}
      </aside>
    `;
  }
}
