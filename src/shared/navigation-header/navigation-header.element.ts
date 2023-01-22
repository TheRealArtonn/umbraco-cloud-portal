import { EmptyCommands, Router, RouterLocation } from '@vaadin/router';
import { css, html, LitElement } from 'lit';
import { property } from 'lit/decorators.js';

import defaultCSS from '../default-css';

export class NavigationHeader extends LitElement {
  static styles = [
    // UUITextStyles,
    defaultCSS,
    css`
      :host {
        width: 100%;
      }

      header {
        width: 100%;
        height: 90px;
        background-color: var(--uui-color-header-surface, #1b264f);
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 25px;
      }

      nav {
        width: auto;
        display: flex;
        flex-direction: row;
      }

      nav > * {
        margin-left: 20px;
      }

      .separator {
        width: 2px;
        height: 40px;
        background-color: #39477c;
        margin: 0px 10px 0px 30px;
      }
    `,
  ];

  //   @property({ type: String, attribute: 'project-id' })
  //   projectId: string = '';

  //   @state()
  //   private _menuItems: Array<MenuItem> = [];

  //   @state()
  //   private _projectItem: Array<ProjectItem> = [];

  //   connectedCallback(): void {
  //     super.connectedCallback();
  //     this.getData();
  //   }

  //   private async getData() {
  //     try {
  //       const [menuItems, projectItems] = await Promise.all([
  //         fakeMenuFixture,
  //         fakeProjectsFixture,
  //       ]);

  //       this._menuItems = menuItems;
  //       this._projectItem = projectItems;
  //     } catch (error) {}
  //   }

  @property()
  page: string = '';

  onAfterEnter(
    location: RouterLocation,
    commands: EmptyCommands,
    router: Router
  ) {
    console.log(location);
    console.log(commands);
    console.log(router);
  }

  render() {
    return html`
      <header>
        <div id="logo">
          <a href="/">
            <img src="/assets/logo-horizontal.svg" alt="Umbraco cloud" />
          </a>
        </div>
        <nav>
          <button-medium></button-medium>
          <button-medium></button-medium>
          <div class="separator"></div>
          <button-medium 
            .link=${'/'} 
            .icon=${'projects'}
            .active=${this.page === 'dashboard' ? true : false}
          ></button-medium>
          <button-medium .link=${'/organization/'} .icon=${'organization'}></button-medium>></button-medium>
          <div class="separator"></div>
          <button-medium></button-medium>
          <button-medium></button-medium>
        </nav>
      </header>
    `;
  }
}
