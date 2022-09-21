import { getAllInCart } from "./ProductSource";

export const getProducts= async() => {
    const { result } = await getAllInCart()
    return { result }
}