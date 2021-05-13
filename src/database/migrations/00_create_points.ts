import Knex from 'knex'; //usamos K maiusculo para se referir a classe knex

export async function up(knex: Knex) {
    //criar a tabela
  return  knex.schema.createTable('points', table => {
       table.increments('id').primary(); //gera um campo de registro
       table.string('image').notNullable();//arquivo da imagem
       table.string('name').notNullable(); 
       table.string('email').notNullable();
       table.string('whatsapp').notNullable();
       table.decimal('latitude').notNullable();
       table.decimal('longitude').notNullable();
       table.string('city').notNullable();
       table.string('uf', 2).notNullable();
    })
}

export async function down(knex: Knex) {
    //volta a tras/ deleta a tabela(para possiveis erros)
    return knex.schema.dropTable('point');
}