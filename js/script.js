let count = 1;
document.getElementById("radio1").checked = true;

setInterval(function(){
    nextImage();
}, 5000)

function nextImage(){
    count++;
    if(count>4){
        count=1;
    }

    document.getElementById("radio" + count).checked = true;

}

function mostrarSenha(){
    var inputPass = document.getElementById('senha');
    var btnShowPass = document.getElementById('btn-senha');

    if(inputPass.type === 'password'){
        inputPass.setAttribute('type','text');
        btnShowPass.classList.replace('bi-eye-fill','bi-eye-slash-fill');
    }else{
        inputPass.setAttribute('type','password');
        btnShowPass.classList.replace('bi-eye-slash-fill','bi-eye-fill',);
    }
}
