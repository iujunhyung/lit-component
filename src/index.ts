import { LitElement, css, html } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("lit-component")
export class LitComponent extends LitElement {
  
  @property({ type: String, attribute: "display" })
  display: string = "Hello World";

  render() {
    return html`
      <div class="button" @click=${() => console.log("hello")}>
        ${this.display} Byde!
      </div>
    `;
  }

  static styles = css`
    .button {
      background-color: #4caf50;
      border: none;
      border-radius: 8px;
      color: white;
      padding: 15px 32px;
      text-align: center;
      font-size: 16px;
      cursor: pointer;
    }
  `;
}