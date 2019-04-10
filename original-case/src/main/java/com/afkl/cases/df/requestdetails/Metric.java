package com.afkl.cases.df.requestdetails;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class Metric {
	
	@Autowired
	private MetricTimeDetail metrictimedetail;
	@Autowired
	private RequestMap urldetail;
	
	public MetricTimeDetail getMetrictimedetail() {
		return metrictimedetail;
	}
	public void setMetrictimedetail(MetricTimeDetail metrictimedetail) {
		this.metrictimedetail = metrictimedetail;
	}
	public RequestMap getUrldetail() {
		return urldetail;
	}
	public void setUrldetail(RequestMap urldetail) {
		this.urldetail = urldetail;
	}
	
}
