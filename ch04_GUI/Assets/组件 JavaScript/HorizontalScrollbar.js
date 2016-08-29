#pragma strict

var hSbarValue : float;
function OnGUI () {
    hSbarValue = GUI.HorizontalScrollbar (Rect (25, 25, 100, 30), hSbarValue, 1.0, 0.0, 10.0);
}
