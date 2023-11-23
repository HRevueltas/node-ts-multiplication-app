import fs from 'fs'
import { yarg } from './config/plugins/args.plugins';

const { b:base, s:showTable, l:limit } = yarg;

const crearTabla = (): string => {

    let message = `
    ======================== 
          TABLA DEL ${base}      
    ========================\n`;

    
    for (let i = 1; i <= limit; i++) {
        message += ` ${base} x ${i} = ${base * i}\n`;
    }

    return message
}

const contenido: string = crearTabla()

if (showTable) {
    console.log(contenido);
}

const outputPath = 'outputs/';


fs.mkdirSync(outputPath, { recursive: true })
fs.writeFile(`${outputPath}tabla-${base}.txt`, contenido, (error) => {

    if (error) {
        console.error('Error al crear el archivo:', error);
    } else {
        console.log('El archivo se ha creado correctamente.');
    }
})





