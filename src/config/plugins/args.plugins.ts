
import yargs from 'yargs'
import { hideBin } from 'yargs/helpers'

import chalk from './stylingTerminal.plugins'

export const yarg = yargs(hideBin(process.argv))
    .option('b', {
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe: 'Multiplication table base'
    })
    .option('l', {
        alias: 'limit',
        type: 'number',
        default: 10,
        describe: 'Multiplication table limit'
    })
    .option('s', {
        alias: 'show',
        type: 'boolean',
        default: false,
        describe: 'Show Multiplication table',
        conflicts: ' '
    })
    .option('n', {
        alias: 'name',
        type: 'string',
        default: "multiplication-table",
        describe: 'File name',
        
    })
    .option('d', {
        alias: 'destination',
        type: 'string',
        default: './outputs',
        describe: 'File destination',
        conflicts: ' '
    })
    .check((argv, options) => {

        if (isNaN(argv.b)) {
            throw chalk.bgRed('Error: base must be a number');
        }
        else if (argv.b < 1) {

            throw chalk.red('Error: base must be greater than 0')
        }

        return true;
    })
    .parseSync()