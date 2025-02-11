import { InputHTMLAttributes } from "react";

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface IProps extends InputHTMLAttributes<HTMLInputElement>{}




const Inputs =({...rest}:IProps)=>{
return (
    <>
<input className="p-2 rounded-lg outline-none border-2  text-lg focus:border-dotted focus:border-black shadow-md" {...rest}/>
    </>

)
}

export default Inputs ;