// For part II:
import { CloudWatchClient } from "@aws-sdk/client-cloudwatch";
import { GetMetricDataCommand } from "@aws-sdk/client-cloudwatch";
import { ListMetricsCommand } from "@aws-sdk/client-cloudwatch";
import { cwClient } from "../libs/cloudWatchClient.js";

exports.scheduledEventLoggerHandler = async () => {
    // For part I
    let saneString = "Hello, HYF!";
    let weirdString = [...saneString]
      .map((char) => {
        return nextChar(char);
      })
      .join("");
  
    //return saneString;
  
    // For part II:
      const cloudwatchClient = new CloudWatchClient({ region: "us-east-1" });
  
      let startDate = new Date();
      startDate.setMonth(startDate.getMonth() - 3);
  
      const params = {
        StartTime: startDate,
        EndTime: new Date(),
        MetricDataQueries: [
          {
            Id: "counts",
            MetricStat: {
              Metric: {
                Dimensions: [
                  {
                    Name: "ApiName",
                    Value: "good-green-groceries-api",
                  },
                ],
                MetricName: "Count",
                Namespace: "ApiGateway",
              },
              Period: 300,
              Stat: "Sum",
            },
          },
        ],
      };
  
      const results = await cloudwatchClient.send(
        new GetMetricDataCommand(params)
      );
      return results;
  };
  
  function nextChar(c) {
    return String.fromCharCode(c.charCodeAt(0) + 1);
  }
  
  