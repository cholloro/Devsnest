var button = document.getElementById("seat");
var state = false;

button.onclick = function ()
{
    if ( state === false )
    {
        state = true;
        button.document.body.backgroundColour = "red"
    }
    if ( state === true )
    {
        state =  false;
        button.document.body.backgroundColour = "transparent"
    }
}