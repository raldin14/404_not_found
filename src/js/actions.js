function balance(vals){
    let wildCard = 0;
    let matches = 0;
    let firstTotal = 0;
    let secondTotal = 0;
    let firstVal = vals.substring(0,vals.length/2);
    let secondVal = vals.substring(vals.length/2,vals.length);
    let val = vals;
    if(vals.length == 0 || vals.length == 1 || vals.length == 2){
        alert(true);
        return;
    }else if(vals.length%2 != 0){
        for(let i = 0; i < vals.length/2; i++){
            for(let j = 0; j < vals.length/2; j++){
                if(firstVal[i] == secondVal[j]){
                    matches++;
                }
            }
        }

        if(matches > 0){
            alert(false);
            return;
        }else{
            alert(true);
            return;
        }        
    }
    alert(firstVal);
    alert(secondVal);

    for(let w = 0; w < vals.length; w++){
        if(vals[w] == "*"){
            wildCard++;
        }
    }

    for(let i = 0; i < vals.length/2; i++){
        firstTotal = firstVal.split(firstVal[i]).length -1;
        secondTotal = secondVal.split(firstVal[i]).length -1;
        alert(firstTotal);
        alert(secondTotal);
        if(firstTotal == secondTotal){
            if(val.split(firstVal[i]).length -1 > 0){
                val = val.replaceAll(firstVal[i],"");
            }
            //val = val.replaceAll(secondVal[i],"");
            matches++;
        }else if(wildCard > 0){
            if(firstVal[i] == "*" || secondVal[j] == "*"){
                wildCard--;
                matches++;
                val = val.replaceAll("*","");
                //val = val.replaceAll("*","");
            }
        }

        if(val.length == 0){
            alert(true);
            return;
        }
       /* for(let j = 0; j < vals.length/2; j++){
            if(firstVal[i] == secondVal[j]){
                matches++;
            }else if(wildCard > 0){
                if(firstVal[i] == "*" || secondVal[j] == "*"){
                    wildCard--;
                    matches++;
                }
            }
        }*/
    }

    if(val.length > 0){
        alert(false);
        return;
    }
    /*if(matches == vals.length/2){
        alert(true);
    }else{
        alert(false);
    }*/
}

function balanced(){
    balance(document.getElementById("vals").value);
}