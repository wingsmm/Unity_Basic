#pragma strict

function OnGUI () {
       GUI.BeginGroup (new Rect (20, 20, 300, 300));
       GUI.Box (new Rect (30,30,250,150),
        "This box is now centered! - here you would put your main menu");
       GUI.EndGroup ();
}
