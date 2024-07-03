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

// batas

// const config = require('../configs/database');
// const mysql = require('mysql');
// const pool = mysql.createPool(config);

// pool.on('error',(err)=> {
//     console.error(err);
// });

// module.exports ={
//     // Ambil data semua Wisata
//     getDataWisata(req,res){
//         pool.getConnection(function(err, connection) {
//             if (err) throw err;
//             connection.query(
//                 `
//                 SELECT * FROM destinasi_wisata;
//                 `
//             , function (error, results) {
//                 if(error) throw error;  
//                 res.send({ 
//                     success: true, 
//                     message: 'Berhasil ambil data!',
//                     data: results 
//                 });
//             });
//             connection.release();
//         })
//     },
//     // Ambil data Wisata berdasarkan ID
//     getDataWisataByID(req,res){
//         let id = req.params.id;
//         pool.getConnection(function(err, connection) {
//             if (err) throw err;
//             connection.query(
//                 `
//                 SELECT * FROM destinasi_wisata WHERE id = ?;
//                 `
//             , [id],
//             function (error, results) {
//                 if(error) throw error;  
//                 res.send({ 
//                     success: true, 
//                     message: 'Berhasil ambil data!',
//                     data: results
//                 });
//             });
//             connection.release();
//         })
//     },
//     // Simpan data Wisata
//     addDataWisata(req,res){
//         let data = {
//             nama : req.body.nama,
//             gambar : req.body.gambar,
//             deskripsi : req.body.deskripsi
//         }
//         pool.getConnection(function(err, connection) {
//             if (err) throw err;
//             connection.query(
//                 `
//                 INSERT INTO destinasi_wisata SET ?;
//                 `
//             , [data],
//             function (error, results) {
//                 if(error) throw error;  
//                 res.send({ 
//                     success: true, 
//                     message: 'Berhasil tambah data!',
//                 });
//             });
//             connection.release();
//         })
//     },
//     // Update data Wisata
//     editDataWisata(req,res){
//         let dataEdit = {
//             nama : req.body.nama,
//             gambar : req.body.gambar,
//             deskripsi : req.body.deskripsi
//         }
//         let id = req.body.id
//         pool.getConnection(function(err, connection) {
//             if (err) throw err;
//             connection.query(
//                 `
//                 UPDATE destinasi_wisata SET ? WHERE id = ?;
//                 `
//             , [dataEdit, id],
//             function (error, results) {
//                 if(error) throw error;  
//                 res.send({ 
//                     success: true, 
//                     message: 'Berhasil edit data!',
//                 });
//             });
//             connection.release();
//         })
//     },
//     // Delete data Wisata
//     deleteDataWisata(req,res){
//         let id = req.body.id
//         pool.getConnection(function(err, connection) {
//             if (err) throw err;
//             connection.query(
//                 `
//                 DELETE FROM destinasi_wisata WHERE id = ?;
//                 `
//             , [id],
//             function (error, results) {
//                 if(error) throw error;  
//                 res.send({ 
//                     success: true, 
//                     message: 'Berhasil hapus data!'
//                 });
//             });
//             connection.release();
//         })
//     }
// }