import { LitElement, css, html } from 'lit';
/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
export class MyResto extends LitElement {
  static get properties() {
    return {
      list: {},
      condition: {},
    };
  }

  constructor() {
    super();
    (this.title = 'Cara penggunaan Aplikasi Restoran'),
      (this.description =
        'Petunjuk Manual dan bagaimana cara penggunaan dokumentasi dan tutorial aplikasi restoran cafe rumah makan, software restoran ,program restoran'),
      (this.doclist = [
        {
          nav: 'Resto-X App',
          image:
            'https://www.hockeycomputindo.com/img/aplikasi/restoran/restox/aplikasiandroidrestorancaferumahmakan.webp',
          info: 'Untuk manual penggunaan aplikasi restoran online resto-x integrasi website whatsapp online order dan QrCode menu Digital akses disini',
          link: 'https://www.hockeycomputindo.com/dokumentasi/aplikasirestoran/',
        },
        {
          nav: 'Mr.Resto App',
          image: 'https://www.hockeycomputindo.com/img/mresto.webp',
          info: 'Panduan cara penggunaan tutorial aplikasi restoran mr.resto pos app modern resto cafe rumah makan software program online.',
          link: 'https://www.hockeycomputindo.com/dokumentasi/restopos/',
        },
        {
          nav: 'Unipos Resto Soft',
          image:
            'https://www.hockeycomputindo.com/img/software/restoran/websiterestorancaferumahmakan.webp',
          info: 'Ikuti panduang dan petunjuk penggunaan software restoran program restoran desktop offline unipos resto cafe rumah makan.',
          link: 'https://www.hockeycomputindo.com/dokumentasi/softwarerestoran/',
        },
        {
          nav: 'Bang Resto App',
          image:
            'https://www.hockeycomputindo.com/img/aplikasi/restoran/bangresto/aplikasirestoranmodern.webp',
          info: 'Paduan dan pedoman penggunaan aplikasi restoran cafe rumah makan modern bang resto web app.',
          link: 'https://www.hockeycomputindo.com/dokumentasi/bangresto/',
        },
        {
          nav: 'Program Restoran B-POS',
          image:
            'https://www.hockeycomputindo.com/img/aplikasi/restoran/unipos/mockup/backend/masterdata.webp',
          info: 'Cara menggunakan program restoran software restoran murah b-pos offline desktop soft',
          link: 'https://www.hockeycomputindo.com/dokumentasi/programrestoranmurah/',
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
      <div class="grid-container los bg-blue">
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

window.customElements.define('my-resto', MyResto);
