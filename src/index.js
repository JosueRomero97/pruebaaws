
//referencing sdk in js file
const AWS = require("aws-sdk");
//specifying aws region where dynamodb table will be created
AWS.config.update({ region: 'us-east-1' });
// import aws from './aws/config'
//instantiate dynamodb class
const dynamodb = new aws.DynamoDB();
//listing tables
dynamodb.listTables({}, (err, data)=>{
    if(err) {
        console.log(err);
    } else {
        console.log(data);
    }
});