import UrlParser from '../../routes/url-parser';
import TheBetatuTobaSource from '../../data/thebetatutoba-source';
import { createWisataDetailTemplate } from '../templates/template-creator';

const Detail = {
  async render() {
    return `
      <div id="wisata" class="wisata"></div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const wisata = await TheBetatuTobaSource.getWisataById(url.id);
    const wisataContainer = document.querySelector('#wisata');
    wisataContainer.innerHTML = createWisataDetailTemplate(wisata);
  }
};

export default Detail;
