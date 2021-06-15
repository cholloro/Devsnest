// first problem
function is_array(input){
    var data = {key:input};
    return Array.isArray(data.key);
}

console.log(is_array('w3resource'));
console.log(is_array([1, 2, 4, 0]))