//configuracoes que o banco de dados nao possui
//usamos module export pq o knex nao utiliza a nova sintaxe

import path from 'path';

module.exports = {
    client: 'sqlite3',
    connection: {
        filename: path.resolve(__dirname, 'src', 'database', 'database.sqlite'),//arquivo de armazenamento do banco de dados e diretorios que utilizaremos
    },
    migrations: {
        directory: path.resolve(__dirname, 'src', 'database','migrations')
    },
    seeds: {
        directory: path.resolve(__dirname, 'src', 'database', 'seeds')
    },
    useNullAsDefault: true
}