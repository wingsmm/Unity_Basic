#pragma strict

function OnGUI () {
    // This box is larger than many elements following it, and it has a tooltip.
    GUI.Box (Rect (5, 35, 220, 150), GUIContent ("Box", "this box has a tooltip"));
    // This button is inside the box, but has no tooltip so it does not
    // override the box's tooltip.
    GUI.Button (Rect (10, 90, 200, 20), "No tooltip here");
    // This button is inside the box, and HAS a tooltip so it overrides
    // the tooltip from the box.
    GUI.Button (Rect (10, 120, 200, 20),
    GUIContent ("I have a tooltip", "The button overrides the box"));
    // finally, display the tooltip from the element that has
    // mouseover or keyboard focus
    GUI.Label (Rect (10,60,200,40), GUI.tooltip);
}
