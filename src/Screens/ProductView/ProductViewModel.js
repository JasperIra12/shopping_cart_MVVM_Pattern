import { useState } from "react"
import { GetProductsUseCase } from "../../Service/Products/GetAllCart";
import {useDispatch,useSelector} from 'react-redux'
import { saveCart, addQty,ReduceQty } from "../../Redux/Products/ProductSlice";
export default function ProductListViewModel() {
  
    const dispatch = useDispatch()
    const all_cart = useSelector(state => state.all_cart.productCart)
    async function getProducts() {

        const {result} = await GetProductsUseCase();
        console.log(result)
        
        // dispatch(getCurrentCart(result))

        dispatch(saveCart(result))
        
        
    }

    const updateStatsInc = (item) =>  {
        dispatch(addQty(item))
        // alert(JSON.stringify(item))
    }
    const updateReduceStatsInc = (item) =>  {
        dispatch(ReduceQty(item))
        // alert(JSON.stringify(item))
    }


    

    return {
        getProducts,
        all_cart,
        updateStatsInc,
        updateReduceStatsInc
    }
}