package com.afkl.cases.df.location;

import java.util.Set;

public class Parent {

	private String code;
	private String name;
	private String description;
	private Coordinates coordinates;
	private Set<Parent> parent;
	
	public String getCode() {
		return code;
	}
	public void setCode(String code) {
		this.code = code;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public Coordinates getCoordinates() {
		return coordinates;
	}
	public void setCoordinates(Coordinates coordinates) {
		this.coordinates = coordinates;
	}
	public Set<Parent> getParent() {
		return parent;
	}
	public void setParent(Set<Parent> parent) {
		this.parent = parent;
	}
}
