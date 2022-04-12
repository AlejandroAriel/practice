import React from "react";
import Image from "./img";

const Card = () => {
    return (



        <div className="card w-25 mt-5">
           
            <div className="card-body">
                
                <Image />
                <h6>50% descuento en tienda</h6>
                <h2 className="card-title">Sandalia Mujer CrossGirl</h2>
                <p className="card-text">V A N S</p>
               
            
            </div>

            <div className="row justify-content-center align-items-center">
                <strong className="col-4">$31.495</strong>
                <button type="button" class="btn btn-secondary col-4" disabled>Button</button>

            </div>
            <h2 className="list-group-item ">www.dafiti.cl</h2>

            <div className="card-body">
                <p>Valido hasta 03-12-2023 / 00:00</p>
            </div>
        </div>


    )
}

export default Card;