import React from "react";
import rectangulo from '../img/Rectangle 42.svg';
import productShoes from '../img/Zapa 1.svg';
import porcentaje from '../img/Vector.svg';

const Image = () => {
    return (
        <div>
             <div className="position-absolute" style={{top: "-10%", right:"5%"}} > 
                <img className="pb-3" src={porcentaje}/>
                
                </div>
            <div className="position-absolute"> 
                <img className="" src={rectangulo}/>
                </div>
            <div className="position-relative">
                <img src={productShoes} className='' alt="..." />
            </div>       
        </div>
    )
}


export default Image;