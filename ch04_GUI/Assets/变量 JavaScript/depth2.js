#pragma strict

     class depth2 extends MonoBehaviour { 
    static var guiDepth : int = 1;
    function OnGUI() {
        GUI.depth = guiDepth;
        if(GUI.RepeatButton(Rect(50,50,100,100), "GoBack")) {
            guiDepth = 1;
            depth1.guiDepth = 0;
        }
    }
}