(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule, routingComponents */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routingComponents", function() { return routingComponents; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_fareoffer_fareoffer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/fareoffer/fareoffer.component */ "./src/app/components/fareoffer/fareoffer.component.ts");
/* harmony import */ var _components_request_details_request_details_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/request-details/request-details.component */ "./src/app/components/request-details/request-details.component.ts");





var routes = [
    { path: '', redirectTo: '', pathMatch: 'full' },
    {
        path: "fareOffer",
        component: _components_fareoffer_fareoffer_component__WEBPACK_IMPORTED_MODULE_3__["FareofferComponent"]
    },
    {
        path: "requestDetails",
        component: _components_request_details_request_details_component__WEBPACK_IMPORTED_MODULE_4__["RequestDetailsComponent"]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());

var routingComponents = [_components_fareoffer_fareoffer_component__WEBPACK_IMPORTED_MODULE_3__["FareofferComponent"], _components_request_details_request_details_component__WEBPACK_IMPORTED_MODULE_4__["RequestDetailsComponent"]];


/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<html background=\"assets/klm.jpg\">\n\n<head>\n        <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n    \n</head>\n<body>\n    <div class=\"overlay\"><div class=\"loader\"></div></div>\n        <div style=\"text-align:left;margin-bottom: 100px;\">\n                <div class=\"container-fluid\">   \n                    <div class=\"row\" style=\"margin-top: 10px;\">\n                        <div class=\"col-xs-6 .btn-info\" style=\"background-color: #e9eff5;margin-right: 40px;margin-left: 25px;border-radius:5px;\"  >\n                            <a [routerLink]=\"'/fareOffer'\" class=\"btn btn-default btn-md\"><b>Fare Details</b></a> \n                        </div>\n                        <div class=\"col-xs-6\" style=\"background-color: #e9eff5;margin-right: 40px;margin-left: 25px;border-radius:5px;\">\n                             <a [routerLink]=\"'/requestDetails'\" class=\"btn btn-default btn-md\"><b>Fare Metrics</b></a><br>\n                        </div>\n                    </div> \n                </div>\n            </div>\n<router-outlet></router-outlet>\n</body>\n</html>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'klmmockreservation';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _services_klmmock_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/klmmock.service */ "./src/app/services/klmmock.service.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _pipes_requestcount_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pipes/requestcount.pipe */ "./src/app/pipes/requestcount.pipe.ts");









var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["routingComponents"],
                _pipes_requestcount_pipe__WEBPACK_IMPORTED_MODULE_8__["RequestcountPipe"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_4__["HttpModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"]
            ],
            providers: [_services_klmmock_service__WEBPACK_IMPORTED_MODULE_5__["KlmmockService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]],
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/fareoffer/fareoffer.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/fareoffer/fareoffer.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZmFyZW9mZmVyL2ZhcmVvZmZlci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/fareoffer/fareoffer.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/fareoffer/fareoffer.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n    <div class=\"container\">\n    <h4 style=\"margin-bottom: 50px;\">Fare Details</h4>\n    <form #fareForm=\"ngForm\" (ngSubmit)=\"onSubmit(fareForm.value)\" autocomplete=\"off\">  \n        <div class=\"row\">            <div class=\"col-sm-4\" >\n                <span style=\"margin-left: 0px;margin-right: 40px;\" ><b>Origin :</b></span>\n                <input type=\"text\" [(ngModel)]=\"from\" name=\"from\"  (input)=\"onSearchChange($event.target.value,['from'])\" placeholder=\"Enter origin airports code...\" id=\"from\"  >\n                <div class=\"dropdwnListContainer\" style=\"max-height: 200px;overflow-y: scroll; background-color:lavender;\">\n                <div id=\"fromOrigin\"> </div>   \n                </div>  \n            </div>\n            <div class=\"col-sm-4\">\n                <span style=\"margin-left: 0px;margin-right: 40px;\"><b>Destination:</b></span> \n                <input type=\"text\" [(ngModel)]=\"to\" name=\"to\"  (input)=\"onSearchChange($event.target.value,['to'])\" placeholder=\"Enter destination airports code...\" id=\"to\" >\n                <div  class=\"dropdwnListContainer\" style=\"max-height: 200px;overflow-y: scroll; background-color:lavender;\">\n                <div id=\"toDest\" >  </div> \n                </div>\n            </div>\n            <div class=\"col-sm-4\" ><input class=\"searchButton\" type=\"submit\" value=\"Search Flights\">\n            </div> \n        </div>\n    </form>\n  </div>\n  \n  <!--Display fare-->\n  \n  <div  style=\"margin-top: 15px; background-color:aliceblue;\" [hidden]=\"hide\" *ngIf=\"displayData\">\n    <table class=\"table \">\n      <thead class=\"thead-dark\">\n    <tr>\n      <th>Amount</th>\n      <th>Currency</th>\n      <th>Origin</th>\n      <th>Destination</th>\n    </tr>\n    </thead>\n    <tbody>\n        <tr>\n      <td>{{airportData.fares.amount}}</td>\n      <td>{{airportData.fares.currency}}</td>\n      <td>  \n        <div class=\"row\">\n        <div class=\"col-xs-2\"><b> Code:&nbsp;&nbsp;</b></div>\n        <div class=\"col-xs-10\">{{airportData.fareLocations[0].code}}</div>\n        </div>\n        <div class=\"row\">\n        <div class=\"col-xs-2\"><b> Name:&nbsp;&nbsp;</b></div>\n        <div class=\"col-xs-10\">{{airportData.fareLocations[0].name}}</div>\n        </div>\n        <div class=\"row\">\n        <div class=\"col-xs-2\"><b> Description:&nbsp;&nbsp;</b></div>\n        <div class=\"col-xs-10 wrapper\"><div class=\"left\"><span>{{airportData.fareLocations[0].description}}</span></div></div>\n        </div>\n        <div class=\"row\">\n        <div class=\"col-xs-2\"><b> Lattitude:&nbsp;&nbsp;</b></div>\n        <div class=\"col-xs-4\">{{airportData.fareLocations[0].coordinates.latitude}}</div>\n        <div class=\"col-xs-2\"><b>&nbsp;&nbsp; Longitude:&nbsp;&nbsp;</b></div>\n        <div class=\"col-xs-4\">{{airportData.fareLocations[0].coordinates.longitude}}</div>\n        </div>\n        </td>\n        <td>\n        <div class=\"row\">\n        <div class=\"col-xs-2\"><b> Code:&nbsp;&nbsp;</b></div>\n        <div class=\"col-xs-10\">{{airportData.fareLocations[1].code}}</div>\n        </div>\n        <div class=\"row\">\n        <div class=\"col-xs-2\"><b> Name:&nbsp;&nbsp;</b></div>\n        <div class=\"col-xs-10\">{{airportData.fareLocations[1].name}}</div>\n        </div>\n        <div class=\"row\">\n        <div class=\"col-xs-2\"><b> Description:&nbsp;&nbsp;</b></div>\n        <div class=\"col-xs-10\">{{airportData.fareLocations[1].description}}</div>\n        </div>\n        <div class=\"row\">\n        <div class=\"col-xs-2\"><b> Lattitude:&nbsp;&nbsp;</b></div>\n        <div class=\"col-xs-4\">{{airportData.fareLocations[1].coordinates.latitude}}</div>\n        <div class=\"col-xs-2\"><b>&nbsp;&nbsp; Longitude:&nbsp;&nbsp;</b></div>\n        <div class=\"col-xs-4\">{{airportData.fareLocations[1].coordinates.longitude}}</div>\n        </div>\n      </td>\n    </tr>\n    </tbody>\n  </table>\n  </div>\t\t\n  \n  "

/***/ }),

/***/ "./src/app/components/fareoffer/fareoffer.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/fareoffer/fareoffer.component.ts ***!
  \*************************************************************/
/*! exports provided: FareofferComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FareofferComponent", function() { return FareofferComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_klmmock_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/klmmock.service */ "./src/app/services/klmmock.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var FareofferComponent = /** @class */ (function () {
    function FareofferComponent(_service, _router) {
        this._service = _service;
        this._router = _router;
    }
    FareofferComponent.prototype.ngOnInit = function () {
        this.displayData = false;
        this.hide = true;
        $(document).ready(function () {
            $(".searchButton").on("click", function () {
                $.startLoader();
            });
        });
        $.closeLoader = function () {
            $(".overlay").hide();
        };
        $.startLoader = function () {
            $(".overlay").show();
            setTimeout(function () { $.closeLoader; }, 12000);
        };
    };
    FareofferComponent.prototype.onSearchChange = function (searchValue, id) {
        var _this = this;
        $.startLoader();
        this.inputKeyWord = id;
        this.inputValue = searchValue;
        this._service.getAirportDetails(searchValue).subscribe(function (response) {
            _this.data = response;
            _this.onClick();
        }, function (error) {
            if (error.error instanceof Error) {
                console.log("Client side error");
            }
            else {
                console.log("Server side error");
            }
        });
    };
    FareofferComponent.prototype.onClick = function () {
        this.displayRequestData();
    };
    FareofferComponent.prototype.onSubmit = function (locationDetail) {
        var _this = this;
        this.from = $('#from').val();
        this.to = $('#to').val();
        this._service.getFare($('#from').val(), $('#to').val()).subscribe(function (response) {
            _this.hide = false;
            _this.displayData = true;
            _this.airportData = _this._service.completeFareDetail;
            _this.inputKeyWord = "NA";
            _this.onClick();
            $.closeLoader();
        }, function (error) {
            alert("Please correct orign and destination");
            if (error.error instanceof Error) {
                console.log("Client side error in fetching fare");
            }
            else {
                console.log("Server side error in fetching fare");
            }
        });
    };
    FareofferComponent.prototype.displayRequestData = function () {
        var parentDivContenet = "";
        var divContentInitial = '<div class="dropdwList" [(ngModel)]="divModel" id="idTobereplaced" style="padding-left: 10px;"  onclick="setInputTextvalue(this.id,inputId)">';
        var divContent = '<h6><u>code</u></h6> <p> airportName</p></div>';
        $(".dropdwnListContainer").css("display", "block");
        $("#toDest").empty();
        $("#fromOrigin").empty();
        if (this.inputKeyWord != "to" && this.inputKeyWord != "from") {
            console.log(this.inputKeyWord);
            return;
        }
        for (var count = 0; count < this._service.airportModel._embedded.locations.length; count++) {
            var inputSearchedvalue = this.inputValue.toUpperCase();
            var codeLocal = this._service.airportModel._embedded.locations[count].code;
            //   console.log(codeLocal);  
            if (codeLocal != "" && (codeLocal.includes(this.inputValue) || codeLocal.includes(inputSearchedvalue))) {
                var divInitials = divContentInitial.replace('idTobereplaced', codeLocal);
                divInitials = divInitials.replace('inputId', this.inputKeyWord);
                divInitials = divInitials.replace('divModel', codeLocal + "Model");
                var localDivContent = divContent.replace('code', this._service.airportModel._embedded.locations[count].code);
                localDivContent = localDivContent.replace('airportName', this._service.airportModel._embedded.locations[count].name);
                if (parentDivContenet != "") {
                    parentDivContenet = parentDivContenet + divInitials + localDivContent;
                }
                else {
                    parentDivContenet = divInitials + localDivContent;
                }
            }
        }
        if (this.inputKeyWord == "from") {
            $("#fromOrigin").html(parentDivContenet);
        }
        else if (this.inputKeyWord == "to") {
            $("#toDest").html(parentDivContenet);
        }
        $.closeLoader();
    };
    FareofferComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-fareoffer',
            template: __webpack_require__(/*! ./fareoffer.component.html */ "./src/app/components/fareoffer/fareoffer.component.html"),
            styles: [__webpack_require__(/*! ./fareoffer.component.css */ "./src/app/components/fareoffer/fareoffer.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_klmmock_service__WEBPACK_IMPORTED_MODULE_2__["KlmmockService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], FareofferComponent);
    return FareofferComponent;
}());



/***/ }),

/***/ "./src/app/components/request-details/request-details.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/components/request-details/request-details.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcmVxdWVzdC1kZXRhaWxzL3JlcXVlc3QtZGV0YWlscy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/request-details/request-details.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/components/request-details/request-details.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<html>\n<head>\n  <title>\n\n  </title>\n</head>\n<body>\n    <div class=\"container\" *ngIf=\"hide\">\n        <h4>Request Statistics </h4>\n        <br>\n        <br>\n        <div class=\"row\">\n          <div class=\"col-sm-6\" style=\"background-color:lavender;\">\n        <div class=\"table-responsive\">\n          <table class=\"table \">\n            <tbody>\n              <tr>\n                <td><b>Total number of request</b></td> <td>{{metricdata.metrictimedetail.totalCount}}</td>\n              </tr>\n              <tr>\n                <td><b>Minimum request time</b></td> <td>{{metricdata.metrictimedetail.minTime}}</td>\n              </tr>\n              <tr>\n                <td><b>Maximum request time</b></td> <td>{{metricdata.metrictimedetail.maxTime}}</td>\n              </tr>\n              <tr>\n                <td><b>Request average time</b></td> <td>{{metricdata.metrictimedetail.avgTime}}</td>\n              </tr>\n              <tr>\n                <td><b>All request time</b></td> <td>{{metricdata.metrictimedetail.totalTime}}</td>\n              </tr>\n              \n            </tbody>\n          </table>\n        </div>\t\n         </div>\n          <div class=\"col-sm-6\" style=\"background-color:lavender;\">\n              <div *ngFor=\"let item of requestStatus | keyvalue\">        \n                  <div class=\"table-responsive\">\n                          <table class=\"table \">\n                            <tbody>\n                              <tr>\n                                <td><b>Request Status Code:</b></td>\n                        <td> {{item.key}} </td>\n                        <td><b>Count: </b></td> \n                        <td>{{item.value|requestcount}}</td>\n                              </tr>\n                        </tbody>\n                    </table>\n                  </div>\t\t\t \n                </div>\n          </div>\n        </div>\n      </div>\n     \n</body>\n</html>"

/***/ }),

/***/ "./src/app/components/request-details/request-details.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/request-details/request-details.component.ts ***!
  \*************************************************************************/
/*! exports provided: RequestDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestDetailsComponent", function() { return RequestDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_klmmock_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/klmmock.service */ "./src/app/services/klmmock.service.ts");



var RequestDetailsComponent = /** @class */ (function () {
    function RequestDetailsComponent(_service) {
        this._service = _service;
    }
    RequestDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.hide = false;
        this._service.getMetric().subscribe(function (response) {
            _this.metricdata = response;
            _this.requestStatus = _this.metricdata.urldetail.requestMap;
            if (null != _this.requestStatus) {
                _this.hide = true;
            }
        }, function (error) {
            if (error.error instanceof Error) {
                console.log("Client side error");
            }
            else {
                console.log("Server side error");
            }
        });
    };
    RequestDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-request-details',
            template: __webpack_require__(/*! ./request-details.component.html */ "./src/app/components/request-details/request-details.component.html"),
            styles: [__webpack_require__(/*! ./request-details.component.css */ "./src/app/components/request-details/request-details.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_klmmock_service__WEBPACK_IMPORTED_MODULE_2__["KlmmockService"]])
    ], RequestDetailsComponent);
    return RequestDetailsComponent;
}());



/***/ }),

/***/ "./src/app/pipes/requestcount.pipe.ts":
/*!********************************************!*\
  !*** ./src/app/pipes/requestcount.pipe.ts ***!
  \********************************************/
/*! exports provided: RequestcountPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestcountPipe", function() { return RequestcountPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var RequestcountPipe = /** @class */ (function () {
    function RequestcountPipe() {
    }
    RequestcountPipe.prototype.transform = function (requestmap) {
        var data = 0;
        console.log(">>>" + requestmap[0].url);
        for (var reqSize = 1; reqSize <= requestmap.length; reqSize++) {
            data = reqSize;
        }
        return data;
    };
    RequestcountPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'requestcount'
        })
    ], RequestcountPipe);
    return RequestcountPipe;
}());



/***/ }),

/***/ "./src/app/services/klmmock.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/klmmock.service.ts ***!
  \*********************************************/
/*! exports provided: KlmmockService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KlmmockService", function() { return KlmmockService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");





var KlmmockService = /** @class */ (function () {
    function KlmmockService(_http) {
        this._http = _http;
        this.fareUrl = "http://localhost:8082/travel/fare/";
        this.metricurl = "http://localhost:8082/travel/metric";
        this.airportUrl = "http://localhost:8082/travel/airports?size=50";
    }
    KlmmockService.prototype.getAirportDetails = function (term) {
        var _this = this;
        return this._http.get(this.airportUrl + "&term=" + term).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) {
            _this.airportModel = response.json();
            return response.json();
        }, function (error) {
            _this.handleError(error);
        }));
    };
    KlmmockService.prototype.getFare = function (origin, destination) {
        var _this = this;
        return this._http.get(this.fareUrl + origin + "/" + destination).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) {
            _this.completeFareDetail = response.json();
        }, function (error) {
            _this.handleError(error);
        }));
    };
    KlmmockService.prototype.getMetric = function () {
        var _this = this;
        return this._http.get(this.metricurl).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) {
            return response.json();
        }, function (error) {
            _this.handleError(error);
        }));
    };
    KlmmockService.prototype.handleError = function (error) {
        console.error("Error is " + error);
        return rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"].throw(error || "Internal server error");
    };
    KlmmockService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"]])
    ], KlmmockService);
    return KlmmockService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\study\Angular\klmmockreservation\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map