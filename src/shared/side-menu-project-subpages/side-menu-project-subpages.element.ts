import { css, html, LitElement } from 'lit';
import { Router } from '@vaadin/router';
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

      #collapse-button {
        margin-bottom: 30px;
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

  @state()
  _projectMenuState: boolean = false;

  @property()
  activeAccordion: string = 'General';

  @property()
  activeSubpage: string = 'Overview';

  @property()
  activeAccordionProject: string = 'East clients';

  firstUpdated() {
    this.getData();
  }

  router?: Router;
  popstateHandler = () => {
    this.activeSubpage =
      window.umbracoCloudPortal.router?.location.route?.name ?? '';
  };
  connectedCallback(): void {
    super.connectedCallback();
    // @ts-ignore
    this.router = window.umbracoCloudPortal.router;
    window.addEventListener('popstate', this.popstateHandler);
  }

  disconnectedCallback(): void {
    super.disconnectedCallback();
    window.removeEventListener('popstate', this.popstateHandler);
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

  private _changeProjectMenuState() {
    this._projectMenuState = !this._projectMenuState;
  }

  private _handleSelectAccordion(e) {
    this.activeAccordion = e.detail;
  }

  private _handleSelectAccordionProject(e) {
    this.activeAccordionProject = e.detail;
  }

  render() {
    return html`
      ${this._projectMenuState
        ? html` <aside>
              ${repeat(
                this._projectGroupSettings,
                category => category.name,
                category =>
                  html`<accordion-project-element
                    .projectId=${this.projectId}
                    .categorySetting=${category}
                    @accordion-project:selected=${this
                      ._handleSelectAccordionProject}
                    .categoryActive=${this.activeAccordionProject ===
                    category.name}
                  ></accordion-project-element>`
              )}
            </aside>
            <div id="divider"></div>`
        : ''}
      <aside>
        <collapse-button
          id="collapse-button"
          @click=${this._changeProjectMenuState}
          .active=${this._projectMenuState}
        ></collapse-button>
        ${repeat(
          this._subpageSettings,
          category => category.name,
          category =>
            html`<accordion-element
              .projectId=${this.projectId}
              .categorySetting=${category}
              @accordion:selected=${this._handleSelectAccordion}
              .categoryActive=${this.activeAccordion === category.name}
              .activeSubpage=${this.activeSubpage}
            ></accordion-element>`
        )}
      </aside>
    `;
  }
}
