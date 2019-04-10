package com.afkl.cases.df.fare;

public class Fares
{
    private String amount;
    private String origin;
    private String destination;
    private String currency;
    public String getAmount ()
    {
        return amount;
    }
    public void setAmount (String amount)
    {
        this.amount = amount;
    }
    public String getOrigin ()
    {
        return origin;
    }
    public void setOrigin (String origin)
    {
        this.origin = origin;
    }
    public String getDestination ()
    {
        return destination;
    }
    public void setDestination (String destination)
    {
        this.destination = destination;
    }
    public String getCurrency ()
    {
        return currency;
    }
    public void setCurrency (String currency)
    {
        this.currency = currency;
    }
    @Override
    public String toString()
    {
        return "ClassPojo [amount = "+amount+", origin = "+origin+", destination = "+destination+", currency = "+currency+"]";
    }
}