#pragma strict

var aTexture : Texture2D;
function OnGUI() {
    GUI.DrawTexture(Rect(10,10,60,60), aTexture, ScaleMode.ScaleToFit, true, 0.0f);
}
