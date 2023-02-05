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
    `,
  ];

  @property({ type: String, attribute: 'project-id' })
  projectId: string = '';

  @property()
  categorySetting: Category = {} as Category;

  @property({ type: Boolean, reflect: true })
  categoryActive: boolean = false;

  @property()
  activeSubpage: string = 'Overview';

  @state()
  private _categoryIcon = 'advanced';

  willUpdate() {
    this._categoryIcon = this.categorySetting.icon;
  }

  private _changeCategoryActive() {
    this.categoryActive = !this.categoryActive;

    this.dispatchEvent(
      new CustomEvent('accordion:selected', {
        composed: true,
        bubbles: true,
        detail: this.categorySetting?.name,
      })
    );
  }

  private _state(forwarded, fixture) {
    if (forwarded === fixture) {
      return true;
    }
    if (forwarded === '' && fixture === 'Overview') {
      return true;
    }
    return false;
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
                          html`
                            <accordion-item
                              .projectId=${this.projectId}
                              .subpageSetting=${subpage}
                              .active=${this._state(
                                this.activeSubpage,
                                subpage.name
                              )}
                            ></accordion-item>
                          `
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
