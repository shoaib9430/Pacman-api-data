const express = require('express');
const cors = require('cors');
const app = express();
const path = require('path');
const mongoose = require('./MongoDb');
const {
    postDropDownData,
    postInnerHeaderData,
    getDropDownData,
    getInnerHeaderData,
} = require('./Shema/ShemaForDropdownAndInnerHeader');
const { postCostData, getCostData } = require('./Shema/ShemaForCost');
const { postInventoryData, getInventoryData } = require('./Shema/ShemaForInventory');
const { postMonitoringData, getMonitoringData } = require('./Shema/ShemaForMonitoring');
const { postUtilizationData, getUtilizationData } = require('./Shema/ShemaForUtilization');
const { postStorageData, getStorageData } = require('./Shema/ShemaForStorage');
const { postComplianceData, getComplianceData } = require('./Shema/ShemaForCompliance');
const { postDynamicElementData, getDynamicElementData } = require('./Shema/ShemaForDynamicElementData');
const port = 4000;

// Serve static files from the public folder
app.use(express.static(path.join(__dirname, 'public')));

app.use(cors());
app.use(express.json());




// Define a route to serve the DropDownData
app.get('/api/dropdown', getDropDownData);

app.get('/api/innerheaderdata', getInnerHeaderData);

app.get('/api/cost', getCostData);

app.get('/api/inventory', getInventoryData);

app.get('/api/monitoring', getMonitoringData);

app.get('/api/utilization', getUtilizationData);

app.get('/api/storage', getStorageData);

app.get('/api/compliance', getComplianceData);

app.get('/api/dynamicelement', getDynamicElementData);

// Use the postDropDownData function for handling POST requests to /api/dropdown
app.post('/api/dropdown', postDropDownData);

// Use the postDropDownData function for handling POST requests to /api/dropdown
app.post('/api/innerheaderdata', postInnerHeaderData);

app.post('/api/cost', postCostData);

app.post('/api/inventory', postInventoryData);

app.post('/api/monitoring', postMonitoringData);

app.post('/api/utilization', postUtilizationData);

app.post('/api/storage', postStorageData);

app.post('/api/compliance', postComplianceData);

app.post('/api/dynamicelement', postDynamicElementData);

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
