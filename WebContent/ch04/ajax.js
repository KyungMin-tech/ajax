/**
 작성자 : 민경민

자바스크립트에서 패키지 정의하기
자바스크립트 모듈을 만들다 보면 다른 사람이 만든 모듈과 이름이 겹치는 경우가 발생할 수 있다.
이런 문제를 해결하기 위하여 보통 자바나 C#과 같은 언어는 패키지 또는 어셈블리와 같은 개념을
제공하고 있다

예를 들어 "ajax" 라는 이름의 패키지를 추가하고 싶다면 "ajax"라는 객체를 만든 뒤
그 객체의 프로퍼티로 새로운 클래스나 함수를 정의하면 된다.
 */
//Object 클래스를 사용하지 않고 아무 값도 없는 JSON 표기법
var ajax = {};
ajax.xhr = {}; //ajax.xhr 패키지 지정
ajax.xhr.Request = function(url, params, callback, method){ // Request 클래스 정의
	this.url = url;
	this.params = params;
	this.callback = callback;
	this.method = method;
	this.send(); //Request 클래스 생성자, 생성과 동시에 send()호출
}
ajax.xhr.Request.prototype = { // Request 클래스에 함수 추가
	getXMLHttpRequest: function() { //JSON 표기법을 사용한 클래스 정의 
		if (window.ActiveXObject){ //IE6.0 , IE5.0이하
			try {
				return new ActiveXObject("Msxml2.XMLHTTP");
			} catch(e) {
				try {
					return new ActiveXObject("Microsoft.XMLHTTP");
				} catch(e1) { return null; }
			}
		} else if (window.XMLHttpRequest) {
			return new XMLHttpRequest();
		} else {
			return null;
		}
	},
	send: function() {
		this.req = this.getXMLHttpRequest();
		//req 프로퍼티에 XMLHttpRequest 객체를 저장
		var httpMethod = this.method ? this.method : 'GET';
		if (httpMethod != 'GET' && httpMethod != 'POST') {
			httpMethod = 'GET';
		}
		var httpParams = (this.params == null || this.params == '') ? null : this.params;
		var httpUrl = this.url;
		if (httpMethod == 'GET' && httpParams != null) {
			httpUrl = httpUrl + "?" + httpParams;
		}
		this.req.open(httpMethod, httpUrl, true);
		this.req.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
		var request = this; //XMLHttpRequest 객체의 readyState 값이
		this.req.onreadystatechange = function() { // 바뀔 때 이 객체의
			request.onStateChange.call(request); // <- 함수 호출
		}
		this.req.send(httpMethod == 'POST' ? httpParams : null);
	},
	onStateChange: function() { // 이 객체의 callback 프로퍼티에 할당된
		this.callback(this.req); // 함수를 호출한다.
	}
}