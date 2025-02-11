export interface IProduct{
    id:number,
    title:string,
    price:number,
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
    name:string;
    label:string;
    type:string
}