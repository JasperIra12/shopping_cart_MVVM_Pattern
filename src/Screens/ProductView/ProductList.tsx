import { StyleSheet, Text, View, TouchableOpacity} from 'react-native'
import React,{useEffect} from 'react'
import productModel from './ProductViewModel'
import CustomButton from '../../Components/common/Button/CustomButton'
import CartItem from '../../Components/common/Parent_component/CartItem'
type ProductTypes = {
  id?:number,
  prodName:string,
  qty:number
}

const ProductList = () => {
    const {getProducts, all_cart,updateStatsInc, updateReduceStatsInc} = productModel()
    console.log(all_cart)
    useEffect(() => {
        getProducts()
    }, [])
    
  return (
    <View style={{
        flex:1,
        padding:20,
        marginTop:30
    }}>
      <CartItem
      data = {all_cart}
      addQty ={updateReduceStatsInc}
      removeQty={updateStatsInc}
      />
        {/* {all_cart.map((item:ProductTypes,i:number) => {
            return (
              <View key={i} style={styles.list}>
                    <View key={i}>
                        <Text >Name: {item.prodName}</Text>
                        <Text >Quantity: {item.qty}</Text>
                    </View>
                    <View style={styles.itemqty}>
                    <CustomButton label={'-'} item={item} action={() => updateReduceStatsInc(item.id)}/>
                    <Text>{item.qty}</Text>
                    <CustomButton label={'+'} item={item} action={() => updateStatsInc(item.id)}/>
                </View>
              </View>
            )
        })} */}
      
    </View>
  )
}

export default ProductList

const styles = StyleSheet.create({})