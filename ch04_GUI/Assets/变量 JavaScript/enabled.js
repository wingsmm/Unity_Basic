#pragma strict


// The value tracking whether or not the extended options can be toggled.
var allOptions : boolean = true;
// The 2 extended options.
var extended1 : boolean = true;
var extended2 : boolean = true;
function OnGUI () {
    // Make a toggle control that allows the user to edit some extended options.
    allOptions = GUI.Toggle (Rect (0,0,150,20), allOptions, "Edit All Options");
    // Assign the value of it to the GUI.enabled - if the checkbox above
    // is disabled, so will these GUI elements be
    GUI.enabled = allOptions;
       // These two controls will only be enabled if the button above is on.
    extended1 = GUI.Toggle (Rect (20,20,130,20), extended1, "Extended Option 1");
    extended2 = GUI.Toggle (Rect (20,40,130,20), extended2, "Extended Option 2");
        // We're done with the conditional block, so make GUI code be enabled again.
    GUI.enabled = true;
       // Make an Ok button
    if (GUI.Button (Rect (0, 60, 150, 20), "Ok"))
        print ("user clicked ok");
}
