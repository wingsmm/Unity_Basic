using UnityEngine;
using System.Collections;

public class test : MonoBehaviour {

	public Texture2D label_texture;
	// Use this for initialization
	void Start () {
	
	}
	
	// Update is called once per frame
	void Update () {
	
	}



	void OnGUI(){

		GUI.Label (new Rect (10, 10, 100, 100), "hello world");

		if (GUI.Button(new Rect(10,70,50,30),label_texture)){
			print(".......");
		}
	}
}
