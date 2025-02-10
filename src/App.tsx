
import ProductCard from "./components/ProductCard"
import { products } from "./Data";
const App =()=> {

  // ** Renders
  const renderProductList =()=>{
    return products.map(product=><ProductCard key={product.id} product={product}/>)
  }
return (
    <main className="container">
    <div className=" m-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 p-4 rounded-md">
 {renderProductList()}
 </div>

    </main>

)

}
export default App ;

