const obj1 = {
    name: 'abc',
    age: [9,8,7],
    size: {
        height: [1, 2,3],
        width: [4, 5, 6]
    }
}

function deepcopy(obj){
    if(typeof obj !== 'object' || obj === null ){
        return obj
    }
    let result;
    if(Array.isArray(obj)){
        result = [];
        for(i in obj){
            result.push(obj[i])
        }
    }else{
        result = {};
    }
}
