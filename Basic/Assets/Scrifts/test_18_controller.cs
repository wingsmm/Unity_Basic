using UnityEngine;
using System.Collections;

public class test_18_controller : MonoBehaviour {



	public float speed;

	private Vector3 target;
	private bool isOver = true;

	// Use this for initialization
	void Start () {
	
	}
	
	// Update is called once per frame
	void Update () {
	

		if(Input.GetMouseButtonDown(0)){


			Ray ray = Camera.main.ScreenPointToRay (Input.mousePosition);
			RaycastHit hit_info = new RaycastHit ();

			if (Physics.Raycast(ray,out hit_info)){

				if(hit_info.collider.name == "Plane"){

					target = hit_info.point;
					target.y = 0.5f;
					isOver = false;
				}

			}
		}


		MoveTo (target);
	}


	private void MoveTo(Vector3 tar){




		if (!isOver){

			Vector3 v1 = tar - transform.position;
			transform.position += v1.normalized * speed * Time.deltaTime;

			if(Vector3.Distance (tar,transform.position) < 0.5f){
				isOver = true;
				transform.position = tar;
			}


		}



	}



}
