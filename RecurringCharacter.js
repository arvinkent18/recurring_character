function recurringCharacter(str) {
    const strList = str.split('');
    if (strList) {
            outerloop:
            for(let i = 0; i < strList.length; i++){
                innerloop:
                for(let j = i + 1; j < str.length; j++){
                    if(strList[i] == strList[j])
                        return strList[i];       
                }
            }
    }
}

const str = 'CBAD';

console.log(recurringCharacter(str));