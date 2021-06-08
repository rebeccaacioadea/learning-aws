


const {
  DynamoDBClient
} = require('@aws-sdk/client-dynamodb')

// let parms = { credentials: { secretAccessKey: 'o9jpo8OKqLkSwTmPX7gwNGyIGrt0bcNoyRWGrSpm',
//   accessKeyId: 'AKIA6I4X2TNMZ5MSPI3R' }, region: 'eu-west-2' }

let parms = process.env.awsCredentials

if (process.platform !== 'darwin') {
  parms = { }
}
const dbClient =  new DynamoDBClient(parms)

//this will show the platform the code running on
console.log(process.platform)


module.exports = dbClient
