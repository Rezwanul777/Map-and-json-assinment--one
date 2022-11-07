import {productList} from "./product.js";

productList.map((item,i)=>{
    let productName=`My product name is ${item.name}`
    console.log(productName)
})