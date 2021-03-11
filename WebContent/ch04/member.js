/**
작성자 : 민경민
 prototype을 사용한 자바스크립트 클래스 만들기
자바스크립트에는 Date, RegExp, String등의 클래스가 있고 이렇게 자바스크립트가 
기본적으로 제공하고 있는 클래스 외에 추가적으로 개발자가 직접 새로운 클래스를 
정의할 수 있다.
 */
//새로운 클래스르 정의하기 위해서 먼저 function을 사용해서 클래스를 추가 
Member = function(name, id, securityNo){
	this.name = name;
	this.id = id;
	this.securityNo = securityNo;
}
//클래스가 제공할 함수를 정의하는 것. 새로운 함수를 추가할 때 prototype을 사용한다 
//Member클래스에 setValue라는 함수를 추가하고 싶다면 아래와 같이
Member.prototype.setValue = function(newName, newId, newSecurityNo){
	this.name= newName;
	this.id = newId;
	this.securityNo = newSecurityNo;
}
Member.prototype.getAge = function(){
	//새로운 함수를 추가하였다면 아래와 같이 객체를 생성한 후 사용
	var birthYear = parseInt(this.securityNo.substring(0, 2));
	var code = this.securityNo.substring(6,7);
	if(code == '1' || code == '2'){
		birthYear += 1900;
	} else if (code == '3' || code == '4'){
		birthYear += 2000;
	}
	var today = new Date();
	return today.getFullYear() - birthYear;
}
//어떤 특정한 값을 리턴하는 함수를 추가하고 싶다면 return키워드를 사용
Member.prototype.toString = function() {
	return this.name + "[" + this.id + "]";
}