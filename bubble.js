function bubbleSort(input) {
    for(let i = 0; i < input.length; i++){
        for(let j=0; j < input.length; j++){
            if(input[j]>input[j+1]){
                let val = input[j];
                input[j]=input[j+1];
                input[j+1]=val;
            }
        }
    }
    return input;

}

module.exports = bubbleSort;