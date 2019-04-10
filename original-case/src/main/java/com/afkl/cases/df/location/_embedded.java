package com.afkl.cases.df.location;


public class _embedded
{
    private Locations[] locations;

    public Locations[] getLocations ()
    {
        return locations;
    }

    public void setLocations (Locations[] locations)
    {
        this.locations = locations;
    }

    @Override
    public String toString()
    {
        return "ClassPojo [locations = "+locations+"]";
    }
}
