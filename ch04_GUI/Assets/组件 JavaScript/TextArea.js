#pragma strict

var stringToEdit : String = "Hello World\nI've got 2 lines...";
function OnGUI () {
    // Make a multiline text area that modifies stringToEdit.
    stringToEdit = GUI.TextArea (Rect (10, 10, 200, 100), stringToEdit, 200);
}
