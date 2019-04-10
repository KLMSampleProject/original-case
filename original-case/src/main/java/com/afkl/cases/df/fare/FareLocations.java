package com.afkl.cases.df.fare;


public class FareLocations
{
    private FareLocations parent;

    private String code;

    private String name;

    private FareCoordinates coordinates;

    private String description;

    public FareLocations getParent ()
    {
        return parent;
    }

    public void setParent (FareLocations parent)
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

    public FareCoordinates getCoordinates ()
    {
        return coordinates;
    }

    public void setCoordinates (FareCoordinates coordinates)
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
	
	
