#pragma strict

var i:int ;
var j:int ;
var BallPrefab : Rigidbody;
//var ball : Rigidbody;
var x : float; var y : float; var z : float;
var k : float; var n : int;
var count : int =0;
var BP: Rigidbody[] ;
function Start () {
	BP=new Rigidbody[10];
    count=0;
	for(i=0;i<=n;i++){
		for(var j : int =0;j<i;j++){
			BP[count++]=Instantiate (BallPrefab, Vector3(x-2*k*i+4*j*k,2.0,z-2*1.75*k*i), BallPrefab.rotation);
		}
	}
}

