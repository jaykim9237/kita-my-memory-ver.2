function formCheck() {
    let id = document.getElementById('id');
    let pw = document.getElementById('pw');
    let pw2 = document.getElementById('pw2');

    //조건을 확인해서 false가 리턴되면 해당 폼은 전송되지 않는다
    if (id.value.length < 5 || id.value.length > 10) {
        alert('ID는 5~10자로 입력하세요.');
        return false;
    }
    if (pw.value != pw2.value) {
        alert('비밀번호를 정확하게 2번 입력해주세요.');
        return false;
    }
    //위의 if문을 모두 통과해서 마지막 줄의 return true;를 만나면
    //폼의 내용이 서버로 전송된다 (action=에서 지정된 곳)
    return true;
}

function Check_onclick(){
    let theForm = document.getElementById("frm5");

    if(theForm.m1m1.value==""){
        alert("필수 입력란이 비었습니다. 확인해주세요.")

        return;
    }else{
        alert("필수 입력란을 모두 입력하였습니다. 시간이 괜찮다면 선택도 부탁드려요:)")
        
        return true;
    }
}