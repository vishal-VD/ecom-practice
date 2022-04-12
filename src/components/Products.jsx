import React, { useState, useEffect } from "react";
import Skeleton from "react-loading-skeleton";

function Products() {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(false);

  let componentMounted = true;

  useEffect(() => {
    const getproduct = async () => {
      setLoading(true);
      const response = await fetch("https://fakestoreapi.com/products");
      if (componentMounted) {
        setData(await response.clone().json());
        setFilter(await response.json());
        setLoading(false);
        console.log(filter);
      }
      return () => {
        componentMounted(false);
      };
    };
    getproduct();
  }, []);
  const Loading = () => {
    return( <>
        <div className="col-md-3">
        <Skeleton height={350}/>
        </div>
        <div className="col-md-3">
        <Skeleton height={350}/>
        </div>
        <div className="col-md-3">
        <Skeleton height={350}/>
        </div>
        <div className="col-md-3">
        <Skeleton height={350}/>
        </div>
    </>
    );
  };

  const filterProduct = (cat) => {
const updatedList = data.filter((x) =>x.category===cat);
setFilter(updatedList)
  }
  const ShowProduct = () => {
    return (
        <>

      <div className="buttons d-flex justify-content-center mb-5 pb-5" >
        <button className="btn btn-outline-dark me-2" onClick={()=>setFilter(data)} >All</button>
        <button className="btn btn-outline-dark me-2" onClick={()=>filterProduct("men's clothing")} >men's Clothing</button>
        <button className="btn btn-outline-dark me-2" onClick={()=>filterProduct("women's clothing")}>women's Clothing</button>
        <button className="btn btn-outline-dark me-2" onClick={()=>filterProduct("electronics")}>Electronics</button>
        <button className="btn btn-outline-dark me-2" onClick={()=>filterProduct("jewelery")}>jwellary</button>
      </div>
      {filter.map((product) => {
        return (
            
          <div className="col-md-3  mb-4">
            <div class="card card h-100 text-center p-4">
              <img
                src={product.image} height="250px"
                class="card-img-top"
                alt={product.title}
              />
              <div class="card-body">
                <h5 class="card-title mb-0 ">
                  {product.title.substring(0, 12)}...
                </h5>
                <p class="card-text">${product.price}</p>
                <a href="/" class="btn btn-outline-dark">
                  Buy now
                </a>
              </div>
            </div>
          </div>
        );
      })}
        </>
    );
  };

  return (
    <>
      <div className="container my-5 py-5">
        <div className="row">
          <div className="col-12 mb-5">
            <h1 className="display-6 fw-bolder text-center">LATEST PRODUCT</h1>
            <hr />
          </div>
        </div>
        <div className="row justify-content-center">
          {loading ? <Loading /> : <ShowProduct />}
        </div>
      </div>
      
    </>
  );
}

export default Products;
