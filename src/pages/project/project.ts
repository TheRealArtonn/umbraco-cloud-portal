import { RouterLocation } from '@vaadin/router';
import { LitElement, html, css } from 'lit';
import { property, state } from 'lit/decorators.js';
import { projectsFixture } from '../../api/api-projects.fixture';
import { subpageFixture } from '../../api/api-subpages.fixture';
import { Project, Category } from '../../api/api.resource';

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

    #title {
      text-transform: capitalize;
    }
  `;

  @property({ type: String, attribute: 'page' })
  page: string = 'project';

  @property()
  subpage: string = 'Overview';

  @property({ type: String, attribute: 'project-id' })
  projectId: string = '';

  @state()
  _projectSetting: Project = {} as Project;

  @state()
  _subpageSettings: Array<Category> = [];

  // connectedCallback(): void {
  //   window.addEventListener('popstate', event => {
  //     console.log(
  //       `location: ${document.location}, state: ${JSON.stringify(event.state)}`
  //     );
  //   });
  // }

  // disconnectedCallback(): void {}

  firstUpdated() {
    this.getData();
  }

  onAfterEnter(location: RouterLocation) {
    this.projectId = String(location.params.alias);
  }

  private async getData() {
    try {
      const [projectSettings, subpageSettings] = await Promise.all([
        projectsFixture,
        subpageFixture,
      ]);

      const projectSetting = projectSettings.find(
        project => project.id === this.projectId
      );

      if (projectSetting) {
        this._projectSetting = projectSetting;
      }

      if (subpageSettings) {
        this._subpageSettings = subpageSettings;
      }
    } catch (error) {
      console.log('Projects could not be fetched');
    }
  }

  render() {
    return html`
      <side-menu-project-subpages
        .projectId=${this._projectSetting.id}
      ></side-menu-project-subpages>
      <main>
        <div id="page">
          <header-container
            .colorIdentity=${this._projectSetting.colorId}
            .projectName=${this._projectSetting.name}
            .pageBreadcrumb=${'test'}
          ></header-container>
          <page-container id="subpage">
            <span id="title" slot="title">${this.page}</span>
            <slot slot="content"></slot>
          </page-container>
        </div>
      </main>
    `;
  }
}
