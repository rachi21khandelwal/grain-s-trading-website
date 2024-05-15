import React from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

export default function PopupGfg() {
	return (
		<div>
			<h4>Popup - GeeksforGeeks</h4>
		
<Popup trigger={
  <button>Clck it</button>
} position="right center">
  <div>itss mee</div>
</Popup>
</div>
)

};