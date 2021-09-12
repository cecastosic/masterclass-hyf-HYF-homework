#### Example asignment

command: `lambda list-functions`

doc: `https://docs.aws.amazon.com/cli/latest/reference/lambda/list-functions.html`

## Mandatory assignments

**Assignment 1:**

command: aws s3 ls

doc: https://docs.aws.amazon.com/cli/latest/reference/s3/ls.html

number of buckets: 11

**Assignment 2:**
filename: hello-hyf.txt

## Optional Assignments

**Assignment 3:**

command: aws s3 presign
aws s3 presign s3://hyf-products-bucket/hello-hyf.txt --expires-in 3600

url: https://docs.aws.amazon.com/cli/latest/reference/s3/presign.html

url to the file: https://hyf-products-bucket.s3.us-east-2.amazonaws.com/hello-hyf.txt?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA2F346X675XN7OAVQ%2F20210906%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Date=20210906T084404Z&X-Amz-Expires=3600&X-Amz-SignedHeaders=host&X-Amz-Signature=7e146eaff26c16712539dbd475e9d0ff791310571db2fac0703dcb0502815dcb

**Assignment 4:**

command aws s3 ls s3://hyf-products-bucket --human-readable --summarize

Total object: 7
