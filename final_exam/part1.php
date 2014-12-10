<!doctype html>
<html>
<head>
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Part 1 -Registration Form</title>
<link rel="stylesheet" href="http://code.jquery.com/mobile/1.4.5/jquery.mobile-1.4.5.min.css">
<script src="http://code.jquery.com/jquery-1.11.1.min.js"></script>
<script src="http://code.jquery.com/mobile/1.4.5/jquery.mobile-1.4.5.min.js"></script>
</head>
<body>
<div data-role="header" data-theme="b">
	<h1>Registration Form</h1>
</div>

<div data-role="content" data-theme="b">
<form method="post" action="part1Submit.php" data-ajax="false" >
  <div data-role="fieldcontain">
    <label for="fname">First name:</label>
    <input type="text" name="fname" id="fname" placeholder="First Name..." pattern="^[A-Za-z]{1,25}$" required>
  </div>
  <div data-role="fieldcontain">
    <label for="lname">Last name:</label>
    <input type="text" name="lname" id="lname" placeholder="Last Name..." pattern="^[A-Za-z]{1,25}$" required>
  </div>
  <div data-role="fieldcontain">
      <fieldset data-role="controlgroup" data-type="horizontal">
        <legend>Date of Birth:</legend>
        <label for="select-choice-month">Month</label>
        <select name="select-choice-month" id="select-choice-month" data-native-menu="false" >
                <option value="jan">January</option>
                <option value="feb">February</option>
                <option value="mar">March</option>
                <option value="apr">April</option>
                <option value="may">May</option>
                <option value="jun">June</option>
                <option value="jul">July</option>
                <option value="aug">August</option>
                <option value="sep">September</option>
                <option value="oct">October</option>
                <option value="nov">Nomvember</option>
                <option value="dec">December</option>
        </select>
    
        <label for="select-choice-day">Day</label>
        <select name="select-choice-day" id="select-choice-day" data-native-menu="false">
                <?php
				for($i=1;$i<=31;$i++)
				{
					echo "<option value=\"".$i."\">".$i."</option>";
				}
				?>
        </select>
    
        <label for="select-choice-year">Year</label>
        <select name="select-choice-year" id="select-choice-year" data-native-menu="false">
                <?php
				for($i=2014;$i>=1912;$i--)
				{
					echo "<option value=\"".$i."\">".$i."</option>";
				}
				?>
        </select>
  </div>
  <div data-role="fieldcontain">
    <label for="phone">Phone:</label>
    <input type="text" name="phone" id="phone" placeholder="416-000-0000" pattern="[0-9]{3}(-)[0-9]{3}(-)[0-9]{4}" required>
  </div>
  <div data-role="fieldcontain">
  	<input type="submit" name="submit" value="Register" data-icon="check">
  </div>
</form>
</div>

<div data-role="footer" data-theme="b">
	<h3>Copyright &copy; ABC Inc.</h3>
</div>

</body>
</html>