
const aws = require('./aws/config.js');
const dynamodb = new aws.DynamoDB();
//listing tables
dynamodb.listTables({}, (err, data)=>{
    if(err) {
        console.log(err);
    } else {
        console.log(data);
        console.log('prueba')
    }
});


const params = {
    TableName: 'Usuarios'
};

dynamodb.scan(params, (err, data) => {
    if (err) {
        console.error("Error al escanear la tabla:", err);
    } else {
        console.log("Datos de la tabla:", data.Items);
    }
});

