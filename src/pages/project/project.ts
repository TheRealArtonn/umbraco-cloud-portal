import { RouterLocation } from '@vaadin/router';
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

    div {
      display: flex;
      flex-direction: column;
    }

    #page {
      width: 1160px;
    }
  `;

  @property({ type: String, attribute: 'page' })
  page: string = 'project';

  @property({ type: String, attribute: 'project-id' })
  projectId: string = '';

  onAfterEnter(location: RouterLocation) {
    this.projectId = String(location.params.alias);
    // console.log(location);
    // console.log(commands);
    // console.log(router);
  }

  render() {
    return html`
      <side-menu page=${this.page} project-id=${this.projectId}></side-menu>
      <main>
        <div>
          <header-container></header-container>
          <page-container id="subpage">
            <span slot="title">text</span>
            <slot slot="content"></slot>
          </page-container>
        </div>
      </main>
    `;
  }
}
