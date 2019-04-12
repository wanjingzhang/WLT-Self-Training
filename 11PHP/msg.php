<?php


$fh = fopen('./msg.txt', 'r');
$i = 1;
while(($row = fgetcsv($fh)) != false){
  echo "<li><a href='reading.php?tid=" , $i , "'>" , $row[0],"</a></li>";
  $i++;
}

?>
