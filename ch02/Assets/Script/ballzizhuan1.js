

public static var flag1 : boolean=false;

function Update () 
{	
	if(flag1==false)
	{
		PlayerPrefs.SetString("wl","风景1");
	}
	if(flag1)
	{
		this.transform.Rotate(-Time.deltaTime * 50,0,0);
		
	}
	if(ballzizhuan2.flag2==true&&ballzizhuan3.flag3==true&&ballzizhuan4.flag4==true&&ballzizhuan5.flag5==true&&ballzizhuan6.flag6==true)
	{
		
		if(!flag1)
		{
			this.transform.Rotate(-Time.deltaTime * 500,0,0);
			
		}
	}
	else
	{
		flag1=true;
	}
	
	
	for (var touch : Touch in Input.touches)
    {	
   		var ray = Camera.main.ScreenPointToRay(touch.position);
        var hit : RaycastHit;
		if (Physics.Raycast (ray, hit))
	    {
            if(hit.transform.root.transform==this.transform)	      
            {	
            	flag1=false;
            	//if(touch.phase == TouchPhase.Began)	
            	PlayerPrefs.SetString("wl","风景1");
            }
	    }      
	}
}