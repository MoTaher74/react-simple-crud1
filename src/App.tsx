
import ProductCard from "./components/ProductCard"
import Btns from "./components/ui/Btns";
import Inputs from "./components/ui/Inputs";
import Modal from "./components/ui/Modal";
import { formInputsList, products } from "./Data";
import { ChangeEvent, FormEvent, useState } from "react";
import { IProduct } from "./interfaces/interface";
import { productValidate } from "./validation";
import ErrorMsg from "./components/ErrorMsg";
const App =()=> {

    const [isOpen, setIsOpen] = useState(false)
  
/**
 * Opens the modal by setting the isOpen state to true.
 */

    function open() {
      setIsOpen(true)
    }
  

  /**
   * Closes the modal by setting the isOpen state to false.
   */
    function close() {
      setIsOpen(false)
    }
  


  // ** Renders
  const renderProductList =()=>{
    return products.map(product=><ProductCard key={product.id} product={product}/>)
  }

  // ** Hook State
  const defaultValue ={
    title:"",
    description:"",
    image:"",
    price:"",
    category:"",
    color:[],
    id:"",
  }; 
  const [product,setProduct] =useState<IProduct>(defaultValue)

  const [error,setError]=useState({title:"", description:"",image:"",price:""});
  console.log(error)
  /**
   * Handles the change event on input elements. Updates the state with the corresponding value of the input element.
   * @param e - The change event object.
   */
  const onChangeHandler = (e:ChangeEvent<HTMLInputElement>)=> {
    const {value,name}=e.target;
    setProduct({...product,[name]:value});
    
    setError({
      ...error,
      [name]:"",
    })
    
  }



  const renderFormInputsList = formInputsList.map(inputs => <div className=" flex flex-col " key={inputs.id}>
    <label className="text-lg" htmlFor={inputs.id}>{inputs.label}</label>
    <Inputs type="text" id={inputs.id} name={inputs.name} value={product[inputs.name]} onChange={onChangeHandler}/>
    <ErrorMsg msg={error[inputs.name]}/>
  </div>)
  

  /**
   * Handles the submit event of the form. Prevents the default form submission, and logs the current product state to the console.
   * @param e - The form submission event object.
   */
function onSubmitHandler(e:FormEvent<HTMLFormElement>):void{
e.preventDefault();
// console.log(product);
const errors=productValidate({
  title:product.title,
  description:product.description,
  image:product.image,
  price:product.price
});
// console.log(errors);
// ** check if any property has a value of "" && check if all properties have a value of ""
const errorMsg1=Object.values(errors).some(value=>value===""); 
const errorMsg2=Object.values(errors).every(value=>value==="");
const errorMsg = errorMsg1 && !errorMsg2;

if(!errorMsg){
  setError(errors);
  return;
}
console.log("Send Data success")

}
/**
 * Resets the product state to its default values and closes the modal.
 */


function closeBtnForm(){
 setProduct(defaultValue);
close();

}

return (
  <>
      <main className="container">
        <Btns className="bg-teal-700 hover:bg-teal-500  duration-300" width="w-full" onClick={open}>Add More</Btns>
    <div className=" m-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 p-4 rounded-md" >
 {renderProductList()}
 </div>
 <Modal isOpen={isOpen} close={close} title="Add a New Product">
  <form className="space-y-3" onSubmit={onSubmitHandler}>
  {renderFormInputsList}
  <div className="flex space-x-2">
<Btns className="bg-teal-700 hover:bg-teal-500  duration-300" width="w-full">Submit</Btns>
<Btns className="bg-gray-300 hover:bg-gray-400 text-black  duration-300" width="w-fit" onClick={closeBtnForm}>Cancel</Btns>
</div>
  </form>
  </Modal>
    </main>


  </>


)

}
export default App ;

