import { css, html, LitElement } from 'lit';
import { property } from 'lit/decorators.js';
import { Subpage } from '../../../api/api.resource';

import defaultCSS from '../../../shared/default-css';

export class AccordionItem extends LitElement {
  static styles = [
    defaultCSS,
    css`
      #subpage-item {
        font-size: 16px;
        height: 45px;
        color: #a5acc9;
        border-radius: 14px;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        padding-top: 1px;
        padding-left: 20px;
        cursor: pointer;
      }
      :host([active]) #subpage-item,
      #subpage-item:hover {
        font-weight: 700;
        color: #1b264f;
        background-color: #f3f4f6;
      }

      a {
        text-decoration: none;
      }
    `,
  ];

  @property({ type: String, attribute: 'project-id' })
  projectId: string = '';

  @property()
  subpageSetting: Subpage = {} as Subpage;

  @property({ type: Boolean, reflect: true })
  active: boolean = false;

  firstUpdated() {
    if (this.subpageSetting.name === 'Overview') {
      this.active = true;
    }
  }

  render() {
    return html`
      <a href="project/${this.projectId}/${this.subpageSetting.path}"
        ><div id="subpage-item">${this.subpageSetting.name}</div>
      </a>
    `;
  }
}
