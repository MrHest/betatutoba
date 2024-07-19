import Destinations from "../models/DestinationModel.js";
import Akomodasi from "../models/AkomodasiModel.js";
import DestinationAkomodasi from "../models/DestinationAkomodasiModel.js";
import upload from "../middleware/upload.js";

// Controller untuk mendapatkan semua destinasi
export const getDestinations = async (req, res) => {
    try {
        const destinations = await Destinations.findAll({
            include: {
                model: Akomodasi,
                through: { attributes: [] } // Menghindari kolom pivot ditampilkan
            }
        }); 
        
        console.log(JSON.stringify(destinations, null, 2)); // Tambahkan logging untuk memeriksa respons
        res.status(200).json(destinations);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Controller untuk mendapatkan destinasi berdasarkan UUID
export const getDestinationById = async (req, res) => {
    try {
        const { uuid } = req.params; // Menggunakan uuid sebagai parameter
        const destination = await Destinations.findOne({
            where: { uuid: uuid }, // Menggunakan uuid sebagai kondisi pencarian
            include: Akomodasi
        });
        if (!destination) return res.status(404).json({ message: "Destination not found" });
        res.status(200).json(destination);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Controller untuk mendapatkan semua destinasi untuk admin
export const getAdminDestinations = async (req, res) => {
    try {
        const destinations = await Destinations.findAll({
            include: {
                model: Akomodasi,
                through: { attributes: [] } // Menghindari kolom pivot ditampilkan
            }
        });
        console.log(JSON.stringify(destinations, null, 2)); // Tambahkan logging untuk memeriksa respons
        res.status(200).json(destinations);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Controller untuk mendapatkan destinasi berdasarkan UUID untuk admin
export const getAdminDestinationById = async (req, res) => {
    try {
        const { uuid } = req.params; // Menggunakan uuid sebagai parameter
        const destination = await Destinations.findOne({
            where: { uuid: uuid }, // Menggunakan uuid sebagai kondisi pencarian
            include: Akomodasi
        });
        if (!destination) return res.status(404).json({ message: "Destination not found" });
        res.status(200).json(destination);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Controller untuk membuat destinasi
export const createDestination = async (req, res) => {
    const { name, description } = req.body;
    const accommodationIds = JSON.parse(req.body.accommodationIds);
    const gambar = req.file ? req.file.path : null;

    try {
        const destination = await Destinations.create({ name, description, gambar });

        if (accommodationIds && accommodationIds.length > 0) {
            for (const accommodationId of accommodationIds) {
                await DestinationAkomodasi.create({
                    destinationId: destination.uuid,  // Menggunakan uuid untuk relasi
                    akomodasiId: accommodationId       // Menggunakan uuid untuk akomodasi
                });
            }
        }

        console.log('Created destination:', destination);
        console.log('Associated accommodations:', accommodationIds);

        res.status(201).json(destination);
    } catch (error) {
        console.error('Error creating destination:', error);
        res.status(500).json({ error: 'Something went wrong' });
    }
};

export const updateDestination = async (req, res) => {
    try {
        const { uuid } = req.params; // Using uuid as a parameter
        const { akomodasiIds, ...updateData } = req.body;

        // Find the destination
        const destination = await Destinations.findOne({
            where: { uuid: uuid }, // Using uuid as search condition
        });

        if (!destination) {
            return res.status(404).json({ message: "Destination not found" });
        }

        // Update destination data
        await destination.update(updateData);

        // Verify if akomodasiIds are valid
        if (akomodasiIds && Array.isArray(akomodasiIds)) {
            // Optional: Check if all akomodasiIds exist
            const invalidAkomodasiIds = await Promise.all(akomodasiIds.map(async (id) => {
                const akomodasi = await Akomodasi.findByPk(id);
                return akomodasi ? null : id;
            }));

            const hasInvalidAkomodasi = invalidAkomodasiIds.some(id => id !== null);
            if (hasInvalidAkomodasi) {
                return res.status(400).json({ message: `Invalid akomodasi IDs: ${invalidAkomodasiIds.filter(id => id !== null).join(', ')}` });
            }

            // Update accommodations
            await destination.setAkomodasis(akomodasiIds);
        }

        // Retrieve the updated destination along with its accommodations
        const updatedDestination = await Destinations.findOne({
            where: { uuid: uuid },
            include: Akomodasi
        });

        res.status(200).json(updatedDestination);
    } catch (error) {
        console.error('Error updating destination:', error); // Add detailed logging
        res.status(500).json({ message: error.message });
    }
};

// Controller untuk menghapus destinasi
export const deleteDestination = async (req, res) => {
    try {
        const { uuid } = req.params; // Menggunakan uuid sebagai parameter
        const deleted = await Destinations.destroy({ where: { uuid: uuid } }); // Menggunakan uuid untuk penghapusan
        if (!deleted) return res.status(404).json({ message: "Destination not found" });
        res.status(204).json();
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
