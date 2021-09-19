## Mandatory assignments

**Assignment 4:**

Sync your changes to s3 and write down your s3 bucket url.

bucket url: `https://s3.console.aws.amazon.com/s3/buckets/svetlana-week2?region=us-east-1&tab=objects`

url: `http://svetlana-week2.s3-website-us-east-1.amazonaws.com/`

**Assignment 5:**

Right now, the website does not support https. Explain which other AWS service needs to be integrated in order to achieve this.

service name with explanation: `Amazon CloudFront is a web service that speeds up distribution of your static and dynamic web content, such as .html, .css, .js, and image files, to your users. CloudFront delivers your content through a worldwide network of data centers called edge locations. When a user requests content that you're serving with CloudFront, the request is routed to the edge location that provides the lowest latency (time delay), so that content is delivered with the best possible performance. You can configure CloudFront to require that viewers use HTTPS so that connections are encrypted when CloudFront communicates with viewers. You also can configure CloudFront to use HTTPS with your origin so that connections are encrypted when CloudFront communicates with your origin. CloudFront assigns a default domain name to your distribution, for example, d111111abcdef8.cloudfront.net. If you use this domain name, then you can use the CloudFront default SSL/TLS certificate already selected for your distribution. If you use a different domain name for your distribution, then it's a best practice to do one of the following to avoid domain-name-related certificate warnings: request a public certificate from AWS Certificate Manager or import certificates into AWS Certificate Manager. AWS Certificate Manager is a service that lets you easily provision, manage, and deploy public and private SSL/TLS certificates for use with AWS services and your internal connected resources. With AWS Certificate Manager, you can quickly request a certificate, deploy it on ACM-integrated AWS resources, such as Elastic Load Balancers, Amazon CloudFront distributions, and APIs on API Gateway, and let AWS Certificate Manager handle certificate renewals. `

url: `https://aws.amazon.com/premiumsupport/knowledge-center/install-ssl-cloudfront/`

**Assignment 6:**

Figure out and write down the price per month of storing 51TB on S3.

Price: `1.172$`

Total size of your website: `492.9 KB`

**Assignment 7:**

Write down the main cost factors for S3

brief description: `1. The region where you store your data, 2. The volume of data you store, 3. The level of redundancy, 4. The storage class, 5. Data requests, 6. Data transfers, 7. Data retrievals (Glacier only)`

url: `https://www.cloudhealthtech.com/blog/amazon-cloud-storage-s3-pricing`

**Assignment 8:**

The file `week2/assignments/products.json` needs to be uploaded Inside the bucket `hyf-serverless-course-week-2`. Upload the file through the CLI and write down the command needed.

command: `aws s3 cp products.json s3://hyf-serverless-course-week-2/products.json`

docs: `https://docs.aws.amazon.com/cli/latest/reference/s3/cp.html`

**Assignment 9:**
Write down a brief use case on when S3 could be used for a data engineering assignment:

use case: `As a data lake, centralized, secure, and durable cloud-based storage platform that allows to ingest and store structured and unstructured data, and transform these raw data assets as needed. It can be used as a complete portfolio of data exploration, reporting, analytics, machine learning, and visualization tools on the data. A data lake makes data and the optimal analytics tools available to more users, across more lines of business. This enables them to get all of the business insights they need, whenever they need them.`

url: `https://docs.aws.amazon.com/whitepapers/latest/building-data-lakes/amazon-s3-data-lake-storage-platform.html`

## Optional assignments:

**Assignment 10:**

What can be done to reduce the pricing for S3 when hosting a large number of files?

brief description: `Using Amazon S3 Storage Lens, an analytics feature built-in to the S3 console to help you gain organization-wide visibility into your object storage usage and activity trends, and to identify cost savings opportunities. Steps that can be followed: 1. Identify large buckets that you aren’t aware of, 2. Find and eliminate incomplete multipart upload bytes, 3. Increase use of S3 storage classes, 4. Reduce the number of noncurrent versions retained and 5. Uncover buckets that have gone cold.`

url: `https://aws.amazon.com/blogs/storage/5-ways-to-reduce-costs-using-amazon-s3-storage-lens/`

**Assignment 11:**

There are many security features built into S3. Find your favourite feature, documentation for it, and explain briefly why.

brief description of favourite security feature: `Access Amazon S3 directly as a private endpoint within your secure, virtual network with AWS PrivateLink for S3. Simplify your network architecture by connecting to S3 from on-premises or in the cloud using private IP addresses from your Virtual Private Cloud (VPC). You no longer need to use public IPs, configure firewall rules, or configure an internet gateway to access S3 from on-premises.`

url: `https://aws.amazon.com/s3/security/`
