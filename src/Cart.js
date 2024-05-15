import React from "react";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Badge from "@material-ui/core/Badge";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import './Cart.css';
function Cart() {
const [itemCount, setItemCount] = React.useState(1);

return (
	<div>
		<div class="carta">
	 <Badge color="secondary" badgeContent={itemCount}>
		<ShoppingCartIcon class="cartb" />{" "}
		</Badge>

		</div>
	<div>
		
		<ButtonGroup class="cartc">
		<Button
    
			onClick={() => {
			setItemCount(Math.max(itemCount - 1, 0));
			}}
		>
			{" "}
			<RemoveIcon fontSize="small"  />
		</Button>
		<Button
			onClick={() => {
			setItemCount(itemCount + 1);
			}}
		>
			{" "}
			<AddIcon fontSize="small" />
		</Button>
		</ButtonGroup>
	</div>
	</div>
);
}
export default Cart