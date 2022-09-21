import { getProducts } from "../../Data/ProductService";

export async function GetProductsUseCase() {
    return (getProducts())
}