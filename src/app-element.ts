import { LitElement, html, css } from 'lit';
import { property } from 'lit/decorators.js';
import { Router } from '@vaadin/router';
import defaultCSS from './shared/default-css';

export class App extends LitElement {
  @property({ type: String }) title = 'My app';
  router: any;

  firstUpdated() {
    this.router = new Router(
      this.shadowRoot!.getElementById('container') as HTMLElement
    );
    this.router.setRoutes([
      { path: '/', component: 'dashboard-element' },
      { path: '/organization', component: 'organization-element' },
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
                component: 'project-overview',
              },
              {
                path: '/environments',
                component: 'project-environments',
              },
            ],
          },
        ],
      },
    ]);
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
      <navigation-header></navigation-header>
      <div id="container"></div>
    `;
  }
}
