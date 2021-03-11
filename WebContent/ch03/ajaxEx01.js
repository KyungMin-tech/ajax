/** 
 * 소스 표시 버튼 클릭시 변경될 내용을 받아올 자바스크립트 파일
 */

var xhrObject;
function createXHR(){
	if(window.ActiveXObject){
			xhrObject= new ActiveXObject("Microsoft.XMLHTTP");
	}
	else if(window.XMLHttpRequest){
		xhrObject= new XMLHttpRequest();
	}
}

function startMethod(){
	
	//XMLHttpRequest객체 생성
	createXHR();
	
	//console.log("startMethod()");
	xhrObject.onreadystatechange = resultProcess; 
	/*
	 
	 # 참고
	 resultProcess() 로 하면 그시점에 함수가 바로 호출되므로, readyState는 0이된다.
	  함수를 가리키는 레퍼런스로 resultProcess로 해주는 이유다.
	  이벤트로 들어오는 거니깐 함수호출할때 resultProcess()로 쓰면 안됨.
	  
	 */
	
	xhrObject.open("GET", "ajaxEx01.xml", true);
	xhrObject.send(null);
	//console.log("startMethod() end");
}

function resultProcess(){
	if(xhrObject.readyState == 4){
		if(xhrObject.status == 200){
			console.log("success");
			document.getElementById("displayArea").innerHTML = xhrObject.responseText;
		}
	} else{
		console.log("xhrObject.readyState : "  + xhrObject.readyState )
	}
}