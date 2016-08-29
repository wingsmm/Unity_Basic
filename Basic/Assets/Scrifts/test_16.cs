using UnityEngine;
using System.Collections;

public class test_16 : MonoBehaviour {

	// Use this for initialization
	void Start () {
	
	}
	
	// Update is called once per frame
	void Update () {
	
	}



	//触发器


	void OnTriggerEnter(Collider other){
		print ("触发开始......");
	}

	void OnTriggerStay(Collider other){
		print ("触发持续中......");
	}

	void OnTriggerExit(Collider other){
		print ("触发离开......");
	}
	//碰撞器相关的三个事件


//	void OnCollisionEnter (Collision other){
//		print ("碰撞开始......");
//	}
//
//	void OnCollisionStay (Collision other){
//		print ("碰撞持续中......");
//
//		if(string.Equals(other.gameObject.name,"Cube2")){
//
//			print ("产生火花");
//
//		}
//	}
//	void OnCollisionExit (Collision other){
//		print ("碰撞结束......");
//	}
}
