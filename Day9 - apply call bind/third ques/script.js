var Available = 36;
var Selected = 0;

function dumb(id)
{
    var background = document.getElementById(id).style.backgroundColor;
    if ( background == "brown" )
    {
        document.getElementById(id).style.backgroundColor = "red";
        Available = Available-1;
        Selected = Selected + 1;
        document.getElementById("select").textContent=`${Selected}`
        document.getElementById("avail").textContent=`${Available}`
    }
    else
    {
        document.getElementById(id).style.backgroundColor = "brown"
        Available = Available + 1;
        Selected = Selected - 1;
        document.getElementById("select").textContent=`${Selected}`
        document.getElementById("avail").textContent=`${Available}`
    }
}
 
