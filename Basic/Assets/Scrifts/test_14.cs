using UnityEngine;
using System.Collections;

public class test_14 : MonoBehaviour {

	// Use this for initialization
	void Start () {


		Rigidbody rb = GetComponent<Rigidbody> ();

		print ("质量是 " + rb.mass);//质量
		print ("空气是 " + rb.drag);//空气阻力
//		rb.angularDrag;//角阻力
//		rb.useGravity; //是否受重力影响
//		rb.freezeRotation;//是否冻结角度旋转
	}
	
	// Update is called once per frame
	void Update () {
	
	}
}
