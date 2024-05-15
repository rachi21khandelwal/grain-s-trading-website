import React, { useState } from "react";
import './Sell.css';
import {FaUpload} from "react-icons/fa";
function Upload() {
	const [file, setFile] = useState();
	const[set,status]=useState();
	function handleChange(e) {
		console.log(e.target.files);
		setFile(URL.createObjectURL(e.target.files[0]));
		status("Uploaded Successfully ");
	}
  
  
	return (
       

		<div >
<label for="file">       <FaUpload class="uu"/>     </label>  
<input type="file" name="file" id="file" class="inputfile"  onChange={handleChange}/> 

  <p class="uu2">  {set}</p>

        
			
		
</div>
	);
}

export default Upload;
