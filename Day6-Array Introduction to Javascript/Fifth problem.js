function frequency(input)
{   
    input.sort();
    var curCount = 1;
    var highCount = 1;
    var mostRep = null;
    for( i = 1 ; i < input.length + 1 ; i++ )
    {
        if ( input[ i - 1 ] === input[ i ] )
        {
            curCount++;
        }
        else
        {
            curCount = 1;
        }
        if ( highCount <= curCount )
        {
            highCount = curCount;
            mostRep = input [ i ];
        }
   }
   return `${mostRep} (${highCount} times)`
}

console.log(frequency([3,'a','a','a',2,3,'a',3,'a',2,4,9,3]));