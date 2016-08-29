#pragma strict
var beijingTexture:Texture;
var XCTexture:Texture;
var fengjingTexture1:Texture;
var fengjingTexture2:Texture;
var fengjingTexture3:Texture;
var fengjingTexture4:Texture;
var fengjingTexture5:Texture;
var fengjing:Texture[];
var zuojiantouTexture:Texture;
var youjiantouTexture:Texture;
var quedingTexture:Texture;
var fanhuiTexture:Texture;
var i:int = 0;
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
function OnGUI(){
	var ratioScaleTempH=Screen.height/960.0;
	var ratioScaleTemp=Screen.width/540.0;
	var windowRect : Rect = Rect (20*ratioScaleTemp, 250*ratioScaleTempH, 500*ratioScaleTemp, 550*ratioScaleTempH);
	GUI.DrawTexture(Rect(0,0,540*ratioScaleTemp,960*ratioScaleTemp), beijingTexture, ScaleMode.ScaleToFit, true , 540.0/960.0);
	GUI.DrawTexture(Rect(170*ratioScaleTemp,20*ratioScaleTempH,200*ratioScaleTemp,100*ratioScaleTempH), XCTexture, ScaleMode.ScaleToFit, true , 200.0/100.0);
	if(GUI.Button(Rect(20*ratioScaleTemp,145*ratioScaleTempH,50*ratioScaleTemp,50*ratioScaleTempH),zuojiantouTexture,MyStyle))
	{
		i--;
		if(i<0)
		{
			i=4;
		}
	}	
	if(GUI.Button(Rect(70*ratioScaleTemp,130*ratioScaleTempH,80*ratioScaleTemp,80*ratioScaleTempH), fengjingTexture1,  MyStyle))
	{
		i=0;
	}	
	if(GUI.Button(Rect(150*ratioScaleTemp,130*ratioScaleTempH,80*ratioScaleTemp,80*ratioScaleTempH), fengjingTexture2, MyStyle))
	{
		i=1;
	}
	if(GUI.Button(Rect(230*ratioScaleTemp,130*ratioScaleTempH,80*ratioScaleTemp,80*ratioScaleTempH), fengjingTexture3, MyStyle))
	{
		i=2;
	}
	if(GUI.Button(Rect(310*ratioScaleTemp,130*ratioScaleTempH,80*ratioScaleTemp,80*ratioScaleTempH), fengjingTexture4, MyStyle))
	{
		i=3;
	}
	if(GUI.Button(Rect(390*ratioScaleTemp,130*ratioScaleTempH,80*ratioScaleTemp,80*ratioScaleTempH), fengjingTexture5, MyStyle))
	{
		i=4;
	}	
	if(GUI.Button(Rect(470*ratioScaleTemp,145*ratioScaleTempH,50*ratioScaleTemp,50*ratioScaleTempH),youjiantouTexture,MyStyle))
	{
		i++;
		if(i>4)
		{
			i=0;
		}
	}	
	windowRect = GUI.Window (0, windowRect, DoMyWindow, "相  册");		
	if(GUI.Button(Rect(70*ratioScaleTemp,830*ratioScaleTempH,100*ratioScaleTemp,50*ratioScaleTempH),quedingTexture,MyStyle))
	{
		 Debug.Log("显示的风景图片");
	}
	if(GUI.Button(Rect(370*ratioScaleTemp,830*ratioScaleTempH,100*ratioScaleTemp,50*ratioScaleTempH),fanhuiTexture,MyStyle))
	{
		Application.Quit();   
	}	
}
function DoMyWindow (windowID : int) 
	{
		var ratioScaleTempH=Screen.height/960.0;
		var ratioScaleTemp=Screen.width/540.0;		
    	GUI.DrawTexture(Rect(10*ratioScaleTemp,30*ratioScaleTempH,480*ratioScaleTemp,480*ratioScaleTempH), fengjing[i], ScaleMode.ScaleToFit, true , 500.0/500.0);
	}