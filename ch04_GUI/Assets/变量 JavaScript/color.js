#pragma strict

function OnGUI() {
    GUI.color = Color.yellow;
    GUI.Label (Rect (10, 10, 100, 20), "Hello World!");
    GUI.Box(Rect(10, 50, 50, 50), "A BOX");
    GUI.Button(Rect(10,110,70,30), "A button");
  }
