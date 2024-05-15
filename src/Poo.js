import React from 'react';
import { useNavigate } from 'react-router-dom';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

 function Poo() {
 const nav=useNavigate();
 function handle(){
    nav("/check");
 }
    
	return (
		<div>
			<h4>Popup - GeeksforGeeks</h4>
			<Popup trigger=
				{<button> Click to open modal </button>}
				modal nested>
				{
					<form onSubmit={handle}>
						<div >
							<div >
								Welcome to GFG!!!
							</div>
							<div>
								<button >
										Close modal
								</button>
							</div>
                            
						</div>
					</form>
				}
			</Popup>
		</div>
	)
};

export default Poo