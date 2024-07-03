const express = require('express');
const { getAllWisata, getWisataById } = require('../controllers/controller-wisata');
const router = express.Router();

router.get('/api/wisata', getAllWisata);
router.get('/api/wisata/:id', getWisataById);

module.exports = router;

// batas

// const router = require('express').Router();
// const { wisata } = require('../controllers');

// // GET localhost:8080/karyawan => Ambil data semua karyawan
// router.get('/wisata', wisata.getDataWisata);

// // GET localhost:8080/wisata/2 => Ambil data semua wisata berdasarkan id = 2
// router.get('/wisata/:id', wisata.getDataWisataByID);

// // POST localhost:8080/wisata/add => Tambah data wisata ke database
// router.post('/wisata/add', wisata.addDataWisata);

// // POST localhost:8080/wisata/2 => Edit data wisata
// router.post('/wisata/edit', wisata.editDataWisata);

// // POST localhost:8080/wisata/delete => Delete data wisata
// router.post('/wisata/delete/', wisata.deleteDataWisata);

// module.exports = router;