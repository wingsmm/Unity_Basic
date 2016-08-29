#pragma strict

var stringToEdit : String = "Modify me.";
function OnGUI () {
    stringToEdit = GUI.TextField (Rect (10, 10, 200, 20), stringToEdit, 25);
    if (GUI.changed)
        Debug.Log("Text field has changed.");
}
