import { IProps } from "../interfaces/interface";

const Images =({imageUrl,alt,className}:IProps)=>{
return (
    <>
 <img 
 src={imageUrl} alt={alt} className={className}
 />
    </>

)
}

export default Images ;