const mongoose = require('../MongoDb');
const ComplianceGraphData = require('../Data/ComplianceGraphdata');


// Define a Mongoose model for Compliance Data
const ComplianceDataModel = mongoose.model('Compliance', {
    id: Number,
    name: String,
    percentage: Number,
    mainRadiusColor: String,
    progressRadiusColor: String,
});

// Define a route to handle only POST request for the /api/compliance endpoint
exports.postComplianceData = async (req, res) => {
    try {
        const newData = ComplianceGraphData;

        const result = await ComplianceDataModel.create(newData);

        res.json(result);
    } catch (error) {
        console.log('Error Posting data to MongoDB:', error);
        res.status(500).send('Internal Server Error');
    }
}

exports.getComplianceData = async (req, res) => {
    try {
        // Retrieve all documents from the MongoDB collection associated with the ComplianceDataModel
        const dataFromMongoDB = await ComplianceDataModel.find();

        // Send the retrieved data as the response
        res.json(dataFromMongoDB);
    } catch (error) {
        console.error('Error fetching data from MongoDB for /api/compliance:', error);
        res.status(500).send('Internal Server Error');
    }
}