import bodyParser from 'body-parser';
import config from './config';
import cors from 'cors';
import express from 'express';
import mongoose from 'mongoose';
import morgan from 'morgan';
import routes from './REST/routes';
import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';


const app = express();
app.use(express.static(__dirname + '/public'));

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json({limit: '2048kb'}));

app.use(express.static('public'));

app.use(cors());

// Swagger options
const swaggerOptions = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Smartphone Shop API',
            version: '1.0.0',
            description: 'API dla sklepu z telefonami',
        },
    },
    apis: ['app/REST/*.js'], // Ścieżki do plików zawierających definicje tras
};

const swaggerSpec = swaggerJSDoc(swaggerOptions);

// Dodaj endpoint do uzyskania specyfikacji Swagger
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

mongoose.connect(config.databaseUrl, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
}, (error) => {
    if (error) {
        console.error(error);
    }
    else {
        console.info('Connect with database established');
    }
});

process.on('SIGINT', () => {
    mongoose.connection.close(function () {
        console.error('Mongoose default connection disconnected through app termination');
        process.exit(0);
    });
});


routes(app);

app.get('/*', function (req, res) {
  res.sendFile(__dirname + '/public/index.html');
});

app.listen(config.port, function () {
  console.info(`Server is running at ${config.port}`)
});
