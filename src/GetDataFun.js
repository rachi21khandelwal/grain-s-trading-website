
import React, { useState, useEffect  } from 'react';

function GetDataFun(){
    
    const[isLoading,setIsloading]=useState(false);
    const [hits, setHits] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        setIsloading(true);

      fetch('http://localhost:4000/api/data/')
        .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Something went wrong ...');
        }
      })
      //  .then(data => this.setState({ name: data.name }));
        .then(data => {setHits(data);setIsloading( false); });
    }
    );

    return(
        <div>

          <ul>
            {hits.map(hit =>
              <li key={hit.id}>
               {hit.id} / {hit.fname} / {hit.mnane}
              </li>
            )}
          </ul>  
        </div>
    );
}
export default GetDataFun;