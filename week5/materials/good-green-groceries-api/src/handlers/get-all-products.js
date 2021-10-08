const dynamodb = require("aws-sdk/clients/dynamodb");
const docClient = new dynamodb.DocumentClient();

exports.getAllProductsHandler = async (event) => {
  // All log statements are written to CloudWatch
  console.info("received:", event);

  var params = {
    TableName: "GoodGreenGroceriesProducts",
  };
  const data = await docClient.scan(params).promise();
  const items = data.Items;

  const response = {
    statusCode: 200,
    headers: {
      "Access-Control-Allow-Headers":
        "Content-Type,X-Amz-Date,Authorization,X-Api-Key,x-requested-with",
      "Access-Control-Allow-Origin": "*", // Allow from anywhere
      "Access-Control-Allow-Methods": "OPTIONS,POST,GET,PUT,DELETE,PATCH", 
    },
    body: JSON.stringify(items),
  };

  // All log statements are written to CloudWatch
  console.info(
    `response from: ${event.path} statusCode: ${response.statusCode} body: ${response.body}`
  );
  return response;
};
