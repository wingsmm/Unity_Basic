#pragma strict
var windowRect0 : Rect = Rect (20, 20, 120, 50);
var windowRect1 : Rect = Rect (20, 100, 120, 50);
function OnGUI () {
    // Register the window. We create two windows that use the same function
      windowRect0 = GUI.Window (0, windowRect0, DoMyWindow, "My Window");
    windowRect1 = GUI.Window (1, windowRect1, DoMyWindow, "My Window");
}
// Make the contents of the window
function DoMyWindow (windowID : int) {
    if (GUI.Button (Rect (10,20,100,20), "Hello World"))
        print ("Got a click in window " + windowID);
    // Make the windows be draggable.
    GUI.DragWindow (Rect (0,0,10000,10000));
}
