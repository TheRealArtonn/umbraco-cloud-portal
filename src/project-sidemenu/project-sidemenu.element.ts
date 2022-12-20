import { css, html, LitElement } from 'lit';
import { property, state } from 'lit/decorators.js';
import { repeat } from 'lit/directives/repeat.js';
import {
  fakeMenuFixture,
  fakeProjectsFixture,
} from './project-sidemenu.fixture';
import { MenuItem, ProjectItem } from './project-sidemenu.resource';
import { icons } from './svg/icons.js';

// DO NOT USE WITHOUT REFACTORING
// THIS COMPONENT WAS QUICKLY MADE, AND THE CODE REFLECTS THAT

export class UCPProjectSideMenuElement extends LitElement {
  static styles = css`
    :host {
      display: block;
      margin: 0 auto;
      max-width: 1024px;
      box-sizing: border-box;
    }

    svg {
      fill: currentColor;
    }

    #side-menu-container {
      /* width: 326px; */
      height: 1000px;
      /* display: flex;
      flex-direction: row;
      overflow: hidden; */
      position: relative;
    }

    #menu-container {
      width: 326px;
      min-width: 326px;
      max-width: 326px;
      height: 800px;
      padding: 30px;
      background-color: var(--uui-color-surface);
    }

    #menu-container.project-container {
      position: absolute;
      z-index: 2;
      /* left: -386px; */
    }

    #menu-container.subpage-container {
      border-left: 1px solid #ebebeb;
      position: absolute;
      z-index: 1;
      left: 386px;
    }

    #menu-header,
    #menu-header-secondary {
      margin-bottom: 30px;
    }

    #menu-header-secondary {
      font-size: 16px;
      font-weight: 700;
      color: #a5acc9;
      display: flex;
      align-items: center;
      margin-bottom: 50px;
      cursor: pointer;
      transition: all 0.4s ease;
    }

    #menu-header-secondary:hover {
      color: #1b264f;
    }

    #menu-header-secondary #arrow {
      transform: rotate(90deg);
      margin-right: 10px;
      transition: all 0.4s ease;
    }

    #menu-header-secondary.active #arrow {
      transform: rotate(270deg);
      margin-right: 10px;
    }

    #menu-header-secondary #project {
      margin-top: 7px;
      margin-right: 10px;
    }

    #menu-header h3 {
      font-size: 16px;
      margin-top: 0px;
      margin-bottom: 15px;
    }

    #input-field {
      position: relative;
    }

    #input-field input {
      width: calc(100% - 45px);
      height: 45px;
      font-size: 16px;
      background-color: #f3f4f6;
      border-radius: 14px;
      outline: 0px;
      border: 0px;
      padding-left: 55px;
    }

    #input-field input::placeholder {
      color: #a5acc9;
    }

    #search {
      position: absolute;
      top: 14px;
      left: 20px;
    }
  `;

  @property({ type: String, attribute: 'project-id' })
  projectId: string = '';

  @state()
  private _menuItems: Array<MenuItem> = [];

  @state()
  private _projectItem: Array<ProjectItem> = [];

  connectedCallback(): void {
    super.connectedCallback();
    this.getData();
  }

  private async getData() {
    try {
      const [menuItems, projectItems] = await Promise.all([
        fakeMenuFixture,
        fakeProjectsFixture,
      ]);

      this._menuItems = menuItems;
      this._projectItem = projectItems;
    } catch (error) {}
  }

  render() {
    return html`
      <div id="side-menu-container">
        <div id="menu-container" class="project-container">
          <div id="menu-header">
            <h3>Find a project</h3>
            <div id="input-field">
              <div id="search">${icons['search']}</div>
              <input placeholder="Search for project..." />
            </div>
          </div>
          ${repeat(
            this._projectItem,
            category => category.name,
            category => html`
              <ucp-project-sidemenu-project-accordion
                id="accordion"
                .category=${category}
              >
              </ucp-project-sidemenu-project-accordion>
            `
          )}
        </div>
        <div id="line"></div>
        <div id="menu-container" class="subpage-container">
          <div id="menu-header-secondary">
            <div id="arrow">${icons['arrow']}</div>
            <div id="project">${icons['project']}</div>
            <div>Quick project menu</div>
          </div>
          ${repeat(
            this._menuItems,
            category => category.name,
            category => html`
              <ucp-project-sidemenu-accordion
                id="accordion"
                .category=${category}
              >
              </ucp-project-sidemenu-accordion>
            `
          )}
        </div>
      </div>
    `;
  }
}
