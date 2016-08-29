#pragma strict

var quedingTexture:Texture;
var tuichuTexture:Texture;
var anlibiaotiTexture:Texture;
var MyStyle:GUIStyle;

function Update () {
	if (Application.platform == RuntimePlatform.Android)  
    {            
    	if (Input.GetKeyUp(KeyCode.Home) )    
        {              
        	Application.Quit();                       
        }     
    	if (Input.GetKeyUp(KeyCode.Escape))  
        {              
        	Application.Quit();                       
        }
    } 
}

function OnGUI()
{
	var ratioScaleTempH=Screen.height/960.0;
	var ratioScaleTemp=Screen.width/540.0;
	
	GUI.DrawTexture(Rect(45*ratioScaleTemp,50*ratioScaleTempH,450*ratioScaleTemp,100*ratioScaleTempH), anlibiaotiTexture, ScaleMode.ScaleToFit, true, 450.0f/100.0f);
   	if (GUI.Button(Rect(70*ratioScaleTemp,800*ratioScaleTempH,150*ratioScaleTemp,80*ratioScaleTempH),quedingTexture,MyStyle))
    {
	    Application.LoadLevel("Start"); 	
	    Destroy(this);
    } 
    if (GUI.Button(Rect(320*ratioScaleTemp,800*ratioScaleTempH,150*ratioScaleTemp,80*ratioScaleTempH),tuichuTexture,MyStyle))
    {
	   Application.Quit();
    } 
}  

