import { css, html, LitElement } from 'lit';
import { property } from 'lit/decorators.js';
import { repeat } from 'lit/directives/repeat.js';
import { MenuItem } from '../project-sidemenu.resource';
import { icons } from '../svg/icons';

export class UCPProjectSideMenuAccordionElement extends LitElement {
  static styles = [
    css`
      :host {
        display: block;
        margin: 0 auto;
        max-width: 1024px;
      }

      svg {
        fill: currentColor;
      }

      #accordion {
        margin-bottom: 40px;
      }

      #accordion-header {
        font-size: 16px;
        color: #a5acc9;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 20px;
        cursor: pointer;
        transition: all 0.4s ease;
      }

      #accordion-header:hover,
      #accordion-header.active {
        color: #1b264f;
      }

      #accordion-header-text {
        font-weight: 700;
        display: flex;
        align-items: center;
      }

      #cat-icon {
        width: 24px;
        margin-right: 15px;
      }

      #acc-icon {
        width: 18px;
        height: 18px;
        transition: all 0.4s ease;
      }

      #accordion-header.active #acc-icon {
        transform: rotate(180deg);
        margin-bottom: -10px;
      }

      #subpage-container {
        display: flex;
      }

      #subpage-line {
        width: 2px;
        background-color: #ebebeb;
        margin-right: 25px;
        margin-left: 11px;
      }

      #subpages {
        display: flex;
        flex-direction: column;
        flex: 1 1 0%;
      }

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

      #subpage-item:hover {
        font-weight: 700;
        color: #1b264f;
        background-color: #f3f4f6;
      }
    `,
  ];

  @property({ attribute: false })
  category: MenuItem | null = null;

  @property()
  categoryActive: boolean = false;

  private _changeCategoryActive() {
    this.categoryActive = !this.categoryActive;
  }

  render() {
    return html`
      <div id="accordion">
        <div
          id="accordion-header"
          class=${this.categoryActive ? 'active' : ''}
          @click=${this._changeCategoryActive}
        >
          <div id="accordion-header-text">
            <div id="cat-icon">${icons[this.category?.icon ?? 'advanced']}</div>
            <div>${this.category?.name}</div>
          </div>
          <div id="acc-icon">${icons['arrow']}</div>
        </div>
        ${this.categoryActive
          ? html`
              <div id="subpage-container">
                <div id="subpage-line"></div>
                <div id="subpages">
                  ${this.category
                    ? repeat(
                        this.category.subpages,
                        subpage => subpage.name,
                        subpage =>
                          html` <div id="subpage-item">${subpage.name}</div> `
                      )
                    : ''}
                </div>
              </div>
            `
          : ''}
      </div>
    `;
  }
}
