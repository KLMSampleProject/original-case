package com.afkl.cases.df.fare;

import java.util.Set;
import org.springframework.stereotype.Component;

@Component
public class CompleteFareDetail {
	
	private Set<FareLocations> fareLocations;
	private Fares fares;
	public Set<FareLocations> getFareLocations() {
		return fareLocations;
	}
	public void setFareLocations(Set<FareLocations> fareLocations) {
		this.fareLocations = fareLocations;
	}
	public Fares getFares() {
		return fares;
	}
	public void setFares(Fares fares) {
		this.fares = fares;
	}
	
}
