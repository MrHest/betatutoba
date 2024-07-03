import TheBetatutobaDbSource from "../../data/thebetatutoba-source";

const TentangKami = {
  async render() {
    return `
      <section class="tentang-kami">
        <h1>Tentang Kami</h1>
        <p>Selamat datang di Betatutoba! Kami adalah perusahaan yang berdedikasi untuk menyediakan informasi wisata terbaik di sekitar Danau Toba.</p>

        <h2>Sejarah Kami</h2>
        <p>Betatutoba didirikan pada tahun 2020 dengan tujuan untuk mempromosikan keindahan Danau Toba kepada dunia. Didorong oleh kecintaan kami terhadap alam dan budaya lokal, kami telah tumbuh menjadi sumber informasi wisata terkemuka di kawasan ini.</p>

        <h2>Misi dan Visi</h2>
        <p>Misi kami adalah untuk menjadi panduan utama bagi wisatawan yang ingin menjelajahi keindahan Danau Toba. Visi kami adalah untuk mendukung pariwisata berkelanjutan dan membantu meningkatkan perekonomian lokal melalui promosi destinasi wisata.</p>

        <h2>Tim Kami</h2>
        <div class="tim">
          <div class="anggota-tim">
            <img src="../images/team/john_doe.jpg" alt="John Doe">
            <h3>John Doe</h3>
            <p>CEO & Founder</p>
          </div>
          <div class="anggota-tim">
            <img src="../images/team/jane_doe.jpg" alt="Jane Doe">
            <h3>Jane Doe</h3>
            <p>COO</p>
          </div>
          <!-- Tambahkan anggota tim lainnya di sini -->
        </div>

        <h2>Kontak dan Lokasi</h2>
        <p>Alamat: Jl. Danau Toba No. 10, Parapat, Sumatera Utara</p>
        <p>Email: info@betatutoba.com</p>
        <p>Telepon: +62 123 4567 890</p>

        <h2>Pencapaian Kami</h2>
        <ul>
          <li>Pemenang Penghargaan Pariwisata Sumatera Utara 2022</li>
          <li>Top 10 Startup Pariwisata Indonesia 2021</li>
          <!-- Tambahkan pencapaian lainnya di sini -->
        </ul>
      </section>
    `;
  },

  async afterRender() {
    const showMoreBtn = document.querySelector('#showMoreBtn');
    const moreInfo = document.querySelector('#moreInfo');

    showMoreBtn.addEventListener('click', () => {
      moreInfo.style.display = 'block';
      showMoreBtn.style.display = 'none';
    });
  },
};

export default TentangKami;
