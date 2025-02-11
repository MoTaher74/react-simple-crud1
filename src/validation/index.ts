
/**
 * Validate the product object
 * @param {Object} product - The product object which contains {title,description,image,price}
 * @returns {Object} - An object with the keys {title,description,image,price} which contains the validation errors, if any
 * @example
 * const product = {
 *   title: '',
 *   description: '',
 *   image: '',
 *   price: ''
 * }
 * const errors = productValidate(product);
 * console.log(errors);
 * // {title: ' Title must be between 10 and 80 characters', description: 'Descriptions must be between 100 and 700 characters', image: 'Enter a valid image URL', price: 'Enter a valid price'}
 */
export function productValidate(product:{title:string; description:string;image:string;price:string}){

const errors:{title:string; description:string;image:string;price:string}={
title:'',
description:'',
image:'',
price:''
}

// use regular expressions for validate the imageUrl
const validUrl = /^(ftp|http|https|www.):\/\/[^ "]+$/.test(product.image);

if(!product.title.trim() || product.title.length<10 || product.title.length>80){
    errors.title=" Title must be between 10 and 80 characters";
}
if(!product.description.trim() || product.description.length<100 || product.description.length>700){
    errors.description="Descriptions must be between 100 and 700 characters";
}
if(!product.image.trim() || validUrl){
    errors.image="Enter a valid image URL";
}
if(!product.price.trim() || isNaN(Number(product.price))){
    errors.price="Enter a valid price";
}



    return errors;
}