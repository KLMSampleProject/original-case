package com.afkl.cases.df.location;

public class AirportRepo
{
    private _embedded _embedded;

    private Page page;

    public _embedded get_embedded ()
    {
        return _embedded;
    }

    public void set_embedded (_embedded _embedded)
    {
        this._embedded = _embedded;
    }

    public Page getPage ()
    {
        return page;
    }

    public void setPage (Page page)
    {
        this.page = page;
    }

    @Override
    public String toString()
    {
        return "ClassPojo [_embedded = "+_embedded+", page = "+page+"]";
    }
}
			