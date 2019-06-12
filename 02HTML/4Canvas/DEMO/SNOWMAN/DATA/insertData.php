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
    $userName = $_GET['userName'];
    $userScore = $_GET['userScore'];

    if(is_numeric($userScore)){ 
        $userName = str_replace("<","",$userName);
        $userName = str_replace(">","",$userName);
        $userName = str_replace("SELECT","",$userName);
        $userName = str_replace("UPDATE","",$userName);
        $userName = str_replace("DELETE","",$userName);
        $userName = str_replace("DROP","",$userName);
        $userName = str_replace("ALTER","",$userName);
        $userName = str_replace("select","",$userName);
        $userName = str_replace("update","",$userName);
        $userName = str_replace("delete","",$userName);
        $userName = str_replace("drop","",$userName);
        $userName = str_replace("alter","",$userName);  
        // echo $userName;
        // echo $userScore;

        //insert data start
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
        // insert data 
        // $sql = "INSERT INTO `sq_WLTSH2`.`CNY2019` (`userName`, `userScore`) VALUES ('".$userName."', '".$userScore."');"; 
        // 参数化 sql参数
        $sql = sprintf("INSERT INTO `sq_WLTSH2`.`CNY2019` (`userName`, `userScore`) VALUES ('%s', '%s');", 
                  mysql_real_escape_string($userName), 
                  mysql_real_escape_string($userScore)); 
        // echo $sql;
        $res = mysql_query($sql);
        if (!$res) {
            die("could get the res:\n" . mysql_error());
        }else {
            // echo $res;
            echo "Data has inserted successfully!";
        }
        
        //echo $str;  
        mysql_close($mysql_conn);
        // $sql = "INSERT INTO users (username, password, email) VALUES ('".$_POST["username"]."','".$_POST["password"]."','".$_POST["email"]."')";
        //insert data end
    }else{
        echo "The userScore should be numeric!";
    }
    
?>
 

   
<?php
    if(isset($_POST['submit'])){ 
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
        // insert data 
        $sql = "INSERT INTO `sq_WLTSH2`.`CNY2019` (`userName`, `userScore`) VALUES ('".$_POST['userName']."', '".$_POST['userScore']."');";
        
        $res = mysql_query($sql);
        if (!$res) {
            die("could get the res:\n" . mysql_error());
        }else {
            echo $res;
            echo "inserted successfully!";
        }
        
        //echo $str;  
        mysql_close($mysql_conn);
        // $sql = "INSERT INTO users (username, password, email) VALUES ('".$_POST["username"]."','".$_POST["password"]."','".$_POST["email"]."')";
    }

    ?>
<!-- your other html -->

<?php if($saveSuccess !== null): ?>
   <p class="flash_message"><?php echo $saveMessage ?></p>
<?php endif; ?>


  </head>
  <body>
    <!-- <noscript>You need to enable JavaScript to run this app.</noscript> 
    <div id="root"></div>
    <form method="post">
    <fieldset>
        <legend>Add New Contact</legend>
        <input type="text" name="userName" placeholder="First name and last name" required /> <br /> 
        <input type="text" name="userScore" placeholder="Personal phone number: mobile, home phone etc." required /> <br />
        <input type="submit" name="submit" class="button" value="Add Contact" onClick="" /> 
    </fieldset> 
    </form>
    -->

<!-- the rest of your HTML -->
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
