import { LitElement, html, css } from 'lit';
import { property } from 'lit/decorators.js';

export class DashboardElement extends LitElement {
  static styles = css`
    :host {
      width: 100%;
      display: flex;
    }

    main {
      width: calc(100% - 326px);
      padding: 40px 0px;
      display: flex;
      justify-content: center;
      overflow: hidden;
    }

    #page {
      width: 1414px;
      display: flex;
      flex-direction: column;
    }

    #group {
      display: flex;
      justify-content: space-between;
    }
  `;

  @property({ type: String, attribute: 'page' })
  page: string = 'dashboard';

  render() {
    return html`
      <side-menu page=${this.page}></side-menu>
      <main>
        <div id="page">
          <div id="group">
            <project-card></project-card>
            <project-card></project-card>
          </div>
        </div>
      </main>
    `;
  }
}
