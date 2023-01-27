import { LitElement, html, css } from 'lit';

export class ProjectOverview extends LitElement {
  static styles = css`
    :host {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  `;

  render() {
    return html`Cool stats about the project and project resource usage`;
  }
}
