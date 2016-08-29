#pragma strict

private var windowRect : Rect = Rect (20, 20, 120, 50);
private var windowRect2 : Rect = Rect (80, 20, 120, 50);
function OnGUI () {
    windowRect = GUI.Window (0, windowRect, DoMyFirstWindow, "First");
    windowRect2 = GUI.Window (1, windowRect2, DoMySecondWindow, "Second" );
}
function DoMyFirstWindow (windowID : int) {
    if (GUI.Button (Rect (10,20,100,20), "Bring to front"))
        GUI.BringWindowToFront(1); //Bring the 2nd window to front
    GUI.DragWindow(Rect (0,0, 10000, 20));
}
function DoMySecondWindow (windowID : int) {
    if (GUI.Button (Rect (10,20,100,20), "Bring to front"))
        GUI.BringWindowToFront(0); //Bring the 1rst window to front
    GUI.DragWindow(Rect (0,0, 10000, 20));
}
