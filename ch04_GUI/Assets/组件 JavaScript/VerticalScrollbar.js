#pragma strict

var vSbarValue : float;
function OnGUI () {
    vSbarValue = GUI.VerticalScrollbar(Rect (25, 25, 100, 100), vSbarValue, 1.0, 10.0, 0.0);
}
