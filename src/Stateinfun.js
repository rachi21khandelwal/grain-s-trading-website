import React, { useState } from 'react';

function StateinFun() {
  const [age, setage] = useState(17);
const[name,setname] = useState('gyanav');
const[subject,setsub]=useState('PCM');
const[num1,setnum1]=useState(0);
const[num2,setnum2]=useState(0);
const[num3,setnum3]=useState(0);
const[total,settotal]=useState(0);
const[avg,setavg]=useState(0);
const[per,setper]=useState(0);
  const Chage=()=>{
    setage(18);
  };
  const Changeage=(e)=>{
        setage(e.target.value);
  };

  const chname=()=>
  {
    setname('rachi');
  };
  const changename=(e)=>{
setname(e.target.value);
  };
  const chsub=(e)=>{
setsub(e.target.value);
  };
  const chnum1=(e)=>{
    setnum1(e.target.value);
  }
  const chnum2=(e)=>{
    setnum2(e.target.value);
  }
  const chnum3=(e)=>{
    setnum3(e.target.value);
  }
 const chtotal=()=>{
 
   
    settotal(parseFloat(num1)+parseFloat(num2)+parseFloat(num3));

  }
  const chavg=()=>{
    setavg(parseFloat(total)/3);
  }
  const pp=()=>{
    setper(parseFloat(total)*100/150);
  }
  return (
      <div>
    

    <button onClick={Chage}> Default Age</button>
<br />
   Age: <input type="text" onChange={Changeage} /><br/>
    
   
    <button onClick={chname}>default Name</button> <br/>
     Name: <input type="text" onChange={changename} /><br/>
    Subjects:<input type="text" onChange={chsub} /> <br/>
    <div class="design">
    <p>name:{name}</p>
    <p> Age : {age}</p>
    <p>Subject:{subject}</p>
P:<input type="text" onChange={chnum1} />
<p>p:{num1}</p>
C:<input type="text" onChange={chnum2} />
<p>C:{num2}</p>
M:<input type="text" onChange={chnum3} /> 
<p>M:{num3}</p>
<button onClick={chtotal}> ADD</button>
<br/>
<button onClick={chavg}>averg</button><br/>
<button onClick={pp}>Percent</button><br/>
Total:{total}<br/>
Avg:{avg}<br/>
Percent:{per}%
    </div>
    </div>
  );
}

export default StateinFun;