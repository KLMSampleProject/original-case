package com.afkl.cases.df.location;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.oauth2.client.OAuth2RestTemplate;
import org.springframework.stereotype.Component;

import com.afkl.cases.df.util.Util;
import com.fasterxml.jackson.databind.ObjectMapper;

@Component
public class AirPortServices {
	@Autowired
	Util util;
	public AirportRepo jsonToAirportObj(String lang, String size, String page, String url,String term, AirportRepo ar,
			ObjectMapper mapper, OAuth2RestTemplate restTemplate) {
		url=url+"?size="+size+"&page="+page+"&lang="+lang+"&term="+term;
		try {
			ResponseEntity<Object> responseEntity=util.invokeUrls(restTemplate, url);
			if(null==responseEntity){
				throw new Exception();
			}
			else {
				String jsonObj=mapper.writerWithDefaultPrettyPrinter().writeValueAsString(responseEntity.getBody());
				ar=mapper.readValue(jsonObj,AirportRepo.class);
			}
		}
		catch(Exception e) {
			e.getMessage();
			e.printStackTrace();
			
		}
		return ar;
	}
}
