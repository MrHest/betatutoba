const pool = require('../configs/database');

const getAllWisata = (req, res) => {
  pool.query('SELECT * FROM destinasi_wisata', (error, results) => {
    if (error) {
      res.status(500).json({ error: error.message });
    } else {
      results.forEach(wisata => {
        wisata.gambar = Buffer.from(wisata.gambar).toString('base64');
      });
      res.status(200).json(results);
    }
  });
};

const getWisataById = (req, res) => {
  const { id } = req.params;
  pool.query('SELECT * FROM destinasi_wisata WHERE id = ?', [id], (error, results) => {
    if (error) {
      res.status(500).json({ error: error.message });
    } else {
      if (results.length > 0) {
        const wisata = results[0];
        wisata.gambar = Buffer.from(wisata.gambar).toString('base64');
        res.status(200).json(wisata);
      } else {
        res.status(404).json({ error: 'Wisata not found' });
      }
    }
  });
};

module.exports = {
  getAllWisata,
  getWisataById
};
