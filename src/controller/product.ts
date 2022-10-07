import { produtos } from "../data";
import { getProductsTypes, IgetProducts, produtosTypes } from "../types";

export class GetProducts implements IgetProducts {
  async get (data: getProductsTypes): Promise<produtosTypes[]> {
    return produtos.filter(product => data.ids.find(id => id === product.id))
  }
}