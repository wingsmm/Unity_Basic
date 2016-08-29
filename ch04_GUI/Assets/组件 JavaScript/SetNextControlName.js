#pragma strict

var login : String = "username";
var login2 : String = "no action here";
function OnGUI () {
    GUI.SetNextControlName ("user");
    login = GUI.TextField (Rect (10,10,130,20), login);
    login2 = GUI.TextField (Rect (10,40,130,20), login2);
    if (Event.current.Equals (Event.KeyboardEvent ("return")) &&
    GUI.GetNameOfFocusedControl() == "user")
        Debug.Log ("Login");
    if (GUI.Button (new Rect (150,10,50,20), "Login"))
        Debug.Log ("Login");
}
