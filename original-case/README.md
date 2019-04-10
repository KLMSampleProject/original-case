Download project from git by url https://github.com/gpdotsingh/original-case.git

=================================================================================================

Steps to open project 
	
	
Clone this repo and start application by

./gradlew bootRun
	
	
=================================================================================================

Project run on port 8082 and 8080 

=================================================================================================


Hit URL 

http://localhost:8082/travel/index.html

Two tabs will appear Fare Details and Fare Metrics

	Fare Details tab functionality
	==============================
	
	Enter origin 
	
	On click of key inside origin an backend call from original-case will go to fetch matched airports
	http://localhost:8082/travel/airports which internally call http://localhost:8081/airports
	
	Select airport code from and to into your input boxes.
	
	Click search file button and internally it call http://localhost:8082/travel/fare/{airport source}/{airport destination}
	
	From backend three calls in parallel will go for http://localhost:8082/travel/fare/airport
	
	http://localhost:8081/airports/{source}
	http://localhost:8081/airports/{destination}
	http://localhost:8081/fare/{source}/{destination}
	
	backend original-case will bind result and return details which will contain 
	
	Amount
	Currency
	Origin details and Destination details 
		Code
		Name
		Description
		Latitude
		Longitude
	
	Fare Metrics tab functionality
	=================================
	
	It contains Request Statistics
		which include of
			Total number of request
			Minimum request time
			Maximum request time
			Request average time
			All request time
			Total number of request
			
		and Request Status Code with its count.
		
	It internally call http://localhost:8082/travel/metric which hold all the data
			
		