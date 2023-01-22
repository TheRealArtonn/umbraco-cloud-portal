import { css, html, LitElement } from 'lit';
import { property } from 'lit/decorators.js';

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

  @property({ type: String, attribute: 'project-id' })
  projectId: string = '';

  willUpdate() {
    // console.log(this.projectId);
    // console.log(this.page);
  }

  render() {
    return html`
      <aside>
        <nav>
          <a href="project/project1">overview</a>
          <a href="">overview</a>
          <a href="">overview</a>
        </nav>
      </aside>
    `;
  }
}
