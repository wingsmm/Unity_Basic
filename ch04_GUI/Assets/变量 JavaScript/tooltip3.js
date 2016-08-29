#pragma strict

var lastTooltip : String = " ";
function OnGUI () {
    GUILayout.Button (GUIContent ("Play Game", "Button1"));
    GUILayout.Button (GUIContent ("Quit", "Button2"));
        if (Event.current.type == EventType.Repaint && GUI.tooltip != lastTooltip) {
        if (lastTooltip != "")
            SendMessage (lastTooltip + "OnMouseOut", SendMessageOptions.DontRequireReceiver);
        if (GUI.tooltip != "")
            SendMessage (GUI.tooltip + "OnMouseOver", SendMessageOptions.DontRequireReceiver);
        lastTooltip = GUI.tooltip;
    }
}
function Button1OnMouseOver () {
    Debug.Log ("Play game got focus");
}
function Button2OnMouseOut () {
    Debug.Log ("Quit lost focus");
}
