const mongoose = require('../MongoDb');
const dataForInventory = require('../Data/InventoryData');


// Define a Mongoose model for Inventory Data
const InventoryDataModel = mongoose.model('Inventory', {
    id: Number,
    createdAt: String,
    'MIN INTANCES': Number,
    'MID INTANCES': Number,
    'MAX INTANCES': Number
});

// Define a route to handle only POST request for the /api/inventory endpoint
exports.postInventoryData = async (req, res) => {
    try {
        const newData = dataForInventory;

        const result = await InventoryDataModel.create(newData);

        res.json(result);
    } catch (error) {
        console.log('Error Posting data to MongoDB:', error);
        res.status(500).send('Internal Server Error');
    }
}

exports.getInventoryData = async (req, res) => {
    try {
        // Retrieve all documents from the MongoDB collection associated with the InventoryDataModel
        const dataFromMongoDB = await InventoryDataModel.find();

        // Send the retrieved data as the response
        res.json(dataFromMongoDB);
    } catch (error) {
        console.error('Error fetching data from MongoDB for /api/inventory:', error);
        res.status(500).send('Internal Server Error');
    }
}