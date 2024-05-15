
import React,{useState} from 'react';

function RazorPay() {
  const [amount, setamount] = useState('');

  const handleSubmit = (e)=>{
    e.preventDefault();
    if(amount === ""){
    alert("please enter amount");
    }else{
      var options = {
        key: "rzp_test_Hoh5TM4UBdVhmy",
        key_secret:"atxUgZFN4nPojFolP2DAZSSg",
        amount: amount *100,
        currency:"INR",
        name:"Grains Trading Website",
        description:"for testing purpose",
        handler: function(response){
          alert(response.razorpay_payment_id);
        },
        prefill: {
          name:"User",
          email:"user@gmail.com",
          contact:"7904425033"
        },
        notes:{
          address:"Razorpay Corporate office"
        },
        theme: {
          color:"#3399cc"
        }
      };
      var pay = new window.Razorpay(options);
      pay.open();
    }
  }
  return (
    <div className="App">
     <h2>Razorpay Payment Integration Using React</h2>
     <br/>
     <input type="text"placeholder='Enter Amount'value={amount}onChange={(e)=>setamount(e.target.value)} />
     <br/><br/>
     <button onClick={handleSubmit}>submit</button>
    </div>
  );
}

export default RazorPay;
