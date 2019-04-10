package com.afkl.cases.df.filter;


import java.time.Duration;
import java.time.Instant;
import javax.servlet.Filter;
import javax.servlet.FilterChain;
import javax.servlet.FilterConfig;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.web.context.support.WebApplicationContextUtils;
import com.afkl.cases.df.requestdetails.services.MetricService;
import com.afkl.cases.df.util.Util;

@Component
public class MetricFilter implements Filter {
	 
    private MetricService metricService;
    @Autowired
	Util util;
    public void init(FilterConfig config) throws ServletException {
        metricService = (MetricService) WebApplicationContextUtils
         .getRequiredWebApplicationContext(config.getServletContext())
         .getBean("metricService");
        metricService.getFullMetric();
    }
 
    @Override
    public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain) 
      throws java.io.IOException, ServletException {
        HttpServletRequest httpRequest = ((HttpServletRequest) request);
        String req = httpRequest.getMethod() + " " + httpRequest.getRequestURI();
        Instant timeBeforeReq=util.getTimeinMillSec();
        chain.doFilter(request, response);
        Instant timeOnCompletionReq=util.getTimeinMillSec();
        int status = ((HttpServletResponse) response).getStatus();
        metricService.increaseCount(req, status,Duration.between(timeBeforeReq, timeOnCompletionReq).toMillis());
    }
}
