#pragma strict
var scrollPos : Vector2 = Vector2.zero;
function OnGUI () {
    scrollPos = GUI.BeginScrollView(Rect (10, 10, 100, 50), scrollPos, Rect (0, 0, 220, 10));
    if(GUI.Button (Rect (0,0,100,20), "Go Right"))
        GUI.ScrollTo(Rect (120,0,100,20));
    if(GUI.Button (Rect (120,0,100,20) , "Go Left"))
        GUI.ScrollTo(Rect (0,0,100,20));
       // End the scroll view that we began above.
    GUI.EndScrollView ();
}
