var booked = 0;
var available= 36
function dumb(id)
{
    var background = document.getElementById(id).style.backgroundColor;

    if ( background == "brown" )
    {
        document.getElementById(id).style.background = "red"
    }
    else
    {
        document.getElementById(id).style.background = "brown"
    }
}