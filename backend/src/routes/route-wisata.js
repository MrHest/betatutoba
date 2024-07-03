const express = require('express');
const { getAllWisata, getWisataById } = require('../controllers/controller-wisata');
const router = express.Router();

router.get('/api/wisata', getAllWisata);
router.get('/api/wisata/:id', getWisataById);

module.exports = router;
