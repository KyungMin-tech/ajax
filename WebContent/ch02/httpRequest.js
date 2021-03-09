/**
 * Ajax 용 모듈
*/
/*
  파라미터에서 한글 처리 방법
  var params = "name =" + encodeURIComponet("제로코");
  httpRequest.open("GET", "myfile.jsp?" + params, true);
 */

function getXMLHttpRequest(){
   if(window.ActiveXObject){
      try{
         return new ActiveXObject("Msxml2.XMLHTTP");
      } catch(e){
         try{
            return new ActiveXObject("Microsoft.XMLHTTP");
         } catch(el){
            return null;
         }
      } 
   } else if(window.XMLHttpRequest){
      return new XMLHttpRequest();
   } else {
      return null;
   }
}


var httpRequest = null;
function sendRequest(url, params, callback, method){
   httpRequest = getXMLHttpRequest();
   
   //method 방식 처리  - GET으로 받음. 
   var httpMethod = method ? method : 'GET'; 
   if(httpMethod !='GET' && httpMethod !='POST'){
      httpMethod = 'GET';
   }
   
   //파라미터가 없는 경우 처리
   var httpParams = (params == null || params == '') ? null : params;
   
   //url 처리 - 파라미터 붙이기 
   var httpUrl = url;
   if(httpMethod !='GET' && httpMethod !='POST'){
      httpUrl = httpUrl +"?" + httpParams;
   }
   
   //보냄
   httpRequest.open(httpMethod, httpUrl, true);
   httpRequest.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
   httpRequest.onreadystatechange = callback;
   httpRequest.send(httpMethod == 'POST' ? httpParams : null);
   
}