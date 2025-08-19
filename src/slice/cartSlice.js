import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:"cart",
    initialState:{
        items:[],
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
        },
       removeCart:(state,action)=>{
         state.items = state.items.filter((p)=>p.id !==action.payload)
       }
    }
})


export const { addToCart,removeCart} = cartSlice.actions;
export default cartSlice.reducer;