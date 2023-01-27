import { css, html, LitElement } from 'lit';
import { property, state } from 'lit/decorators.js';
import { repeat } from 'lit/directives/repeat.js';
import { projectsFixture } from '../../api/api-projects.fixture';
import { Project, ProjectGroup } from '../../api/api.resource';

import defaultCSS from '../../shared/default-css';
import { medium } from '../../shared/svg/icons';

export class AccordionProjectElement extends LitElement {
  static styles = [
    defaultCSS,
    css`
      #accordion {
        margin-bottom: 40px;
      }

      #accordion-header {
        font-size: 16px;
        color: #a5acc9;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 20px;
        cursor: pointer;
        transition: all 0.4s ease;
      }

      #accordion-header:hover,
      #accordion-header.active {
        color: #1b264f;
      }

      #accordion-header-text {
        font-weight: 700;
        display: flex;
        align-items: center;
      }

      #cat-icon {
        width: 24px;
        margin-right: 15px;
      }

      #acc-icon {
        width: 18px;
        height: 18px;
        transition: all 0.4s ease;
      }

      #accordion-header.active #acc-icon {
        transform: rotate(180deg);
        margin-bottom: -10px;
      }

      #subpage-container {
        display: flex;
      }

      #subpage-line {
        width: 2px;
        background-color: #ebebeb;
        margin-right: 25px;
        margin-left: 11px;
        margin-bottom: 22px;
      }

      #subpages {
        display: flex;
        flex-direction: column;
        flex: 1 1 0%;
      }

      #subpages a {
        text-decoration: none;
      }

      #subpage-item {
        font-size: 16px;
        height: 45px;
        color: #a5acc9;
        border-radius: 14px;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        padding-top: 1px;
        padding-left: 20px;
        cursor: pointer;
        position: relative;
      }

      #subpage-item-line {
        width: 20px;
        height: 2px;
        background-color: #ebebeb;
        position: absolute;
        left: -25px;
      }

      #subpage-item:hover {
        font-weight: 700;
        color: #1b264f;
        background-color: #f3f4f6;
      }
    `,
  ];

  @property({ type: String, attribute: 'project-id' })
  projectId: string = '';

  @property()
  categorySetting: ProjectGroup = {} as ProjectGroup;

  @property()
  categoryActive: boolean = false;

  @state()
  _projectsSettings: Array<Project> = [];

  firstUpdated() {
    this.getData();
  }

  private _changeCategoryActive() {
    this.categoryActive = !this.categoryActive;
  }

  private async getData() {
    try {
      const [projectsSettings] = await Promise.all([projectsFixture]);

      if (projectsSettings) {
        this._projectsSettings = projectsSettings;
      }
    } catch (error) {
      console.log('Projects could not be fetched');
    }
  }

  get currentProject() {
    return this._projectsSettings.find(
      project => project.id === this.projectId
    );
  }

  render() {
    return html`
      <div id="accordion">
        <div
          id="accordion-header"
          class=${this.categoryActive ? 'active' : ''}
          @click=${this._changeCategoryActive}
        >
          <div id="accordion-header-text">
            <div id="cat-icon">${medium['group']}</div>
            <div>${this.categorySetting?.name}</div>
          </div>
          <div id="acc-icon">${medium['arrow']}</div>
        </div>
        ${this.categoryActive
          ? html`
              <div id="subpage-container">
                <div id="subpage-line"></div>
                <div id="subpages">
                  ${this.categorySetting
                    ? repeat(
                        this.categorySetting.projects,
                        subpage => subpage.id,
                        subpage =>
                          html`
                            <a href="project/${subpage.id}/">
                              <div id="subpage-item">
                                <div id="subpage-item-line"></div>
                                ${this._projectsSettings.find(
                                  project => project.id === subpage.id
                                )?.name}
                              </div>
                            </a>
                          `
                      )
                    : ''}
                </div>
              </div>
            `
          : ''}
      </div>
    `;
  }
}
