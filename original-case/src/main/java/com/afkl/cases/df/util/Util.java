package com.afkl.cases.df.util;

import static java.lang.String.format;
import static java.util.Arrays.asList;
import java.io.UnsupportedEncodingException;
import java.net.URLEncoder;
import java.nio.charset.Charset;
import java.time.Instant;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;
import java.util.concurrent.Future;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.oauth2.client.OAuth2RestTemplate;
import org.springframework.security.oauth2.client.token.grant.client.ClientCredentialsResourceDetails;
import org.springframework.stereotype.Component;

import com.afkl.cases.df.common.ExceptionController;

@Component
public class Util {


	
	private static final Logger log = LoggerFactory.getLogger(ExceptionController.class.getName());
	private static final String clientId = "travel-api-client";//clientId
	private static final String clientSecret = "psw";//client secret
	private static final String tokenUrl = "http://localhost:%d/oauth/token";

	/**
	 * @return Rest template wit access token
	 * 
	 */
	public  OAuth2RestTemplate getClientCredentials() { 
		ClientCredentialsResourceDetails resourceDetails = new ClientCredentialsResourceDetails();
		resourceDetails.setAccessTokenUri(format(tokenUrl, 8080));
		resourceDetails.setClientId(clientId);
		resourceDetails.setClientSecret(clientSecret);
		resourceDetails.setGrantType("client_credentials");
		resourceDetails.setScope(asList("read", "write"));
		OAuth2RestTemplate restTemplate = new OAuth2RestTemplate(resourceDetails);
		return restTemplate;
	}


	
	/**
	 * @param restTemplate resttemplate object
	 * @param url In StringForm 
	 * @return response in object format
	 */
	public  ResponseEntity<Object>  invokeUrls(OAuth2RestTemplate restTemplate,String url)    {
		HttpHeaders headers = new HttpHeaders();
		Charset utf8 = Charset.forName("UTF-8");
		MediaType mediaType = new MediaType("application", "json", utf8);
		headers.setContentType(mediaType);
		HttpEntity<String> entity = new HttpEntity<String>("parameters", headers);
		ResponseEntity<Object> response = null;
		try {
			response = restTemplate.exchange(format(url, 8080), HttpMethod.GET, entity, Object.class);
			response.getBody();
			response.getStatusCode();
			response.getHeaders();
		}
		catch(Exception e) 
		{
			response=new ResponseEntity<>("Please verify the airport code",HttpStatus.BAD_REQUEST);
			log.error("url::"+url+"  "+"  restTemplate"+restTemplate);
		}
		return response;
	}


	

	/**
	 *  call executor service to invoke multiple url in parallel
	 */
	private ExecutorService executor = Executors.newSingleThreadExecutor();
	public Future<ResponseEntity<Object>> callURLAsync(OAuth2RestTemplate restTemplate,String urlInStringForm) {  
		return executor.submit(() -> {
			return  invokeUrls(restTemplate,urlInStringForm) ;
		});
	}

	/** 
	 * @return current time
	 */
	public Instant getTimeinMillSec() {
		Instant instant = Instant.now();
		return instant;
	}

}
