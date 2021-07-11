
function dumb(){
    var state = false;
    if( state == false )
{
    document.getElementsByClassName("seat").style.backgroundColor = "blue";
    state === true;
}
if( state == true )
{
    document.getElementById("btn").style.backgroundColor = "black";
    state === false;
}
}
document.getElementsByClassName("seat").onclick = dumb()

document.getElementById("btn").onclick = dumb()