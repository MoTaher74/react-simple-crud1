import { IProduct } from "../interfaces/interface";
import { textSlice } from "../utils/function";
import Images from "./Images";
import Btns from "./ui/Btns";
interface IProps{
product:IProduct

}

const ProductCard =({product}:IProps)=>{
return (
    < >

    <div className="border-4 max-w-sm md:max-w-lg mx-auto md:mx-0 rounded-md p-5 flex flex-col">
        <Images imageUrl={product.image} alt="productImages" className="rounded-md h-52 w-full lg:object-center-"/>
        <h3 className="text-lg font-semibold mt-2" >{textSlice(product.title,25)}</h3>
        <p className="text-sm text-gray-500 break-words">{textSlice(product.description)}</p>
        <div className="flex my-4 space-x-2">
            <span className="rounded-full w-5 h-5 bg-emerald-600 cursor-pointer"/>
            <span className="rounded-full w-5 h-5 bg-slate-800  cursor-pointer"/>
            <span className="rounded-full w-5 h-5 bg-orange-600 cursor-pointer"/>
            <span className="rounded-full w-5 h-5 bg-red-800 cursor-pointer"/>
        </div>
        <div className="flex justify-between items-center my-4 space-x-2  px-2">
            <span className="text-lg">Prices :{product.price}</span>
            <img className="w-12 h-12 rounded-full object-cover " src={product.image} alt="productImages" />
        </div>
        <div className="flex justify-between items-center my-4 space-x-2 px-2">
           <Btns className="bg-teal-700 hover:bg-teal-500  duration-300" width="w-full" onClick={()=>{console.log("Buy Btn")}}>EDIT</Btns>
           <Btns className="bg-orange-300 " width="w-fit">DELETE</Btns>

        </div>
    </div>
    </>

)
}

export default ProductCard ;