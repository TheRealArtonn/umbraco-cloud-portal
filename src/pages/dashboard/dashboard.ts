import { LitElement, html, css } from 'lit';
import { property, state } from 'lit/decorators.js';
import { repeat } from 'lit/directives/repeat.js';
import { projectsFixture } from '../../api/api-projects.fixture';
import { Project } from '../../api/api.resource';

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

  @state()
  _projectSettings: Array<Project> = [];

  firstUpdated() {
    this.getData();
  }

  private async getData() {
    try {
      const [projectSettings] = await Promise.all([projectsFixture]);

      this._projectSettings = projectSettings;
    } catch (error) {
      console.log('Projects could not be fetched');
    }
  }

  render() {
    return html`
      <side-menu-project page=${this.page}></side-menu-project>
      <main>
        <div id="page">
          <div id="group">
            ${repeat(
              this._projectSettings,
              project => project.id,
              project =>
                html` <project-card .projectSetting=${project}></project-card>`
            )}
          </div>
        </div>
      </main>
    `;
  }
}
