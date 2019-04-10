package com.afkl.cases.df.common;


import org.springframework.http.HttpEntity;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.client.HttpServerErrorException;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import lombok.extern.slf4j.Slf4j;
import static org.springframework.http.HttpStatus.BAD_REQUEST;
import static org.springframework.http.HttpStatus.SERVICE_UNAVAILABLE;
import java.util.ArrayList;
import java.util.List;
import org.springframework.http.HttpStatus;
@Slf4j
@ControllerAdvice
public class ExceptionController {
	private static final Logger log = LoggerFactory.getLogger(ExceptionController.class.getName());


	@ExceptionHandler(Exception.class)
	public final ResponseEntity<Object> handleAllExceptions(Exception ex) {
		List<String> details = new ArrayList<>();
		details.add(ex.getLocalizedMessage());
		return new ResponseEntity("Please check your source and origin code", HttpStatus.INTERNAL_SERVER_ERROR);
	}
	@ExceptionHandler(Throwable.class)
	public HttpEntity handleGlobalException(Throwable t) {
		log.error("Unable to process request.", t);
		return new ResponseEntity(SERVICE_UNAVAILABLE);
	}

	@ExceptionHandler(HttpServerErrorException.class)
	public HttpEntity handleGlobalException(HttpServerErrorException e) {
		return new ResponseEntity(e.getStatusCode());
	}

	@ExceptionHandler(IllegalArgumentException.class)
	public HttpEntity handleBadRequest() {
		return new ResponseEntity(BAD_REQUEST);
	}

}
