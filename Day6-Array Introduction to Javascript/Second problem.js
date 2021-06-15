//Second Problem
function array_clone(input)
{
    var data = input;
    var output = [];
    for( i = 0 ; i < data.length ; i++ )
    {
        output.push(data[i]);
    }
    return output;
}

console.log(array_clone([1, 2, 4, 0]));
console.log(array_clone([1, 2, [4, 0]]));