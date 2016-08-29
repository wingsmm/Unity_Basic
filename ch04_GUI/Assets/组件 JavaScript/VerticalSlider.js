#pragma strict

// Draws a vertical slider control that goes from  10 (top) to 0 (bottom)
var vSliderValue : float = 0.0;

function OnGUI () {
    vSliderValue = GUI.VerticalSlider (Rect (25, 25, 100, 100), vSliderValue, 10.0, 0.0);
}
