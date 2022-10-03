# Plaid Auth Flow with AWS and React

This repo is to try a proof of concept of abstracting api calls to the Plaid api out to a serverless backend hosted on AWS. The react front-end simply has a couple of buttons for hitting the API endpoints and triggering the Plaid Auth Flow. I used this tutorial for reference: https://medium.com/@rdavidscott1/integrating-plaid-into-a-serverless-react-app-a8094c74425.

## Plaid Auth Flow

![image](https://user-images.githubusercontent.com/52963762/193481789-01b07823-fded-47e2-afcb-74c22213f950.png)

I was able to setup a serverless API on AWS with one functioning endpoint. The endpoint makes a request to create and return a plaid link_token to the client, which trigger's the plaid auth flow on the client side. Once the auth is complete, the request return the public_token.

From here, I would need to add another endpoint to make a call to exchange the public token for an access_token and an item_id. These values would be stored in a database, and would be used to make requests for the user's Item Object

I started to run into a couple of problems with the second endpoint to swap the public token for the access token / item_id. The reason for this is that the tutorial I was following is a little old and uses a deprecated version of the Plaid SDK. I'm going to try this again with the current version of Plaid.

## AWS Architecture

I used an AWS CLI tool called Amplify (essentially the AWS version of Firebase) with a serverless Lambda / API Gateway architecture. Essentially each API endpoint triggers a lambda function that implements the business logic for the API call. You can read more about it here: https://docs.aws.amazon.com/whitepapers/latest/serverless-multi-tier-architectures-api-gateway-lambda/serverless-multi-tier-architectures-api-gateway-lambda.pdf#welcome.
