function first(input,n)
{   
    if ( n == null )
    {
        return input[ 0 ];
    }
    if ( n < 0 )
    {
       return [];
    }
    else
    {
        return input.slice(0,n)
    }
}

console.log(first([7, 9, 0, -2]));
console.log(first([],3));
console.log(first([7, 9, 0, -2],3));
console.log(first([7, 9, 0, -2],6));
console.log(first([7, 9, 0, -2],-3));