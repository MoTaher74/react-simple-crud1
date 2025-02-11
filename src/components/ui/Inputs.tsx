import { InputHTMLAttributes } from "react";

interface IProps extends InputHTMLAttributes<HTMLInputElement>{

}




const Inputs =({...rest}:IProps)=>{
return (
    <>
<input className="p-2 rounded-lg outline-none border-2 text-lg my-5 focus:border-dotted focus:border-black shadow-md" {...rest}/>
    </>

)
}

export default Inputs ;