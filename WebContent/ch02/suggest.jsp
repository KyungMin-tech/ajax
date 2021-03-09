<%@page import="java.util.Collections"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@	page import="java.util.List" %>
<%!
	String[] keywords = {
			"AJAX",
			"AJAX 실전 프로그래밍",
			"자바",
			"자바 프로그래밍",
			"자바 서버 페이지",
			"자바스터디",
			"자바서비스",
			"자바캔"
	};
	public List search(String keyword){
		if(keyword == null || keyword.equals(""))
			return Collections.EMPTY_LIST;
		keyword = keyword.toUpperCase();
		List result = new java.util.ArrayList(8);
		for(int i = 0; i< keywords.length; i++){
			if(((String)keywords[i]).startsWith(keyword)){
				result.add(keywords[i]);
			}
		}
		return result;
	}
%>
<%
	request.setCharacterEncoding("UTF-8");
	String keyword = request.getParameter("keyword");
	List keywoedList = search(keyword);
	out.print(keywoedList.size());
	out.print("|");
	for(int i = 0; i < keywoedList.size(); i++){
		String key = (String)keywoedList.get(i);
		out.print(key);
		if(i < keywoedList.size() - 1){
			out.print(",");
		}
	}
%>