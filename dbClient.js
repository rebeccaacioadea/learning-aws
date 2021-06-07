
const {
  DynamoDBClient
} = require('@aws-sdk/client-dynamodb')

let parms = { credentials: { secretAccessKey: 'EqAqx1EqGq7gEb6UilypI3D6DEycjxkfyt88Yaof',
  accessKeyId: 'AKIA6I4X2TNMVIZAP6U4' }, region: 'eu-west-2' }

if (process.platform !== 'darwin') {
  parms = { }
}
const dbClient =  new DynamoDBClient(parms)

//this will show the platform the code running on
console.log(process.platform)


module.exports = dbClient
