


const {
  DynamoDBClient
} = require('@aws-sdk/client-dynamodb')

let parms = PARMS

if (process.platform !== 'darwin') {
  parms = { }
}
const dbClient =  new DynamoDBClient(parms)

//this will show the platform the code running on
console.log(process.platform)


module.exports = dbClient
