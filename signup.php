<?php

    header('Content-Type:text/plain; charset-utf-8');

    $id = $_POST['id'];
    $name = $_POST['name'];
    $pw = $_POST['pw'];
    $email1 = $_POST['email_1'];
    $email2 = $_POST['email_2'];
    $tel = $_POST['tel'];

    $email = $email1 . '@' . $email2;
    $now = date('Y-m-d H:i:s');

    $conn = mysqli_connect("localhost","cloudmu7777","dltkdrl1q2w3e!","cloudmu7777");
    mysqli_query($conn, "set names utf8");

    $sql="INSERT INTO wedteammember(id, name, pw, email, tel, day) VALUES('$id', '$name', '$pw', '$email', '$tel', '$now')";
    
    $result = mysqli_query($conn, $sql);

    if($result) echo "회원가입 완료";
    else echo "회원가입 실패";

    mysqli_close($conn);


?>