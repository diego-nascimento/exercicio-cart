import { cartItemTypes, handleCartEntryTypes, handleCartResultTypes, produtosTypes } from "../types"


export class Cart {
  private readonly reduceInitialValues: handleCartResultTypes = {
    disponiveis: [],
    indisponiveis: [],
    total: 0
  }

  constructor (private readonly produtos: produtosTypes[], private readonly cart: handleCartEntryTypes,) {}

  createObject () {
    return this.cart.reduce<handleCartResultTypes>(
       (resultObject: handleCartResultTypes, cartProduct: cartItemTypes): handleCartResultTypes => {
        const productWithInfo = this.produtos.find((product) =>  product.id === cartProduct.id)
        if (productWithInfo) return this.handleUpdateAvailableProductList(cartProduct, resultObject, productWithInfo)
        return this.handleUpdateUnnavailableProductsList(cartProduct, resultObject)
      }, this.reduceInitialValues as handleCartResultTypes
    )
  }

  private handleUpdateAvailableProductList = (
    cartProduct: cartItemTypes,
    resultObject: handleCartResultTypes,
    productWithInfo: produtosTypes
  ) =>
    ({
      ...resultObject,
      disponiveis: [
        ...resultObject.disponiveis,
        {
          id: cartProduct.id,
          quantidade: cartProduct.quantidade,
          nome: productWithInfo.nome,
          total: productWithInfo.preco * cartProduct.quantidade
        }
      ],
      total: this.calculateTotal(resultObject.total, productWithInfo.preco, cartProduct.quantidade)
    })


  private calculateTotal = (total: number, preco: number, quantidade: number) => {
    return total + (preco * quantidade)
  }

  private handleUpdateUnnavailableProductsList = (
    cartProduct: cartItemTypes,
    resultObject: handleCartResultTypes
  ) => ({
    ...resultObject,
    indisponiveis: [
      ...resultObject.indisponiveis,
      {
        id: cartProduct.id,
        quantidade: cartProduct.quantidade
      }
    ]
  })
}