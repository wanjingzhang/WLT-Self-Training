<?php
    $mysql_conf = array(
         
        );
    $mysql_conn = @mysql_connect($mysql_conf['host'], $mysql_conf['db_user'], $mysql_conf['db_pwd']);
    if (!$mysql_conn) {
        die("could not connect to the database:\n" . mysql_error());//诊断连接错误
    }
    mysql_query("set names 'utf8'");//编码转化
    $select_db = mysql_select_db($mysql_conf['db']);
    if (!$select_db) {
        die("could not connect to the db:\n" .  mysql_error());
    }
    $sql = "select userName,userScore from CNY2019 order by userScore desc limit 10;"; //获取top 10 
    $res = mysql_query($sql);
    if (!$res) {
        die("could get the res:\n" . mysql_error());
    }else {  
        $str = "["; 
        while ($row = mysql_fetch_assoc($res)) {
            // print_r($row);
            $str .= json_encode($row);
            $str .= ',';
        } 
        $str =  substr_replace($str,"",-1);
        $str .= ']'; 

        if (strlen($str) == 1){
            $str = '[]';
        }
        echo $str; 
        //echo "<script>var data='$str'</script>";
    }
    
    mysql_close($mysql_conn);
    ?>