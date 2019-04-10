package com.afkl.cases.df.requestdetails;

import java.util.ArrayList;
import java.util.HashMap;

import org.springframework.stereotype.Component;

@Component
public class RequestMap {

	private HashMap<Integer ,ArrayList<UrlDetail>> requestMap;

	public HashMap<Integer, ArrayList<UrlDetail>> getRequestMap() {
		return requestMap;
	}

	public void setRequestMap(HashMap<Integer, ArrayList<UrlDetail>> requestMap) {
		this.requestMap = requestMap;
	}
	
}
