import { LitElement, css, html } from 'lit';
/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
export class MyKasir extends LitElement {
  static get properties() {
    return {
      list: {},
      condition: {},
    };
  }

  constructor() {
    super();
    (this.title = 'Cara penggunaan Mesin Kasir'),
      (this.description =
        'Petunjuk Manual cara penggunaan dokumentasi dan tutorial Mesin Kasir POS Point of Sale'),
      (this.logo =
        'https://www.hockeycomputindo.com/img/hockeycompcarwebsite.jpg'),
      (this.url = 'https://www.hockeycomputindo.com/dokumentasi/'),
      (this.pos = [
        {
          title: 'Mesin Kasir',
          image:
            'https://www.hockeycomputindo.com/img/mesinkasir/mesinkasirlengkapsekali.webp',
          info: 'Bagaimana cara penggunaan mesin kasir point of sale lengkap - akses pada dokumentasi ini untuk mendapatkan petunjuk penggunaan',
          link: 'https://www.hockeycomputindo.com/dokumentasi/mesinkasir/',
        },
      ]),
      (this.doclist = [
        {
          nav: 'Mesin kasir Point Of Sale',
          image:
            'https://www.hockeycomputindo.com/img/mesinkasir/mesinkasirlengkapsekali.webp',
          link: 'Mesin kasir restoran lengkap',
        },
        {
          nav: 'Mesin kasir restoran lengkap 2',
          image:
            'https://www.hockeycomputindo.com/img/mesinkasir/mesinkasirlengkapsekali.webp',
          link: 'Mesin kasir restoran lengkap link 2',
        },
      ]);
    this.condition = true;
  }

  render() {
    return html`
      <div>
      <h2><strong><a href=${this.url} title=${this.title}>
      ${this.title}</a></strong></h2>
      <h3>${this.description}</h3>
      <div class="grid-container los bg-yellow">
      ${this.pos.map(
        (p) => html`
      <div class="grid-item">
      <a href=${p.link} title=${p.title}><img class="produk" src=${p.image} alt=${p.title}/></a>
      </div>
      <div class="grid-item p-5">
      <h3><strong><a href=${p.link} title=${p.title} class="text-dark">${p.title}</a></strong></h3>
      <p>${p.info}</p>
      <p class="pt-3"><a href=${p.link} title=${p.title} class="button">Dokumentasi ${p.title}</a></p>
      </div>`
      )}
      </div>
      <slot></slot>
</div>
    `;
  }

  static get styles() {
    return css`
    :host {
    }
    .los {padding: 5px; border: solid 1px; border-radius:50px;}
    .grid-container {
      display: grid;
      grid-template-columns: auto auto;
      padding: 10px;
    }
    .grid-item {
      padding: 20px;
    }
    a.button {padding: 8px; border-radius:8px; background-color:black;color:white; text-decoration:none;}
    .bg-yellow {background-color:#F9FCC2;}
    .pt-3 {padding-top:15px;}
    .p-5 {padding:50px;}
    .produk {max-width:100%;}
a {text-decoration:none;}
.text-dark {color:black;}
    @media only screen and (max-width: 600px) {
     
    .grid-container {
      display: grid;
      grid-template-columns: auto;
      padding: 10px;
    }
    }
    `;
  }
}

window.customElements.define('my-kasir', MyKasir);
