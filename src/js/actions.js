function balance(vals){
    if(vals.length == 0 || vals.length == 1){
        alert(true);
        return;
    }else if(vals.length%2 != 0){
        alert(false);
        return;
    }

    let firstVal = vals.substring(0,vals.length/2);
    let secondVal = vals.substring(vals.length/2,vals.length);
    alert(firstVal);
    alert(secondVal);
    let wildCard = 0;
    let matches = 0;
    for(let w = 0; w < vals.length; w++){
        if(vals[w] == "*"){
            wildCard++;
        }
    }

    for(let i = 0; i < vals.length/2; i++){
        for(let j = 0; j < vals.length/2; j++){
            if(firstVal[i] == secondVal[j]){
                matches++;
            }else if(wildCard > 0){
                if(firstVal[i] == "*" || secondVal[j] == "*"){
                    wildCard--;
                    matches++;
                }
            }
        }
    }

    if(matches == vals.length/2){
        alert(true);
    }else{
        alert(false);
    }
}

function balanced(){
    balance(document.getElementById("vals").value);
}