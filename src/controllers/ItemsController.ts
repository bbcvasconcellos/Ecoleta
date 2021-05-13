import  {Request, Response} from 'express';
import knex from '../database/connection';// os dois .. diz que estamos saindo do atual folder e buscando em outro


class ItemsController {
//metodo index permite listagem
async index(request: Request, response: Response) {
    const items = await knex('items').select('*');
    const serializedItems = items.map(item => {
        return {
            id: item.id,
            title: item.title,
            image_url: `http://localhost:3333/uploads/${item.image}`
        };
    })

    return response.json(serializedItems);
 }
}

export default ItemsController;