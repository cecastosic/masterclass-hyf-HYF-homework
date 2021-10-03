const AWS = require("aws-sdk");
const s3 = new AWS.S3();
require('dotenv').config();
const fetch = (...args) =>
  import("node-fetch").then(({ default: fetch }) => fetch(...args));

exports.s3PriceAnalyzer = async (event) => {
  const getObjectRequests = event.Records.map((record) => {
    const params = {
      Bucket: record.s3.bucket.name,
      Key: record.s3.object.key,
    };

    return s3
      .getObject(params)
      .promise()
      .then((data) => {
        // implement code here
        const items = data.Body.toString().split("\n");
        const selectedItems = items
          .map((item) => {
            return {
              category: item.split(",")[0],
              price: Number(item.split(",")[2]),
            };
          })
          .filter((item) => item.price < 10 && item.category === "fruits");
        const prices = selectedItems.map((item) => item.price);

        console.log(JSON.stringify(selectedItems));
        console.log({
          maximumPrice: Math.max(...prices),
          minimumPrice: Math.max(...prices),
        });

        return selectedItems;
      })
      .catch((err) => {
        console.error("Error calling S3 getObject:", err);
        return Promise.reject(err);
      });
  });

  return Promise.all(getObjectRequests).then(async () => {
    console.debug("Complete!");
  });
};

const fetchFunction = async () => {
  const data = {
    text: "Homework week 4",
    blocks: [
      {
        type: "header",
        text: {
          type: "plain_text",
          text: "Svetlana",
        },
      },
      {
        type: "section",
        text: {
          type: "plain_text",
          text: "File: inventory-price-analyzer.js",
        },
      },
      {
        type: "section",
        text: { type: "mrkdwn", text: `Number of selected items: ${2}` },
      },
      {
        type: "section",
        text: {
          type: "mrkdwn",
          text: "Maxiumum price: 2$",
        },
      },
      {
        type: "section",
        text: { type: "mrkdwn", text: "Minimum price: 2$" },
      },
    ],
  };

  await fetch(
    process.env.SLACK_URL,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    }
  )
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch((err) => console.log(err));
};

fetchFunction();
