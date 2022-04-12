import React from "react";
import Products from "./Products";

function Home() {
  return (
    <>
      <div class="card bg-dark text-white">
        <img
          src='/images/background.jpg'
          class="card-img "
          alt="background"
          height="550px"
        />
        <div class="card-img-overlay d-flex flex-column justify-content-center">
          <div className="container">
            <h5 class="card-title display-3 fw-bolder mb-3">
              NEW SEASON ARRIVAL
            </h5>
            <p class="card-text lead fs-2">CHECK OUT ALL TREANDS</p>
          </div>
        </div>
      </div>
      <Products/>
    </>
  );
}

export default Home;
