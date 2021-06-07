const aws = require('aws-sdk')


const { unmarshall } = require('@aws-sdk/util-dynamodb')

const {
  DynamoDBClient,
  GetItemCommand,
  ScanCommand,
  PutItemCommand,
  UpdateItemCommand
} = require('@aws-sdk/client-dynamodb')

const dbClient = require('./dbClient')


const TABLE_NAME = 'Employees'




exports.handler = async function (event) {


    // ? async functions returns promises. The code below would need to have await keyword before the async function <<< await getAllEmployees() >>>, 
    // ? this pause the code until the promise is fulfilled, otherwise it will return an empty object.
    
    const employees = await getAllEmployees()
    
    // console.log(employees)
    
    // TODO implement
    const response = {
        statusCode: 200,
        body: JSON.stringify(employees)
    }
    return response
}

async function getAllEmployees() {
  
  let result = await dbClient.send(new ScanCommand({TableName: TABLE_NAME }))
  let response = []
  result.Items.forEach(function(element, index, array){
    response.push(unmarshall(element))
  })
  return response
}

exports.handler({}).then(console.log)

// console.log(exports.handler({}))

