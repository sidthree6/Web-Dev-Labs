<?php
#
# Siddharth Panchal (100455462)
#
# Lab 10: Displays an invoice, generated dynamically using data stored in arrays.
#
?>
<!DOCTYPE html>
<html>
  <head>
    <title>CSCI 3210 – Lab 10</title>
  </head>
  <body>
	<?php
    $taxRate = 0.12;
	$subtotal = 0;
	$shipping = 0;
	$tax = 0;
	$total = 0;
	$item = array("Nut - 1/8\"","Bolt - 1/8\"","Bracket - 48\"","Door - 36\" wide");	
	$quantity = array(32,32,4,2);
	$priceperitem = array(1.35,1.85,6.75,75.00);	
    ?>
    <table border="1" width="600px">
    	<tr>
        	<th>Item</th>
            <th>Quantity</th>
            <th>Price per Item</th>
            <th>Item Total</th>
        </tr>
        <?php
		
		for($i=0;$i<count($item);$i++)
		{
			echo "<tr>\n";
			echo "<td>{$item[$i]}</td>\n<td>{$quantity[$i]}</td>\n<td>$".$priceperitem[$i]."</td>\n<td>$".round($quantity[$i]*$priceperitem[$i],2)."</td>\n";
			echo "</tr>\n";
			
			$subtotal += $quantity[$i]*$priceperitem[$i];
		}
		
		if($subtotal >= 50)
			$shipping = 0.00;
		else if($subtotal >=25 && $subtotal < 50)
			$shipping = 4.99;
		else
			$shipping = 9.99;
		
		$tax = $subtotal*$taxRate;
		$total = $tax + $subtotal;			
		echo "<tr><th colspan=\"3\">Shipping</th><th>$".$shipping."</th></tr>";
		echo "<tr><th colspan=\"3\">Subtotal</th><th>$".$subtotal."</th></tr>";
		echo "<tr><th colspan=\"3\">Tax</th><th>$".round($tax,2)."</th></tr>";
		echo "<tr><th colspan=\"3\">Toal</th><th>$".round($total,2)."</th></tr>";
		
		?>
    </table>
  </body>
</html>
