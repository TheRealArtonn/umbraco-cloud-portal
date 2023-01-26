import { LitElement, html, css } from 'lit';

export class ProjectUsage extends LitElement {
  static styles = css`
    :host {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  `;

  render() {
    return html`More detailed usage data and actions`;
  }
}
