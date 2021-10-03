// For part II:
const { CloudWatchClient } = require("@aws-sdk/client-cloudwatch");
//const { GetMetricDataCommand } = require("@aws-sdk/client-cloudwatch");
const { ListMetricsCommand } = require("@aws-sdk/client-cloudwatch");

exports.scheduledEventLoggerHandler = async () => {
  // For part I
  // let saneString = "Hello, HYF!";
  // let weirdString = [...saneString]
  //   .map((char) => {
  //     return nextChar(char);
  //   })
  //   .join("");

  //return saneString;

  // For part II:
  const cloudwatchClient = new CloudWatchClient({ region: "us-east-1" });

  // let startDate = new Date();
  // startDate.setMonth(startDate.getMonth() - 3);

  // const params = {
  //   StartTime: startDate,
  //   EndTime: new Date(),
  //   MetricDataQueries: [
  //     {
  //       Id: "counts",
  //       MetricStat: {
  //         Metric: {
  //           Dimensions: [
  //             {
  //               Name: "ApiName",
  //               Value: "good-green-groceries-api",
  //             },
  //           ],
  //           MetricName: "Count",
  //           Namespace: "AWS/ApiGateway",
  //         },
  //         Period: 300,
  //         Stat: "Sum",
  //       },
  //     },
  //   ],
  // };
  // const results = await cloudwatchClient.send(
  //   new GetMetricDataCommand(params)
  // );

  // For the assignment 4 part II
  const params = {
    Dimensions: [
      {
        Name: "ApiName" /* required */,
      },
    ],
    Namespace: "AWS/ApiGateway",
  };

  try {
    const data = await cloudwatchClient.send(new ListMetricsCommand(params));
    const metricNames = data.Metrics.map((metric) => metric.MetricName);
    const result = {
      command: "API_ANALYZER",
      values: metricNames,
      date: new Date().toLocaleDateString(),
    };
    console.log("Success. Analyzer:", JSON.stringify(result));
    return result;
  } catch (err) {
    console.log("Error", err);
  }
};

// function nextChar(c) {
//   return String.fromCharCode(c.charCodeAt(0) + 1);
// }
