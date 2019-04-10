package com.afkl.cases.df.location;

import org.springframework.stereotype.Component;

@Component
public class Locations
{
    private Locations parent;

    private String code;

    private String name;

    private Coordinates coordinates;

    private String description;

    public Locations getParent ()
    {
        return parent;
    }

    public void setParent (Locations parent)
    {
        this.parent = parent;
    }

    public String getCode ()
    {
        return code;
    }

    public void setCode (String code)
    {
        this.code = code;
    }

    public String getName ()
    {
        return name;
    }

    public void setName (String name)
    {
        this.name = name;
    }

    public Coordinates getCoordinates ()
    {
        return coordinates;
    }

    public void setCoordinates (Coordinates coordinates)
    {
        this.coordinates = coordinates;
    }

    public String getDescription ()
    {
        return description;
    }

    public void setDescription (String description)
    {
        this.description = description;
    }

    @Override
    public String toString()
    {
        return "ClassPojo [parent = "+parent+", code = "+code+", name = "+name+", coordinates = "+coordinates+", description = "+description+"]";
    }
}
	
	
