import { LitElement, html, css } from 'lit';
import { property, state } from 'lit/decorators.js';
import { Router } from '@vaadin/router';
import defaultCSS from './shared/default-css';

export class App extends LitElement {
  @property({ type: String }) title = 'My app';
  router: any;

  @property({ type: Object })
  location: any;

  @state()
  private _activePageName = '';

  async firstUpdated() {
    this.router = new Router(
      this.shadowRoot!.getElementById('container') as HTMLElement
    );
    await this.router.setRoutes([
      { path: '/', name: 'root', component: 'dashboard-element' },
      {
        path: '/organization',
        name: 'organization',
        component: 'organization-element',
      },
      {
        path: '/project/',
        component: 'project-element',
        children: [
          {
            path: '/:alias',
            component: 'div',
            children: [
              {
                path: '/',
                name: 'Overview',
                component: 'project-overview',
              },
              {
                path: '/environments',
                name: 'Environments',
                component: 'project-environments',
              },
              {
                path: '/edit-teams',
                name: 'Edit teams',
                component: 'project-edit-teams',
              },
              {
                path: '/usage',
                name: 'Usage',
                component: 'project-usage',
              },
            ],
          },
        ],
      },
    ]);

    window.umbracoCloudPortal.router = this.router;

    this.location = this.router.location;
    this._activePageName = this.location.route.name;
  }

  static styles = [
    defaultCSS,
    css`
      :host {
        width: 100vw;
        height: 100vh;
        font-size: 16px;
        color: #1a2b42;
        background-color: var(--umbraco-cloud-portal-background-color, #f3f3f5);
        display: flex;
        flex-direction: column;
      }

      #container {
        height: 100%;
        display: flex;
      }
    `,
  ];

  render() {
    return html`
      <navigation-header
        .activePage=${this._activePageName}
      ></navigation-header>
      <div id="container"></div>
    `;
  }
}

export interface UmbracoCloudPortal {
  router: Router | null;
}

declare global {
  interface Window {
    umbracoCloudPortal: UmbracoCloudPortal;
  }
}
