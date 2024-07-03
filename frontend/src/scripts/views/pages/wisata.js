import TheBetatuTobaSource from '../../data/thebetatutoba-source';

const Wisata = {
  async render() {
    return `
      <div id="wisata">
        <h2>Daftar Wisata</h2>
        <div id="wisataList"></div>
      </div>
    `;
  },

  async afterRender() {
    const wisataList = await TheBetatuTobaSource.getAllWisata();
    const wisataContainer = document.querySelector('#wisataList');
    wisataList.forEach((wisata) => {
      wisataContainer.innerHTML += `
        <div class="wisata-item">
          <h3>${wisata.nama}</h3>
          <img src="data:image/jpeg;base64,${btoa(String.fromCharCode(...new Uint8Array(wisata.gambar)))}" alt="${wisata.nama}" />
          <p>${wisata.deskripsi}</p>
        </div>
      `;
    });
  }
};

export default Wisata;
