import { createSlice } from "@reduxjs/toolkit";

const initialCart = JSON.parse(localStorage.getItem('cart')) || []

const cartSlice = createSlice({
    name:"cart",
    initialState:{
        items:initialCart
    },

    reducers:{
        addToCart: (state,action)=>{
            const item = action.payload
            const existingProduct = state.items.find((p)=>p.id===item.id)

            if(existingProduct){
                existingProduct.quantity+=1
            }else{
              state.items.push({...item,quantity:1})
            }
            localStorage.setItem('cart',JSON.stringify(state.items))
        },
        minusQuantity:(state,action)=>{
           const item = action.payload
            const quantityDecrese = state.items.find((inc)=>inc.id === item.id)
            if(quantityDecrese){
              quantityDecrese.quantity-=1
              localStorage.setItem('cart',JSON.stringify(state.items))
            }
        },
        
       removeCart:(state,action)=>{
         state.items = state.items.filter((p)=>p.id !==action.payload)
         localStorage.setItem('cart',JSON.stringify(state.items))
       },
       clearCart : (state)=>{
         state.items=[]
         localStorage.removeItem('cart')
       }
    }
})


export const { addToCart,removeCart,clearCart,minusQuantity} = cartSlice.actions;
export default cartSlice.reducer;