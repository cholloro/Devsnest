var button = document.getElementById("seat");
var state = false;

button.onclick = function ()
{
    if ( state === false )
    {
        state = true;
        document.getElementById("seat").style.backgroundColour = "transparent"
    }
    if ( state === true )
    {
        state =  false;
        document.getElementById("seat").style.backgroundColour = "transparent"
    }
}