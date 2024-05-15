import React from "react";
function A3 ({handleLoginClick}) {
    const handleClick =() =>{
        handleLoginClick();
        
    }
    return(

        <div>
            <div>
                <button onClick={handleClick}  class="box63">Mostly Viewed</button>
            </div>
        </div>
    );
}
export default A3