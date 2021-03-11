package util;

public class Util {
	public static String toJS(String str) {
		return str.replace("\\", "\\\\").replaceAll("\'", "\\\'").replace("\"", "\\\"").replace("\r\n", "\\n").replace("\n", "\\n");
	}
}
