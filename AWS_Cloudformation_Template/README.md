# AWS_Cloudformation_Template

The folder contains a sample AWS Cloudformation template which shall set up various Amazon Web Services resources that are usually required when working on serverless applications.

## Description

This template described the following AWS resources:
* S3 Bucket
* DynamoDB Table
* Cognito User Pool
* Cognito Application Client
* Cognito Identity Pool
* IAM Roles
* Cognito Identity Pool role mapping
* Cognito User Pool Group
* SNS Topic
* Lambda Layers
* Lambda Functions
* API Gateway


The template describes basic properties and configurations for all the above enlisted resources. These properties and configurations have been collected from multiple sources and majorly from the AWS Cloudformation user guide (*https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide*).

Some resources like *Lambda Layers*,*Lambda Functions* and *API Gateway* requires S3 url for executables like code zips and swagger documentation. Please ensure the availability of these executables before tryng to use this template as it is.

The above template has been tested and verified. Follow this link: *https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/updating.stacks.walkthrough.html#update.application* for detailed information about using this template.


In case of any issues or further support, please reach out to me at: **pranavgaur@hotmail.com** 
