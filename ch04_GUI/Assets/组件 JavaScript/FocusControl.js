#pragma strict

var username : String = "username";
var pwd : String = "a pwd";
function OnGUI () {
    // Set the internal name of the textfield
    GUI.SetNextControlName ("MyTextField");
      // Make the actual text field.
    username = GUI.TextField (Rect (10,10,100,20), username);
    pwd = GUI.TextField (Rect (10,40,100,20), pwd);
    // If the user presses this button, keyboard focus will move.
    if (GUI.Button (Rect (10,70,80,20), "Move Focus"))
        GUI.FocusControl ("MyTextField");    
}
