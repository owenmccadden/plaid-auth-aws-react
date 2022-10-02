const AWS = require('aws-sdk')
var express = require('express')
var bodyParser = require('body-parser')
var awsServerlessExpressMiddleware = require('aws-serverless-express/middleware')
var plaid = require('plaid');

AWS.config.update({ region: process.env.TABLE_REGION });
const dynamodb = new AWS.DynamoDB.DocumentClient();

// declare a new express app
var app = express()
app.use(bodyParser.json())
app.use(awsServerlessExpressMiddleware.eventContext())

// Enable CORS for all methods
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
  next()
});

const client = new plaid.Client({
  clientID: '6339f1633632f2001202cf44',
  secret: '18e72ec35bf791270262f5de6c0bf1',
  env: plaid.environments.sandbox
});

// Accept the public_token sent from Link
app.post('/getaccesstoken', function(request, res, next) {
  const public_token = request.body.public_token;
  client.exchangePublicToken(public_token, function(error, res) {
    if (error != null) {
      return response.json({error: msg});
    } else {
      // Store the access_token and item_id in your database
    ACCESS_TOKEN = res.access_token;
    ITEM_ID = res.item_id;

    let putItemParams = {
      TableName: 'plaidlinkdb-dev',
      Item: {
        id: 'userid',
        accessToken: ACCESS_TOKEN
      }
    }

    dynamodb.put(putItemParams, (err, data) => {
      if(err) {
        res.statusCode = 500;
        res.json({error: 'oh no!', url: req.url, body: req.body});
      } else{
        res.json({success: 'post call succeed!', url: req.url, data: data})
      }
    });
   }
  });
});

app.listen(3000, function() {
    console.log("App started")
});

module.exports = app