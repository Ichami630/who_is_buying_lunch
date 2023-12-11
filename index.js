
function whosPaying(names) {
    
/******Don't change the code above*******/
    //Write your code here.
    var inputSize=input.length;
    let n=Math.random();
    n=n * inputSize;
    n=Math.floor(n);
    
    var result;
    result=names[n]+" is going to buy lunch today!";
    return result;
    
    


/******Don't change the code below*******/    
}
var input=["ichami","brandon","brain","ben","micheal"];
whosPaying(input);
