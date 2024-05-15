import React, { useState } from 'react';
import './FeedbackForm.css'; // Import CSS file for styling
import Flipex from './Flipex';
import { Flip } from '@material-ui/icons';
import Flip2 from './Flip2';
import Upload from './Upload';
import Footer from './Footer';

const FeedbackForm = () => {
  // Define states for form fields
  const [id,setId]=useState(' ');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [feedback, setFeedback] = useState('');

  // const [checked, setChecked] = useState(false);

  // const handleCheckboxChange = () => {
  //   setChecked(!checked);
  // };

  const [isChecked1, setIsChecked1] = useState(false);
  const [isChecked2, setIsChecked2] = useState(false);
  const [textAreaValue1, setTextAreaValue1] = useState('');
  const [textAreaValue2, setTextAreaValue2] = useState('');

  const handleCheckboxChange1 = () => {
    setIsChecked1(!isChecked1);
  };

  const handleCheckboxChange2 = () => {
    setIsChecked2(!isChecked2);
  };

  // const handleTextAreaChange1 = (event) => {
  //   setTextAreaValue1(event.target.value);
  // };

  // const handleTextAreaChange2 = (event) => {
  //   setTextAreaValue2(event.target.value);
  // };

  // Function to handle form submission
  const handleSubmit=()=> { // Once the form has been submitted, this function will post to the backend
    const postURL = "http://localhost:4000/feedback" //Our previously set up route in the backend
    fetch(postURL, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ // We should keep the fields consistent for managing this data later
           
           
          id:id,
            name: name,
            email:email,
            
            textAreaValue1:textAreaValue1,
            textAreaValue2:textAreaValue2,
            feedback:feedback,
        })
    })
    .then(()=>{
        // Once posted, the user will be notified 
        alert('Feedback is recorded!');
    })
}


  return (
    <>
    <Flipex/>
    <br/><br/>
    <div className="feedback-form-container">

      <h2 class="logoh23">Feedback Form</h2>
      <img class="imglogo23" src="mainlogo.jpeg"/>
      <form >
      <div className="form-group">
          <label id="labelfeed">ID:</label>
          <input
            type="text"
            value={id}
            onChange={(e) => setId(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label id="labelfeed">Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label id="labelfeed">Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
{/*        
    <div className="checkbox-container">
      <label className="checkbox-label">
        <input
          type="checkbox"
          checked={checked}
          onChange={handleCheckboxChange}
        />
        <span className="checkbox-custom"></span>
        Checkbox Label
      </label>
    </div> */}
    {/* <div className="checkbox-container">
      <label className="checkbox-label">
        <input
          type="checkbox"
          checked={checked}
          onChange={handleCheckboxChange}
        />
        <span className="checkbox-custom"></span>
        Checkbox Label
      </label>
    </div> */}

<div id="container">
      <div>
        <input
          type="checkbox"
          checked={isChecked1}
          onChange={handleCheckboxChange1}
        />
        <label>Complain</label>
        <textarea id="textarea"
          value={textAreaValue1}
          onChange={(e)=>setTextAreaValue1(e.target.value)}
          disabled={!isChecked1}
        />
        
      
      </div>
      <div>
        <input
          type="checkbox"
          checked={isChecked2}
          onChange={handleCheckboxChange2}
        />
        <label>Review:</label>
        <textarea id="textarea"
          value={textAreaValue2}
          onChange={(e)=>setTextAreaValue2(e.target.value)}
          disabled={!isChecked2}
        />
      </div>
    </div>
        <div className="form-group">
          <label id="labelfeed">Feedback:</label>
          <textarea
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            required
          />
            <div class="a">
  <h5 id="addimg23">Add image</h5>
   <br/> <Upload/>
</div>
        </div>
        <button  onClick={handleSubmit} id="buttonfeed" type="submit">Submit</button>
      </form>
    </div>
    <Footer/>
    </>
  );
};

export default FeedbackForm;
