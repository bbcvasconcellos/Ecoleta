import Knex from 'knex';

export async function up(knex: Knex) {
    //criar a tabela
  return  knex.schema.createTable('point_items', table => {
       table.increments('id').primary(); //gera um campo de registro
       table.integer('point_id').notNullable().references('id').inTable('points');//puxa um id valido dentro da tabela points
       table.integer('item_id').notNullable().references('id').inTable('items');//puxa um id valido dentro da tabela items      
    })
}

export async function down(knex: Knex) {
    //volta a tras/ deleta a tabela(para possiveis erros)
    return knex.schema.dropTable('point_items');
}