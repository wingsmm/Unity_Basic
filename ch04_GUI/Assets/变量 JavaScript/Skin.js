#pragma strict

//var s1 : GUISkin[];

private var hSliderValue : float = 0.0;
private var vSliderValue : float = 0.0;
private var hSValue : float = 0.0;
private var vSValue : float = 0.0;
//private var cont : int = 0;

/*function Update() { 
    if(Input.GetKeyDown(KeyCode.Space))
        cont++;
}*/
function OnGUI() {
    /*GUI.skin = s1[cont%s1.Length];
    if(s1.Length == 0){
        Debug.LogError("Assign at least 1 skin on the array");
        return;
    }*/
    GUI.Label (Rect (10, 10, 100, 20), "Hello World!");
    GUI.Box(Rect(10, 50, 50, 50), "A BOX");
    if (GUI.Button(Rect(10,110,70,30), "A button"))
        Debug.Log("Button has been pressed");
    hSliderValue = GUI.HorizontalSlider (Rect (10, 150, 100, 30), hSliderValue, 0.0, 10.0);
    vSliderValue = GUI.VerticalSlider (Rect (10, 170, 100, 30), vSliderValue, 10.0, 0.0);
    hSValue = GUI.HorizontalScrollbar (Rect (10, 210, 100, 30), hSValue, 1.0, 0.0, 10.0);
    vSValue = GUI.VerticalScrollbar (Rect (10, 230, 100, 30), vSValue, 1.0, 10.0, 0.0);
}
