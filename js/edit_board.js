function checkImage(){
    var files = document.getElementById('ex_file').files;
    var fr = new FileReader();
    fr.onload = ()=>{document.getElementById('selectImage').src = fr.result;}
    fr.readAsDataURL(files[0]);
}