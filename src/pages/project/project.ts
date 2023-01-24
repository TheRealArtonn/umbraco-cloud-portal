import { PreventCommands, Router, RouterLocation } from '@vaadin/router';
import { LitElement, html, css } from 'lit';
import { property } from 'lit/decorators.js';

export class ProjectElement extends LitElement {
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
      display: flex;
      flex-direction: column;
    }
  `;

  @property({ type: String, attribute: 'page' })
  page: string = 'project';

  @property()
  subpage: string = 'Overview';

  @property({ type: String, attribute: 'project-id' })
  projectId: string = '';

  onAfterEnter(
    location: RouterLocation,
    commands: PreventCommands,
    router: Router
  ) {
    // this.projectId = String(location.params.alias);
    // console.log(this.projectId);
    console.log(location);
    console.log(commands);
    console.log(router);
  }

  render() {
    return html`
      <side-menu page=${this.page} project-id=${this.projectId}></side-menu>
      <main>
        <div id="page">
          <header-container></header-container>
          <page-container id="subpage">
            <span slot="title">${this.page}</span>
            <slot slot="content"></slot>
          </page-container>
        </div>
      </main>
    `;
  }
}
