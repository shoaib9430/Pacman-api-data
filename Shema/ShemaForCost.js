const mongoose = require('../MongoDb');
const dataForCost = require('../Data/CostGraphData');


// Define a Mongoose model for Cost Data
const CostDataModel = mongoose.model('Cost', {
    id: Number,
    createdAt: String,
    'ACTUAL COST': Number,
    'PROJECTED COST': Number,
    'ACTUAL RUN RATE': Number
});

// Define a route to handle only POST request for the /api/cost endpoint
exports.postCostData = async (req, res) => {
    try {
        const newData = dataForCost;

        const result = await ConstDataModel.create(newData);

        res.json(result);
    } catch (error) {
        console.log('Error Posting data to MongoDB:', error);
        res.status(500).send('Internal Server Error');
    }
}

exports.getCostData = async (req, res) => {
    try {
        // Retrieve all documents from the MongoDB collection associated with the CostDataModel
        const dataFromMongoDB = await CostDataModel.find();

        // Send the retrieved data as the response
        res.json(dataFromMongoDB);
    } catch (error) {
        console.error('Error fetching data from MongoDB for /api/cost:', error);
        res.status(500).send('Internal Server Error');
    }
}