#pragma strict

class depth1 extends MonoBehaviour {
    static var guiDepth : int = 0;
    function OnGUI() {
        GUI.depth = guiDepth;
        if(GUI.RepeatButton(Rect(0,0,100,100), "GoBack")) {
            guiDepth = 1;
            depth2.guiDepth = 0;
        }  }  }
        
        
   
