function merge(in1, in2) {
    const out = [];
    let i = 0;
    let j = 0;
    while(i < in1.length && j < in2.length){
        if(in1[i] < in2[j]){
            out.push(in1[i]);
            i++;
        }else{
            out.push(in2[j]);
            j++
        }
    }
    while(i < in1.length){
        out.push(in1[i]);
        i++;
    }
    while(j < in2.length){
        out.push(in2[j]);
        j++;
    }
    return out;
}

function mergeSort(input) {
    if(input.length <=1){return input};
    const midIdx = Math.floor(input.length/2);
    const left = mergeSort(input.slice(0,midIdx));
    const right = mergeSort(input.slice(midIdx));
    return merge(left,right);
}

module.exports = { merge, mergeSort};