const aws = require('aws-sdk')

const { unmarshall } = require('@aws-sdk/util-dynamodb')

const {
  DynamoDBClient,
  GetItemCommand,
  ScanCommand,
  PutItemCommand,
  UpdateItemCommand
} = require('@aws-sdk/client-dynamodb')

const dbClient =  new DynamoDBClient({ credentials: { secretAccessKey: 'bTwnJ8rtEnGx/ta7WNmZ0ryq56sDYWshZijS6Tdw',
  accessKeyId: 'AKIA6I4X2TNMUJUKV7HO' }, region: 'eu-west-2' })
const TABLE_NAME = 'Employees'

/*
async function getEmployee(Id) {
  const result = await dbClient.send(new GetItemCommand({ TableName: TABLE_NAME, Key: { Id: { N: '3' } } }))

  const response = aws.DynamoDB.Converter.unmarshall(result.Item)
  console.log(response)
  return response
}
getEmployee()

async function getAllEmployees() {
  
  let result = await dbClient.send(new ScanCommand({TableName: TABLE_NAME }))
  let response = []
  result.Items.forEach(function(element, index, array){
    response.push(unmarshall(element))
  })
  console.log(response)
  return response
}
getAllEmployees()

*/

async function postNewEmployee(Id, firstName, lastName, age, pet) {
 
  let employee = {
    lastName: { S: 'Kommel' },
    firstName: { S: 'Isabella' },
    Id: { N: '6' },
    age: { N: '11' },
    pet: { BOOL: 'True' }
  }
  let result = await dbClient.send(new PutItemCommand({ TableName: TABLE_NAME, Item: employee }))
  
  return employee.Id 
}
postNewEmployee()


/*
async function updateEmployee(Id, age) {

  const employee = await dbClient.send(new GetItemCommand({ TableName: TABLE_NAME, Key: { Id: { N: '3' } } }))
  console.log(employee)
  
  let employee1 = {
    Id: { N: Id },
    // firstName: { S: 'Joyce ' },
    age: { N: '30' }
  }

  let result = await dbClient.send(new UpdateItemCommand({ TableName: TABLE_NAME, Item: employee1 }))

  
  console.log(result)

  return result.Id
}
updateEmployee()

*/

