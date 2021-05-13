import Knex from 'knex';

export async function up(knex: Knex) {
    //criar a tabela
  return  knex.schema.createTable('items', table => {
       table.increments('id').primary(); //gera um campo de registro
       table.string('image').notNullable();//arquivo da imagem
       table.string('title').notNullable();      
    })
}

export async function down(knex: Knex) {
    //volta a tras/ deleta a tabela(para possiveis erros)
    return knex.schema.dropTable('items');
} 