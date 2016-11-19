using UnityEngine;
using System.Collections;

public class AlbumScript : MonoBehaviour {


	public Texture background;
	public Texture album_texture;
	public Texture texture_1;
	public Texture texture_2;
	public Texture texture_3;
	public Texture texture_4;
	public Texture texture_5;

	public Texture [] scene;
	public Texture left_texture;
	public Texture right_texture;

	public Texture ok_texture;
	public Texture return_texture;


	int index = 1;
	public GUIStyle MyStyle;
	// Use this for initialization
	void Start () {
	
	}
	
	// Update is called once per frame
	void Update () {
	
		if(Application.platform == RuntimePlatform.Android){
			if(Input.GetKeyUp(KeyCode.Home) || Input.GetKeyUp(KeyCode.Return)){
				Application.Quit ();
			}
		}

	}




	void OnGUI(){

		float ratioScaleTempH = Screen.height / 960.0f;
		float ratioScaleTempW = Screen.width / 540.0f;

		Rect winRect = new Rect (20 * ratioScaleTempW, 250 * ratioScaleTempH, 500 * ratioScaleTempW, 550 * ratioScaleTempH);

		GUI.DrawTexture(                                                //绘制背景纹理图片，并实现屏幕自适应
			new Rect(0,0,540*ratioScaleTempW,960*ratioScaleTempW),
			background,ScaleMode.ScaleToFit,true,540.0f/960.0f);
		GUI.DrawTexture(                                                //绘制相册标题纹理图片，并实现屏幕自适应
			new Rect(170*ratioScaleTempW,20*ratioScaleTempH,200*ratioScaleTempW,100*ratioScaleTempH),
			album_texture,ScaleMode.ScaleToFit,true,200.0f/100.0f);
		//绘制左箭头按钮纹理图片，并实现屏幕自适应，以及对按钮是否被按下进行判定
		if (GUI.Button(new Rect(20 * ratioScaleTempW, 145 * ratioScaleTempH, 50 * ratioScaleTempW, 50 * ratioScaleTempH),
			left_texture,MyStyle)){
			index--;                                                    //示例图片数组索引自减
			if (index < 0) {                                            //若示例图片数组索引小于0
				index = 4;                                              //将索引值设为4
			}
		}

		//绘制示例图片1按钮纹理图片，并实现屏幕自适应，以及对按钮是否被按下进行判定
		if (GUI.Button(new Rect(70 * ratioScaleTempW, 130 * ratioScaleTempH, 80 * ratioScaleTempW, 80 * ratioScaleTempH),
			texture_1, MyStyle)) {
			index = 0;                                                  //设置示例图片数组的索引值为0
		}
		//绘制示例图片2按钮纹理图片，并实现屏幕自适应，以及对按钮是否被按下进行判定
		if (GUI.Button(new Rect(150 * ratioScaleTempW, 130 * ratioScaleTempH, 80 * ratioScaleTempW, 80 * ratioScaleTempH),
			texture_2, MyStyle)) {
			index = 1;                                                  //设置示例图片数组的索引值为1
		}
		//绘制示例图片3按钮纹理图片，并实现屏幕自适应，以及对按钮是否被按下进行判定
		if (GUI.Button(new Rect(230 * ratioScaleTempW, 130 * ratioScaleTempH, 80 * ratioScaleTempW, 80 * ratioScaleTempH),
			texture_3, MyStyle)){
			index = 2;                                                  //设置示例图片数组的索引值为2
		}
		//绘制示例图片4按钮纹理图片，并实现屏幕自适应，以及对按钮是否被按下进行判定
		if (GUI.Button(new Rect(310 * ratioScaleTempW, 130 * ratioScaleTempH, 80 * ratioScaleTempW, 80 * ratioScaleTempH),
			texture_4, MyStyle)){
			index = 3;                                                  //设置示例图片数组的索引值为3
		}
		//绘制示例图片5按钮纹理图片，并实现屏幕自适应，以及对按钮是否被按下进行判定
		if (GUI.Button(new Rect(390 * ratioScaleTempW, 130 * ratioScaleTempH, 80 * ratioScaleTempW, 80 * ratioScaleTempH),
			texture_5, MyStyle)){
			index = 4;                                                  //设置示例图片数组的索引值为4
		}
		//绘制示右箭头按钮纹理图片，并实现屏幕自适应，以及对按钮是否被按下进行判定
		if(GUI.Button(new Rect(470 * ratioScaleTempW, 145 * ratioScaleTempH, 50 * ratioScaleTempW, 50 * ratioScaleTempH),
			right_texture, MyStyle)){
			index++;                                                    //示例图片数组索引自加
			if (index > 4) {                                            //若示例图片数组索引大于4
				index = 0;                                              //将索引值设为0
			}
		}
		winRect = GUI.Window(0,winRect,DoMyWindow,"");        //绘制一个窗口
		//绘制示确定按钮纹理图片，并实现屏幕自适应，以及对按钮是否被按下进行判定
		if (GUI.Button(new Rect(70 * ratioScaleTempW, 830 * ratioScaleTempH, 100 * ratioScaleTempW, 50 * ratioScaleTempH),
			ok_texture, MyStyle)) {
			Debug.Log("显示的风景图片");                            //若被按下则打印提示信息
		}
		//绘制示返回按钮纹理图片，并实现屏幕自适应，以及对按钮是否被按下进行判定
		if(GUI.Button(new Rect(370 * ratioScaleTempW, 830 * ratioScaleTempH, 100 * ratioScaleTempW, 50 * ratioScaleTempH),
			return_texture,MyStyle)){
			Application.Quit();                                     //若被按下则退出程序
		}

		
	}

	void DoMyWindow(int windowID){                                      //声明DoMyWindow函数
		float ratioScaleTempH = Screen.height / 960.0f;                 //声明屏幕自适应的纵向缩放比变量
		float ratioScaleTempW = Screen.width / 540.0f;                  //声明屏幕自适应的横向缩放比变量
		//在刚绘制的窗口内，自定义一个区域并绘制一个与示例图片数组索引项对应的示例图片
		GUI.DrawTexture(new Rect(10 * ratioScaleTempW, 30 * ratioScaleTempH, 480 * ratioScaleTempW, 480 * ratioScaleTempH),
			scene[index], ScaleMode.ScaleToFit, true, 500.0f / 500.0f);
	}

}
