export type produtosTypes = {
  id: number
  nome: string,
  preco: number
}


export type getProductsTypes = {
  ids: number[]
}

export interface IgetProducts{
  get(data:getProductsTypes): Promise<produtosTypes[]>
}