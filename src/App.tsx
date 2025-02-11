
import ProductCard from "./components/ProductCard"
import Btns from "./components/ui/Btns";
import Inputs from "./components/ui/Inputs";
import Modal from "./components/ui/Modal";
import { formInputsList, products } from "./Data";
import { useState } from "react";
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

  const renderFormInputsList = formInputsList.map(inputs => <div className=" flex flex-col " key={inputs.id}>
    <label className="text-lg" htmlFor={inputs.id}>{inputs.label}</label>
    <Inputs type="text" id={inputs.id} name={inputs.name}/>
  </div>)
    
  
return (
  <>
      <main className="container">
        <Btns className="bg-teal-700 hover:bg-teal-500  duration-300" width="w-full" onClick={open}>Add More</Btns>
    <div className=" m-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 p-4 rounded-md">
 {renderProductList()}
 </div>
 <Modal isOpen={isOpen} close={close} title="Add a New Product">
  {renderFormInputsList}
  <div className="flex space-x-2">
<Btns className="bg-teal-700 hover:bg-teal-500  duration-300" width="w-full">Submit</Btns>
<Btns className="bg-gray-300 hover:bg-gray-400 text-black  duration-300" width="w-fit" onClick={close}>Cancel</Btns>
</div>


  </Modal>
    </main>


  </>


)

}
export default App ;

