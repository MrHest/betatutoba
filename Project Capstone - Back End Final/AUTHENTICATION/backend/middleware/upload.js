import multer from 'multer';
import path from 'path';

// Konfigurasi penyimpanan untuk multer
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        const uploadPath = path.resolve('uploads');
        cb(null, uploadPath);
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname));
    }
});

const upload = multer({ storage });

export default upload;
