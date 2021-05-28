function balance(vals){
    if(vals.length == 0 || vals.length == 1){
        alert(true);
        return;
    }else if(vals.length%2 != 0){
        alert(false);
        return;
    }

    for(let i = 0; i <= vals.length; i++){
        if(vals.length%2 == 0){
            let r = vals.length;
            alert(r);
            if(r == 0 || r == 1){
                alert(true);
            }else if(vals[i] == ''){
                alert(true);
            }else{
                alert(false);
            }
        }else if(vals.length == 0 || vals.length == 1){
            alert(true);
        }else{
            alert(false);
        }
    }
}

function balanced(){
    balance(document.getElementById("vals").value);
}

