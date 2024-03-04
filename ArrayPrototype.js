// create a function that takes operator and a number as an input from user
// returns an updated array with each element modified according to operator and number

function updateArrayElements(operator, num){
    let updatedArray = [];
    console.log(updatedArray)
    if(num && operator.length === 1 && /[%^*+/-]/.test(operator)){
        for(let ele of this){
            switch (operator){
                case '+' :
                    updatedArray.push(ele + num);
                    break;
                case '-' :
                    updatedArray.push(ele - num);
                    break;          
                case '/' : 
                    updatedArray.push(ele / num);
                    break;          
                case '^' : 
                    updatedArray.push(Math.pow(ele,num));
                    break;          
                case '%' :
                    updatedArray.push(ele % num);
                    break;          
                case '*' :
                    updatedArray.push(ele * num);    
                    break;          
            }
        }
        return updatedArray;
    }
    return updatedArray;
}

Array.prototype.updateArrayElements = updateArrayElements;

let a = [1,2,3,4];
console.log(a.updateArrayElements("/", 5))