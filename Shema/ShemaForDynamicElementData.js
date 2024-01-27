const mongoose = require('../MongoDb');
const DynamicElementGraphData = require('../Data/DynamicElementData');



// Define a Mongoose model for DynamicElement Data
const DynamicElementDataModel = mongoose.model('DynamicElement', {
    id: Number,
    name: String,
    icon: String,
    bottomContaint: {
        value: Number,
        startUnit: String,
        endUnit: String,
        rightTop: String,
        rightDown: String,
    },
    bottomExtra: {
        value: Number,
        anothervalue: String,
    },
    thirdBox: [{
        value: Number,
        startUnit: String,
        unit: String,
        sign: String,
        percentSign: String,
        purpose: String,
    }],
    complianceL1Bottom: [{
        id: Number,
        value: Number,
        percentSign: String,
        purpose: String,
    }],
});

// Define a route to handle only POST request for the /api/dynamicelement endpoint
exports.postDynamicElementData = async (req, res) => {
    try {
        const newData = DynamicElementGraphData;

        const result = await DynamicElementDataModel.create(newData);

        res.json(result);
    } catch (error) {
        console.log('Error Posting data to MongoDB:', error);
        res.status(500).send('Internal Server Error');
    }
}

exports.getDynamicElementData = async (req, res) => {
    try {
        // Retrieve all documents from the MongoDB collection associated with the DynamicElementDataModel
        const dataFromMongoDB = await DynamicElementDataModel.find();

        // Send the retrieved data as the response
        res.json(dataFromMongoDB);
    } catch (error) {
        console.error('Error fetching data from MongoDB for /api/compliance:', error);
        res.status(500).send('Internal Server Error');
    }
}