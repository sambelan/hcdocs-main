import { LitElement, css, html } from 'lit';
/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
export class MyToko extends LitElement {
  static get properties() {
    return {
      list: {},
      condition: {},
    };
  }

  constructor() {
    super();
    (this.title = 'Cara penggunaan Aplikasi Toko'),
      (this.description =
        'Petunjuk Manual dan bagaimana cara penggunaan dokumentasi dan tutorial aplikasi toko minimarket shop store, software kasir ,program kasir barcode'),
      (this.doclist = [
        {
          nav: 'POS-X App',
          image:
            'https://www.hockeycomputindo.com/img/aplikasi/toko/posx/mockup/transaksi.webp',
          info: 'Manual penggunaan aplikasi toko online pos-x integrasi website whatsapp online order dan Digital site minimarket shop store',
          link: 'https://www.hockeycomputindo.com/aplikasitoko/pos-x/',
        },
        {
          nav: 'Robopos App',
          image:
            'https://www.hockeycomputindo.com/img/aplikasi/toko/robopos/mockup/frontend/mobileweb.webp',
          info: 'Panduan cara penggunaan tutorial aplikasi toko integrasi dengan toko online shop modern dengan robopos web app terbaru.',
          link: 'https://www.hockeycomputindo.com/dokumentasi/robopos/',
        },
        {
          nav: 'ChromPOS Software',
          image:
            'https://www.hockeycomputindo.com/img/aplikasi/toko/chrompos/mockup/backend/pos-penjualankasir.webp',
          info: 'Bagaimana cara operasional penggunaan program kasir toko software toko barcode chrompos, cek disini',
          link: 'https://www.hockeycomputindo.com/dokumentasi/softwaretoko/',
        },
        {
          nav: 'Lava App',
          image:
            'https://www.hockeycomputindo.com/img/aplikasi/toko/grosirlavapos/aplikasitokogrosireceran.webp',
          info: 'Cara penggunaan aplikasi kasir penjualan retail eceran dan grosir integrasi website lava app pos point of sale.',
          link: 'https://www.hockeycomputindo.com/dokumentasi/lavaapp/',
        },
        {
          nav: 'Axcora POS',
          image:
            'https://res.cloudinary.com/hockeycorp/image/upload/q_auto:eco/f_avif/v1716638104/Software%20APlikasi%20Program%20kasir/axcorapos/axcorapos_aplikasi_kasir_toko_online_an7z0k.jpg',
          info: 'Dokumentasi dan tutorial petunjuk penggunaan aplikasi toko axcora pos dengan expired date fitur',
          link: 'https://www.hockeycomputindo.com/dokumentasi/programtoko/',
        },
        {
          nav: 'Program Toko B-POS',
          image:
            'https://wsrv.nl/?url=https://img.youtube.com/vi/dpbKOmH5298/maxresdefault.jpg&w=300&output=webp',
          info: 'Cara dan petunjuk pemakaian program toko murah software toko murah BPOS retail version',
          link: 'https://www.hockeycomputindo.com/dokumentasi/programtokomurah/',
        },
      ]);
    this.condition = true;
  }

  render() {
    return html`
      <div class="pt-5">
      <h2><strong><a href=${this.url} title=${this.title}>
      ${this.title}</a></strong></h2>
      <h3>${this.description}</h3>
      <div class="grid-container los bg-pink">
      ${this.doclist.map(
        (item) => html`
  <div class="grid-item">
  <a href=${item.link} title=${item.nav}><img class="produk" src=${item.image} alt=${item.nav} width="100%" height="100%" loading="lazy"/></a>
  <h3><strong><a href=${item.link} class="text-dark" title=${item.nav}>${item.nav}</a></strong></h3>
  <p>${item.info}</p>
  <p class="pt-3 pb-3"><a href=${item.link} title=${item.nav} class="button">Dokumentasi ${item.nav}</a></p>
  </div>`
      )}
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
    .center {margin:auto;}
    a.button {padding: 8px; border-radius:8px; background-color:black;color:white; text-decoration:none;}
    a {text-decoration:none;}
    .text-dark {color:black;}
    .bg-pink {background-color:#FCD0FD;}
    .bg-blue {background-color:#D0FAFD;}
    .pt-3 {padding-top:15px;}
    .pt-3 {padding-bottom:15px;}
    .pt-5 {padding-top:50px;}
    .p-5 {padding:50px;}
    .produk {max-width:100%;height:250px; object-fit:cover;}
img {border-radius:20px;}
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

window.customElements.define('my-toko', MyToko);
