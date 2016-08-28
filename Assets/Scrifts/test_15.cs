using UnityEngine;
using System.Collections;

public class test_15 : MonoBehaviour {



	Rigidbody rb;
	// Use this for initialization
	void Start () {
	
		rb = GetComponent <Rigidbody> ();
	}
	
	// Update is called once per frame
	void Update () {

		if(Input.GetKey(KeyCode.Alpha0)){
//			rb.AddForce (new Vector3(0f,20f,0f));
//			rb.AddTorque (new Vector3(0f,20f,0f));
//			rb.AddForceAtPosition (new Vector3 (0f, 20f, 0f), new Vector3 (0.5f, 0.5f, 0.5f));

			rb.AddExplosionForce (15000f, new Vector3 (0.5f, 0f, 0f), 15f);
		}
	
	}
}
