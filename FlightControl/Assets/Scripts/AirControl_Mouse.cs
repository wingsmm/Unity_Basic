using UnityEngine;
using System.Collections;

public class AirControl_Mouse : MonoBehaviour {

	GameObject propeller ;
	// Use this for initialization

	public float rotationz;//沿Z轴的旋转量
	private Transform m_transform;
	public float speed = 400; //速度 
	public float rotateSpeed_AxisZ = 45;//沿Z轴旋转速度
	public float rotateSpeed_AxisY = 20;//沿Y轴旋转速度
	public float screenWidth = 0; //屏幕宽度
	private Vector2 touchPosition; //触摸点位置
	public bool isDown;

	void Start () {
		propeller = GameObject.Find ("propeller");
		screenWidth = Screen.width;
		this.gameObject.GetComponent<Rigidbody>().useGravity = false; //默认不受重力影响
		m_transform = this.transform;
	}



	// Update is called once per frame
	void Update () {
		
		propeller.transform.Rotate (new Vector3 (0, 100f, 0));
		rotationz = this.transform.eulerAngles.z;
		m_transform.Translate (new Vector3 (0, 0, speed / 20 * Time.deltaTime));


		if(Input.GetKey(KeyCode.A)){
			isDown = true;
			if(rotationz <= 45 || rotationz >=315){
				m_transform.Rotate (new Vector3 (0, 0, Time.deltaTime * rotateSpeed_AxisZ), Space.Self);
			}
			m_transform.Rotate (new Vector3 (0, -1 *30 * Time.deltaTime, 0), Space.World);
		}

		if (Input.GetKey (KeyCode.D)) {
			if ((rotationz <= 45 || rotationz >= 315)) {
				// 飞机向右倾斜
				m_transform.Rotate(new Vector3(0, 0, (Time.deltaTime * -rotateSpeed_AxisZ)), Space.Self);
			}
			// 飞机右转
			m_transform.Rotate(new Vector3(0, Time.deltaTime * 30, 0), Space.World);
		}


		if (Input.GetKeyUp(KeyCode.A) ||Input.GetKeyUp(KeyCode.D) ){

			isDown = false;
		}

		if(!isDown){
			BackToBlance();             //调用恢复平衡状态方法
		}


	}


	void BackToBlance()                 //恢复平衡方法
	{
		if ((rotationz <= 180)) {       //判断如果飞机为右倾状态
			if (rotationz - 0 <= 2) {   //在阈值内轻微晃动
				m_transform.Rotate(0, 0, Time.deltaTime * -1);
			}
			else {                      //快速恢复平衡状态
				m_transform.Rotate(0, 0, Time.deltaTime * -40);
			}
		}

		if ((rotationz > 180)) {        //判断如果飞机为左倾状态
			if (360 - rotationz <= 2) { //在阈值内轻微晃动
				m_transform.Rotate(0, 0, Time.deltaTime * 1);
			}
			else {                      //快速恢复平衡状态
				m_transform.Rotate(0, 0, Time.deltaTime * 40);
			}
		}
	}



}
