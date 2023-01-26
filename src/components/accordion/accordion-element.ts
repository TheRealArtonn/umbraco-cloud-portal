import { css, html, LitElement } from 'lit';
import { property, state } from 'lit/decorators.js';
import { repeat } from 'lit/directives/repeat.js';
import { Category } from '../../api/api.resource';

import defaultCSS from '../../shared/default-css';
import { medium } from '../../shared/svg/icons';

export class AccordionElement extends LitElement {
  static styles = [
    defaultCSS,
    css`
      :host {
      }
    `,
  ];

  @property()
  categorySetting: Category = {} as Category;

  @property()
  categoryActive: boolean = false;

  @state()
  private _categoryIcon = 'advanced';

  willUpdate() {
    this._categoryIcon = this.categorySetting.icon;
  }

  private _changeCategoryActive() {
    this.categoryActive = !this.categoryActive;
  }

  render() {
    return html` <div id="accordion">
      <div
        id="accordion-header"
        class=${this.categoryActive ? 'active' : ''}
        @click=${this._changeCategoryActive}
      >
        <div id="accordion-header-text">
          <div id="cat-icon">${medium[this._categoryIcon]}</div>
          <div>${this.categorySetting?.name}</div>
        </div>
        <div id="acc-icon">${medium['arrow']}</div>
      </div>
      ${this.categoryActive
        ? html`
            <div id="subpage-container">
              <div id="subpage-line"></div>
              <div id="subpages">
                ${this.categorySetting
                  ? repeat(
                      this.categorySetting.subpages,
                      subpage => subpage.name,
                      subpage =>
                        html` <div id="subpage-item">${subpage.name}</div> `
                    )
                  : ''}
              </div>
            </div>
          `
        : ''}
    </div>`;
  }
}
