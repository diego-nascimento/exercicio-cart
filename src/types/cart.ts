export type cartItemTypes = {
  id: number
  quantidade: number
}

export type handleCartEntryTypes = cartItemTypes[]


export type cartAvailableItensTypes = {
  id: number,
  nome: string,
  total: number,
  quantidade: number
}

export type cartUnnavailableItensTypes = {
  id: number,
  quantidade: number
}

export type handleCartResultTypes = {
  disponiveis: cartAvailableItensTypes[],
  indisponiveis:cartUnnavailableItensTypes[]
  total: number
}