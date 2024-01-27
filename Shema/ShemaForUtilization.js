const mongoose = require('../MongoDb');
const dataForUtilization = require('../Data/UtilizationData');


// Define a Mongoose model for Utilization Data
const UtilizationDataModel = mongoose.model('Utilization', {
    id: Number,
    name: String,
    read: Array,
    write:Array,
    input:Array,
    output:Array,
});

// Define a route to handle only POST request for the /api/utilization endpoint
exports.postUtilizationData = async (req, res) => {
    try {
        const newData = dataForUtilization;

        const result = await UtilizationDataModel.create(newData);

        res.json(result);
    } catch (error) {
        console.log('Error Posting data to MongoDB:', error);
        res.status(500).send('Internal Server Error');
    }
}

exports.getUtilizationData = async (req, res) => {
    try {
        // Retrieve all documents from the MongoDB collection associated with the UtilizationDataModel
        const dataFromMongoDB = await UtilizationDataModel.find();

        // Send the retrieved data as the response
        res.json(dataFromMongoDB);
    } catch (error) {
        console.error('Error fetching data from MongoDB for /api/utilization:', error);
        res.status(500).send('Internal Server Error');
    }
}