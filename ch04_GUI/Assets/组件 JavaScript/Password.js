#pragma strict

var passwordToEdit : String = "My Password";
function OnGUI () {
    // Make a password field that modifies passwordToEdit.
    passwordToEdit = GUI.PasswordField (Rect (10, 10, 200, 20), passwordToEdit, "*"[0], 25);
}
