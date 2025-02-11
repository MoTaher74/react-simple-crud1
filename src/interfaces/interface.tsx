export interface IProduct{
    id:number | string,
    title:string,
    price:string,
    description:string,
    category:string,
    image:string,
    color:string[],
    rating?:{rate:number,count:number}
}

export interface IProps{
    imageUrl:string,
    alt:string,
    className?:string
    
    }


export interface IFormInput{
    id:string ;
    name:'title'|'description'|'image'|'price';
    label:string;
    type:string
}