#pragma strict

var stringToEdit : String = "Hello World";

function OnGUI () {
    // Make a text field that modifies stringToEdit.
    stringToEdit = GUI.TextField (Rect (10, 10, 200, 20), stringToEdit, 25);
}
