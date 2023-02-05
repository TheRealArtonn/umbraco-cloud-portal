import { Router } from '@vaadin/router';
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

  router?: Router;
  popstateHandler = () => {
    this.activePage =
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

  @property()
  page: string = '';

  @property()
  activePage: string = '';

  render() {
    return html`
      <header>
        <div id="logo">
          <a href="/">
            <img src="/assets/logo-horizontal.svg" alt="Umbraco cloud" />
          </a>
        </div>
        <nav>
          <button-medium .icon=${'add'}></button-medium>
          <button-medium .icon=${'search'}></button-medium>
          <div class="separator"></div>
          <button-medium
            .link=${'/'}
            .icon=${'projects'}
            .active=${this.activePage === 'root'}
          ></button-medium>
          <button-medium
            .link=${'/organization/'}
            .icon=${'organization'}
            .active=${this.activePage === 'organization'}
          ></button-medium>
          <div class="separator"></div>
          <button-medium .icon=${'notifications'}></button-medium>
          <button-medium .icon=${'notifications'}></button-medium>
        </nav>
      </header>
    `;
  }
}
