import { css, html, LitElement } from 'lit';
import { property, state } from 'lit/decorators.js';
import { repeat } from 'lit/directives/repeat.js';
import { subpageFixture } from '../../api/api-subpages.fixture';
import { Category } from '../../api/api.resource';

import defaultCSS from '../default-css';

export class SideMenu extends LitElement {
  static styles = [
    defaultCSS,
    css`
      :host {
        width: 326px;
        height: calc(100vh - 90px);
      }

      aside {
        width: 100%;
        height: 100%;
        background-color: var(--uui-color-surface, #ffffff);
        padding: 30px;
        overflow: hidden;
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

  // private _setPage(subPage) {
  //   this.subPage = subPage;
  //   console.log(this.subPage);
  // }

  // private _closeAllOthers() {}

  render() {
    return html`
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
