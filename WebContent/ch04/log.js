/**
 * DOM API를 사용해서 HTML 문서의 정보를 탐색하는 예제
 */
function log(msg){
	var console = document.getElementById("debugConsole");
	if(console != null){
		console.innerHTML += msg + "<br/>";
	}
}