<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" /> 
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no, maximum-scale=1.0, user-scalable=no">
    <meta name="theme-color" content="#000000" />
    <!--
      manifest.json provides metadata used when your web app is installed on a
      user's mobile device or desktop. See https://developers.google.com/web/fundamentals/web-app-manifest/
    --> 
    <!--
      Notice the use of %PUBLIC_URL% in the tags above.
      It will be replaced with the URL of the `public` folder during the build.
      Only files inside the `public` folder can be referenced from the HTML.

      Unlike "/favicon.ico" or "favicon.ico", "%PUBLIC_URL%/favicon.ico" will
      work correctly both with client-side routing and a non-root public URL.
      Learn how to configure a non-root public URL by running `npm run build`.
    -->
    <title>React App</title>
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
    $sql = "select * from CNY2019 order by userScore desc limit 10;"; //获取top 10
    // insert data 
    //$sql = "INSERT INTO `sq_WLTSH2`.`CNY2019` (`Name`, `Score`) VALUES ('Rainbow', '25');";
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
        //echo $str; 
        echo "<script>var data='$str'</script>";
    }
    
    mysql_close($mysql_conn);
    ?>
    <script> 
        var obj = JSON.parse(data);
        // console.log(obj);
        var list = '<ul>'
        obj.forEach(function(item){
             console.log(item.userName , item.userScore); 
            list += '<li><span>' + item.userName + '</span> <span>' + item.userScore + '</span></li>';
        }); 
        list += '</ul>'; 
        document.write(list);
    </script>
  </head>
  <body>
    <noscript>You need to enable JavaScript to run this app.</noscript> 
    <div id="root"></div>
    
    <!--
      This HTML file is a template.
      If you open it directly in the browser, you will see an empty page.

      You can add webfonts, meta tags, or analytics to this file.
      The build step will place the bundled scripts into the <body> tag.

      To begin the development, run `npm start` or `yarn start`.
      To create a production bundle, use `npm run build` or `yarn build`.
    -->
  </body>
</html>
