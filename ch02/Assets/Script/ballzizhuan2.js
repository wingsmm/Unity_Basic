
public static var flag2 : boolean=true;

function Update () 
{	
	if(flag2)
	{
		this.transform.Rotate(-Time.deltaTime * 50,0,0);
		
	}
	if(ballzizhuan1.flag1==true&&ballzizhuan3.flag3==true&&ballzizhuan4.flag4==true&&ballzizhuan5.flag5==true&&ballzizhuan6.flag6==true)
	{
		
		if(!flag2)
		{
			this.transform.Rotate(-Time.deltaTime * 500,0,0);
			
		}
	}
	else
	{
		flag2=true;
	}
	
	
	for (var touch : Touch in Input.touches)
    {	
   		var ray = Camera.main.ScreenPointToRay(touch.position);
        var hit : RaycastHit;
		if (Physics.Raycast (ray, hit))
	    {
            if(hit.transform.root.transform==this.transform)	      
            {	
            	flag2=false;
            	//if(touch.phase == TouchPhase.Began)
            	PlayerPrefs.SetString("wl","风景2");

            }
	    }      
	}
}