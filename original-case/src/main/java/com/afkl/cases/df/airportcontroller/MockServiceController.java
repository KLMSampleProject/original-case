package com.afkl.cases.df.airportcontroller;

import static org.springframework.web.bind.annotation.RequestMethod.GET;
import java.util.LinkedHashSet;
import java.util.Set;
import java.util.concurrent.Future;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.env.Environment;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.oauth2.client.OAuth2RestTemplate;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import com.afkl.cases.df.fare.CompleteFareDetail;
import com.afkl.cases.df.fare.FareLocations;
import com.afkl.cases.df.fare.Fares;
import com.afkl.cases.df.location.AirPortServices;
import com.afkl.cases.df.location.AirportRepo;
import com.afkl.cases.df.location.LocationService;
import com.afkl.cases.df.location.Locations;
import com.afkl.cases.df.util.Util;
import com.fasterxml.jackson.databind.ObjectMapper;


@RestController
@RequestMapping("/")

public class MockServiceController {

	@Autowired
	private Environment env; 
	@Autowired
	Util util;
	@Autowired
	LocationService locationService;
	@Autowired
	AirPortServices airPortServices;
	/**
	 * @param lang language = english
	 * @param size size of page
	 * @param page page number
	 * @param term search initials
	 * @param airportName airport initial or codes
	 * @return Return airport details or airport with specific code details
	 * @throws Exception if URL is incorrect 
	 */
	@RequestMapping(method = GET,value= {"/airports","/airports/{airportName}"})
	public Object airportDetails(@RequestParam(value = "lang", defaultValue = "en") String lang,@RequestParam(value = "size", defaultValue = "25") String size,@RequestParam(value = "page", defaultValue = "1") String page,@RequestParam(value = "term", required=false,defaultValue = "A") String term, @PathVariable (name = "airportName", required = false) String airportName) throws Exception {
		String url=env.getProperty("app.airportBaseURL");
		Object obj;
		AirportRepo ar = null;
		ObjectMapper mapper = new ObjectMapper();
		OAuth2RestTemplate restTemplate = util.getClientCredentials(); 
		if (null!=airportName) {
			Locations locations=locationService.jsonToLocationObj(airportName, url, mapper, restTemplate);
			obj=locations;
		}
		else {
			ar = airPortServices.jsonToAirportObj(lang, size, page, url,term, ar, mapper, restTemplate);
			obj=ar;
		}
		return obj;
	}





	@Autowired
	CompleteFareDetail completeFareDetail  ;

	/**
	 * @param origin airport origin code
	 * @param destination airport destination code
	 * @return return fare ,origin and destination details
	 * @throws Exception in case origin and destination is invalid
	 */
	@RequestMapping(method = GET,value= {"/fare/{origin}/{destination}"})
	public Object getFareDetails( @PathVariable (name = "origin", required = true) String origin,@PathVariable (name = "destination", required = true) String destination) throws Exception {
		OAuth2RestTemplate restTemplate =  util.getClientCredentials(); 
		ObjectMapper mapper1 = new ObjectMapper();
		ObjectMapper mapper2= new ObjectMapper();
		ObjectMapper mapper3= new ObjectMapper();
		ResponseEntity<Object> originResponse;
		ResponseEntity<Object> destinationResponse;
		ResponseEntity<Object> fareResponse;
		
		String locationUrl=env.getProperty("app.airportBaseURL");
		String fareUrl=env.getProperty("app.fareBaseUrl")+"/"+origin+"/"+destination;
		Future<ResponseEntity<Object>> future1=util.callURLAsync(restTemplate, locationUrl+"/"+origin);
		Future<ResponseEntity<Object>> future2=util.callURLAsync(restTemplate, locationUrl+"/"+destination);
		Future<ResponseEntity<Object>> future3=util.callURLAsync(restTemplate, fareUrl);
		fareResponse=future3.get();
		destinationResponse=future2.get();
		originResponse=future1.get();
		if(fareResponse.getStatusCode()==HttpStatus.OK && destinationResponse.getStatusCode()==HttpStatus.OK  &&originResponse.getStatusCode()==HttpStatus.OK) {
			
			String jsonObj1=mapper1.writerWithDefaultPrettyPrinter().writeValueAsString(originResponse.getBody());
			String jsonObj2=mapper2.writerWithDefaultPrettyPrinter().writeValueAsString(destinationResponse.getBody());
			String jsonObj3=mapper3.writerWithDefaultPrettyPrinter().writeValueAsString(fareResponse.getBody());
			
			FareLocations fareOrigin=mapper1.readValue(jsonObj1,FareLocations.class);
			FareLocations fareDestination=mapper2.readValue(jsonObj2,FareLocations.class);
			Fares fares=mapper3.readValue(jsonObj3,Fares.class);
			
			completeFareDetail.setFares(fares);
			Set<FareLocations>  fareLocations=new LinkedHashSet<FareLocations>();
			fareLocations.add(fareOrigin);
			fareLocations.add(fareDestination);
			completeFareDetail.setFareLocations(fareLocations);
		}
		return completeFareDetail;
	}


}
