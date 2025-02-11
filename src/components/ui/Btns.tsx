import { ReactNode } from "react";

interface IProps extends React.ButtonHTMLAttributes<HTMLButtonElement>{
children:ReactNode,
className?:string,
width:"w-full" | "w-fit"


}

const Btns =({children,className,width="w-full",...rest}:IProps)=>{
return (
    <>
<button className={`${className} p-2 text-white rounded-lg ${width}`} {...rest}>{children}</button>
    </>

)
}

export default Btns ;
