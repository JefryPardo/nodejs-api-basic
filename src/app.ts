import "dotenv/config";
import express from "express";
import cors from 'cors';
import config from 'config';

const _origin: string = config.get('cors.origin');
const _ambiente: string = config.get('ambiente');
const _puerto: number = config.get('server.port');


const app = express();

app.use(cors({
    origin: [_origin]
}));


app.listen(_puerto, () =>{

    console.log('\x1b[33m%s\x1b[0m', '--------------------------------------------------------------------------------------------');
    console.log('Servidor listo');
    console.log('\x1b[33m%s\x1b[0m', '-------------------------------------------------------------------------------------------- \n');
    
    console.log('\x1b[33m%s\x1b[0m', '--------------------------------------------------------------------------------------------');
    console.log(`Ambiente: ${_ambiente}`);
    console.log('\x1b[33m%s\x1b[0m', '-------------------------------------------------------------------------------------------- \n');

    console.log('Hola mundo');
});

