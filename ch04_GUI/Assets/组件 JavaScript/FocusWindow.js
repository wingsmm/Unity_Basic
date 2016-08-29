#pragma strict

private var windowRect : Rect = Rect (20, 20, 120, 50);
private var windowRect2 : Rect = Rect (20, 80, 120, 50);
function OnGUI () {
    windowRect = GUI.Window (0, windowRect, DoMyFirstWindow, "First");
    windowRect2 = GUI.Window (1, windowRect2, DoMySecondWindow, "Second" );
}
function DoMyFirstWindow (windowID : int) {
    if (GUI.Button (Rect (10,20,100,20), "Focus other"))
        GUI.FocusWindow(1);
}
function DoMySecondWindow (windowID : int) {
    if (GUI.Button (Rect (10,20,100,20), "Focus other"))
        GUI.FocusWindow(0);
}
