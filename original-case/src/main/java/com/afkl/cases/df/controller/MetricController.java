package com.afkl.cases.df.controller;


import javax.servlet.http.HttpServletRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.afkl.cases.df.requestdetails.Metric;
import com.afkl.cases.df.requestdetails.services.MetricService;

@RestController 
public class MetricController {
	@Autowired
    MetricService metricService ;
	
	/**
	 * @param request to display the request metrics
	 * @return
	 * 
	 * generate json for Metric class objects 
	 * request details json
	 */
	@RequestMapping(value = "/metric", method = RequestMethod.GET)
	@ResponseBody
	
	public Metric getStatusMetric(HttpServletRequest request) {
	    return metricService.getFullMetric();
	}
}
