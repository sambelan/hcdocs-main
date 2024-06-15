import { LitElement, css, html } from 'lit';
/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
export class MyNav extends LitElement {
  static get properties() {
    return {
      list: {},
      condition: {},
    };
  }

  constructor() {
    super();
    (this.title = 'Dokumentasi Tutorial'),
      (this.description =
        'Cara petunjuk penggunaan dan pemakaian mesin kasir aplikasi kasir toko restoran software program by hockeycomputindo.'),
      (this.logo =
        'https://wsrv.nl/?url=https://www.hockeycomputindo.com/img/hockeycompcarwebsite.jpg&w=300&output=webp'),
      (this.url = 'https://www.hockeycomputindo.com/dokumentasi/'),
      (this.home = 'https://www.hockeycomputindo.com/'),
      (this.info =
        'Pilih dokumentasi sesuai dengan kebutuhan mu untuk mempelajari tutorial dan panduan penggunaan produk hockey computindo , seperti mesin kasir point of sale, aplikasi kasir, aplikasi toko, aplikasi restoran , software program dan lain nya.'),
      (this.condition = true);
  }

  render() {
    return html`
      <div>
  <p><a href=${this.home} class="black">${this.home}</a></p>
        <a href=${this.url} title=${this.title}>
          <img src=${this.logo} class="logo" alt="Vite logo" />
        </a>
        <h1>${this.title}</h1>
        <h2>${this.description}</h2>
        <p>${this.info}</p>
      </div>
     <slot></slot>
    `;
  }

  static get styles() {
    return css`
      :host {
        max-width: 1200px;
        margin: 0 auto;
        padding: 2rem;
        text-align: center;
      }
      .logo {
        height: 6em;
        padding: 1.5em;
        will-change: filter;
        transition: filter 300ms;
        border-radius:50px;
      }
      .logo:hover {
        filter: drop-shadow(0 0 2em #646cffaa);
      }
      .black {color:black;}
      a {
        font-weight: 500;
        color: #646cff;
        text-decoration: inherit;
      }
      a:hover {
        color: #535bf2;
      }

    `;
  }
}

window.customElements.define('my-nav', MyNav);
