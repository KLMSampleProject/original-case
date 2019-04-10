package com.afkl.cases.df.requestdetails.services;

import java.util.ArrayList;
import java.util.HashMap;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.afkl.cases.df.requestdetails.Metric;
import com.afkl.cases.df.requestdetails.UrlDetail;

@Service

public class MetricService {

	@Autowired
	Metric statusDetail;
	/**
	 * @param request
	 * @param status
	 * @param timeDiff
	 * 
	 *  take request status request url and request time taken as parameter, and bind data into Metric.
	 *  Called in filter
	 */
	public void increaseCount(String request, int status,long timeDiff) {
		if(statusDetail.getMetrictimedetail().getMaxTime()<timeDiff) 
		{
			statusDetail.getMetrictimedetail().setMaxTime(timeDiff);
		}
		if(statusDetail.getMetrictimedetail().getMinTime()>timeDiff||statusDetail.getMetrictimedetail().getMinTime()==0)
		{
			statusDetail.getMetrictimedetail().setMinTime(timeDiff);
		}	
		long totaleTime=statusDetail.getMetrictimedetail().getTotalTime();
		int count=statusDetail.getMetrictimedetail().getTotalCount();
		statusDetail.getMetrictimedetail().setTotalCount(count+1);
		statusDetail.getMetrictimedetail().setTotalTime(totaleTime+timeDiff);
		statusDetail.getMetrictimedetail().setAvgTime((totaleTime+timeDiff)/(count+1));
		if(null==statusDetail.getUrldetail().getRequestMap()||!statusDetail.getUrldetail().getRequestMap().containsKey(status))
		{
			ArrayList<UrlDetail> urlList=new ArrayList<UrlDetail> ();
			UrlDetail urlDetail=new UrlDetail();
			urlDetail.setTime(timeDiff);
			urlDetail.setUrl(request);
			urlList.add(urlDetail);
			HashMap<Integer ,ArrayList<UrlDetail>> requestMap=new HashMap<Integer ,ArrayList<UrlDetail>>();
			if(null!=statusDetail.getUrldetail().getRequestMap()) 
			{
				requestMap=statusDetail.getUrldetail().getRequestMap();
				requestMap.put(status, urlList);
			}
			else 
			{
				requestMap.put(status, urlList);
			}
			statusDetail.getUrldetail().setRequestMap(requestMap);
		}
		else 
		{
			UrlDetail urlDetail=new UrlDetail();
			urlDetail.setTime(timeDiff);
			urlDetail.setUrl(request);
			statusDetail.getUrldetail().getRequestMap().get(status).add(urlDetail);
		}
	}

	public Metric getFullMetric() {
		return statusDetail;
	}
}
