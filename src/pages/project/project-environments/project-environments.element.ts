import { LitElement, html, css } from 'lit';

export class ProjectEnvironments extends LitElement {
  static styles = css`
    :host {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  `;

  render() {
    return html`Environments manipulation and information`;
  }
}
