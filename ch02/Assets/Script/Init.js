#pragma strict

var ballTemplete:Rigidbody;
var ball :Rigidbody;
var wltupian:String;
var fanhuiTexture:Texture;

var MyStyle:GUIStyle;

function Start()
{
	ball=Instantiate(ballTemplete, Vector3(0,0.7,4), ballTemplete.rotation);
	
	wltupian=PlayerPrefs.GetString("wl");
	ball.GetComponent.<Renderer>().material.mainTexture = Resources.Load(wltupian, Texture2D);
	ball.velocity= Vector3(-8,0,-15);
	
}

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
	
	
   	if (GUI.Button(Rect(380*ratioScaleTemp,850*ratioScaleTempH,150*ratioScaleTemp,80*ratioScaleTempH),fanhuiTexture,MyStyle))
    {
	    Application.LoadLevel("简单球转球动案例");  
    } 
} 