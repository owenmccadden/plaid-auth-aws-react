export type AmplifyDependentResourcesAttributes = {
    "function": {
        "linktokenfunction": {
            "Name": "string",
            "Arn": "string",
            "Region": "string",
            "LambdaExecutionRole": "string"
        },
        "onsuccessfunction": {
            "Name": "string",
            "Arn": "string",
            "Region": "string",
            "LambdaExecutionRole": "string"
        }
    },
    "api": {
        "linktokenapi": {
            "RootUrl": "string",
            "ApiName": "string",
            "ApiId": "string"
        },
        "onsuccessapi": {
            "RootUrl": "string",
            "ApiName": "string",
            "ApiId": "string"
        }
    },
    "storage": {
        "tutorialdb": {
            "Name": "string",
            "Arn": "string",
            "StreamArn": "string",
            "PartitionKeyName": "string",
            "PartitionKeyType": "string",
            "Region": "string"
        }
    }
}