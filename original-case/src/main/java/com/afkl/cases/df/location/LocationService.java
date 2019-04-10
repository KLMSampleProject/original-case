package com.afkl.cases.df.location;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.oauth2.client.OAuth2RestTemplate;
import org.springframework.stereotype.Component;
import com.afkl.cases.df.util.Util;
import com.fasterxml.jackson.databind.ObjectMapper;

@Component
public class LocationService {
	@Autowired
	Util util;
	@Autowired
	Locations locations;
	public Locations jsonToLocationObj(String airportName, String url, ObjectMapper mapper, OAuth2RestTemplate restTemplate) throws Exception {
		try {
			ResponseEntity<Object> responseEntity=util.invokeUrls(restTemplate, url+"/"+airportName);
			if(null==responseEntity){
				throw new Exception();
			}
			else {
				String jsonObj=mapper.writerWithDefaultPrettyPrinter().writeValueAsString(responseEntity.getBody());
				locations=mapper.readValue(jsonObj,Locations.class);
			}
		}
		catch(Exception e) {
			e.getMessage();
			throw new Exception();
		}
		return locations;
	}
}
