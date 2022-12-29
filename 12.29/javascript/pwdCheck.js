/* 비밀번호 확인시 필요한 JavaScript */
/* 비밀번호와 비밀번호확인 값이 일치하는지 확인하는 함수 */ 

function pwdCheck(){
    if(document.getElementById("pwd1").value != '' && document.getElementById("pwd2").value != ''){
        if(document.getElementById("pwd1").value == document.getElementById("pwd2").value){
            document.getElementById('same').innerHTML='입력하신 비밀번호와 일치합니다.';
            document.getElementById('same').style.color='blue';
        }
        else{
            document.getElementById('same').innerHTML='입력하신 비밀번호와 일치하지않습니다.';
            document.getElementById('same').style.color='red';
        }
    }
}
