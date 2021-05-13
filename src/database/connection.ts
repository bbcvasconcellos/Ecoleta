import knex from 'knex';
import path from 'path';

const connection = knex({
    client: 'sqlite3',
    connection: {
        filename: path.resolve(__dirname, 'database.sqlite'),//arquivo de armazenamento do banco de dados
    },
    useNullAsDefault: true
});

export default connection;

//conexao com o banco de dados
//migration = historico do banco de dados