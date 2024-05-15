import React, { useState } from "react";

function Picture() {
	const [file, setFile] = useState();
	function handleChange(e) {
		console.log(e.target.files);
		setFile(URL.createObjectURL(e.target.files[0]));
	}
    function remove(){
        handleChange();
    }
  
	return (
		<div className="App">
			<h2>Add Image:</h2>
			<input type="file" onChange={handleChange} />
        
<button onClick={remove}>done</button>
<br/>
<img src={file}/>
		</div>

	);
}

export default Picture;
