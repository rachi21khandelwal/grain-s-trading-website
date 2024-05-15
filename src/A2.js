import React from "react";
function A2 ({handleLoginClick}) {
    const handleClick =() =>{
        handleLoginClick();
    }
    return(

        <div>
            <div>
                <button onClick={handleClick}  class="box64">Popular</button>
            </div>
        </div>
    );
}
export default A2