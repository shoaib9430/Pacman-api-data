const mongoose = require('../MongoDb');
const dataForStorage = require('../Data/StorageGraphData');


// Define a Mongoose model for Storage Data
const StorageDataModel = mongoose.model('Storage', {
    id: Number,
    name: String,
    value: String,
    PBvalue: Number,
    color: String
});

// Define a route to handle only POST request for the /api/storage endpoint
exports.postStorageData = async (req, res) => {
    try {
        const newData = dataForStorage;

        const result = await StorageDataModel.create(newData);

        res.json(result);
    } catch (error) {
        console.log('Error Posting data to MongoDB:', error);
        res.status(500).send('Internal Server Error');
    }
}

exports.getStorageData = async (req, res) => {
    try {
        // Retrieve all documents from the MongoDB collection associated with the StorageDataModel
        const dataFromMongoDB = await StorageDataModel.find();

        // Send the retrieved data as the response
        res.json(dataFromMongoDB);
    } catch (error) {
        console.error('Error fetching data from MongoDB for /api/storage:', error);
        res.status(500).send('Internal Server Error');
    }
}