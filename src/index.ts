import { Cart } from "./controller"
import { GetProducts } from "./controller"
import { carrinhoDeCompra } from "./data"
import { handleCartEntryTypes, handleCartResultTypes, IgetProducts } from "./types"

interface ICart {
  handleCart: () => Promise<handleCartResultTypes>
}

class HandleCart implements ICart {
  constructor (
    private readonly cart: handleCartEntryTypes,
    private readonly getProducts: IgetProducts
  ) {}

  handleCart = async (): Promise<handleCartResultTypes> => {
    const ids = this.cart.map(cartProduct => cartProduct.id)
    const produtos = await this.getProducts.get({ ids })
    const cartEntity = new Cart(produtos, this.cart)
    return cartEntity.createObject()
  }
}

const handle = async () => {
  const getProducts = new GetProducts()
  const cart = new HandleCart(carrinhoDeCompra, getProducts)

  console.log(await cart.handleCart())
}

handle()