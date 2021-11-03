<?php

    header('Content-Type:text/html; charset=utf-8');

    $title = $_POST['title'];
    $msg = $_POST['msg'];
    
    $file = $_FILES['file'];
    $srcName = $file['name'];
    $fileSize = $file['size'];
    $fileType = $file['type'];
    $tmpName = $file['tmp_name'];


    $dstName = "./uploaded/" . date('YmdHis') . $srcName;
    move_uploaded_file($tmpName, $dstName);

    $title = addslashes($title);
    $msg = addslashes($msg);
  

    $conn = mysqli_connect("localhost", "mky1428", "tmvhxkfl1!", "mky1428");
    mysqli_query($conn, "set names utf8");

    $sql = "INSERT INTO TeamProject(title, msg, file) VALUES('$title', '$msg', '$dstName')";
    $result = mysqli_query($conn, $sql);

    if ($result){
        echo "<script>
                alert('게시글 등록에 성공했습니다')
		        location.href = 'http://mky1428.dothome.co.kr/TeamProject/WebpageTeam/edit_board.html'
	         </script>";
    }else{
        echo ("게시글 등록 실패");
    }
    mysqli_close($conn);

    


?>