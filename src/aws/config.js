//referencing sdk in js file
const AWS = require("aws-sdk");
//specifying aws region where dynamodb table will be created
AWS.config.update({ region: 'us-east-1' });

module.exports = AWS;