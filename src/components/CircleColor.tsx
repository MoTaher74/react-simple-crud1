import { HTMLAttributes } from "react";

interface IProps extends HTMLAttributes<HTMLSpanElement>{
color:string,


}

const CircleColor =({color,...rest}:IProps)=>{
return (
    <>
  <span{...rest} className={"block rounded-full w-5 h-5 cursor-pointer"} style={{backgroundColor:color}}/>
    </>

)
}

export default CircleColor ;