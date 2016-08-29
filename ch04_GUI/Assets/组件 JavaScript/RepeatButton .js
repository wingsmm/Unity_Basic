#pragma strict

var btnTexture : Texture;
function OnGUI() {
    if (!btnTexture) {
        Debug.LogError("Please assign a texture on the inspector");
        return;
    }
    if (GUI.RepeatButton(Rect(10,10,100,100),btnTexture))
        Debug.Log("Clicked the button with an image");

    if (GUI.RepeatButton(Rect(10,130,100,100),"Click Me"))
        Debug.Log("Clicked the button with text");
}
