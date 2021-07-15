const Available = 36;
const Selected = 0;

function dumb(id)
{
    var background = document.getElementById(id).style.backgroundColor;
    if ( background == "brown" )
    {
        document.getElementById(id).style.background = "red";
        Available--;
        selected++;
      
    }
    else if( background == "red" )
    {
        document.getElementById(id).style.background = "brown"
        Available++;
        selected--;
    }
}
 