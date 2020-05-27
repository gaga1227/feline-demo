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
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"app\">\n    <!-- heading for accessibility -->\n    <h1 class=\"visually-hidden\">Feline Demo</h1>\n\n    <!-- loading messages -->\n    <div class=\"app__loading-msg\" *ngIf=!isOwnerDataLoaded>\n        <span *ngIf=!isOwnerDataLoadError>Loading pet owners...</span>\n        <span *ngIf=isOwnerDataLoadError>Error loading pet owners :(</span>\n    </div>\n\n    <!-- section heading for accessibility -->\n    <h2 class=\"visually-hidden\">Lists of pets</h2>\n\n    <!-- owner category: container component for categorised owners' pets -->\n    <app-owner-category [owners]=\"owners\" [genderCategory]=\"'male'\"></app-owner-category>\n    <app-owner-category [owners]=\"owners\" [genderCategory]=\"'female'\"></app-owner-category>\n\n    <!-- for accessibility screen reader announcements -->\n    <div class=\"visually-hidden\" aria-live=\"polite\" [innerHTML]=announcementContent></div>\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".app {\n  max-width: 1350px;\n  margin: 0 auto;\n  padding: 30px 15px;\n  overflow: hidden; }\n  .app__loading-msg {\n    padding: 2em;\n    font-size: 18px;\n    font-weight: 500;\n    text-align: center; }\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_owners_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/owners-api.service */ "./src/app/services/owners-api.service.ts");
/* harmony import */ var _mappers_owner_mapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mappers/owner.mapper */ "./src/app/mappers/owner.mapper.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = /** @class */ (function () {
    function AppComponent(ownersApi) {
        this.ownersApi = ownersApi;
        // remote owner data loading states
        this.isOwnerDataLoaded = false;
        this.isOwnerDataLoadError = false;
        // owners array mapped from remote API data
        this.owners = [];
        // for accessibility live announcements
        this.announcementContent = '';
    }
    AppComponent.prototype.ngOnInit = function () {
        this._loadRemoteOwners();
    };
    /**
     * _loadRemoteOwners - load remote owners from API service
     *
     * @private
     * @return {void}
     */
    AppComponent.prototype._loadRemoteOwners = function () {
        var _this = this;
        this._makeAnnouncement('loading pet owners in progress');
        this.ownersApi.getOwners()
            .subscribe(function (data) {
            _this.isOwnerDataLoadError = false;
            _this.owners = _mappers_owner_mapper__WEBPACK_IMPORTED_MODULE_2__["OwnerMapper"].transform(data);
            var ownersCount = _this.owners.length;
            _this._makeAnnouncement(ownersCount + " owner" + (ownersCount > 1 ? 's' : '') + " loaded and displayed");
        }, function (errorResponse) {
            _this.isOwnerDataLoadError = true;
            _this._makeAnnouncement('error loading pet owners');
        }, function () {
            _this.isOwnerDataLoaded = true;
            _this._makeAnnouncement('loading pet owners complete');
        });
    };
    /**
     * _makeAnnouncement - method to update aria-live property value
     *
     * @param {string} text
     * @private
     * @return {void}
     */
    AppComponent.prototype._makeAnnouncement = function (text) {
        if (text === void 0) { text = ''; }
        this.announcementContent = text;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], AppComponent.prototype, "isOwnerDataLoaded", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], AppComponent.prototype, "isOwnerDataLoadError", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Array)
    ], AppComponent.prototype, "owners", void 0);
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-feline-demo',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_owners_api_service__WEBPACK_IMPORTED_MODULE_1__["OwnersApiService"]])
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_owner_category_owner_category_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/owner-category/owner-category.component */ "./src/app/components/owner-category/owner-category.component.ts");
/* harmony import */ var _components_pet_pet_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/pet/pet.component */ "./src/app/components/pet/pet.component.ts");
/* harmony import */ var _pipes_filter_pets__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pipes/filter-pets */ "./src/app/pipes/filter-pets.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _components_owner_category_owner_category_component__WEBPACK_IMPORTED_MODULE_4__["OwnerCategoryComponent"],
                _components_pet_pet_component__WEBPACK_IMPORTED_MODULE_5__["PetComponent"],
                _pipes_filter_pets__WEBPACK_IMPORTED_MODULE_6__["FilterPetsPipe"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/owner-category/owner-category.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/components/owner-category/owner-category.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"owner-category\" [attr.data-gender]=targetGender.toString().toLowerCase()>\n    <h3 class=\"owner-category__title\">\n        <span [innerHTML]=targetGender.toString().toLowerCase()></span>\n        <span class=\"visually-hidden\"> owners' pets</span>\n    </h3>\n\n    <!-- loading success: show owners feline list -->\n    <ol class=\"owner-category__list list--unstyled\">\n\n        <!-- owner felines -->\n        <li *ngFor=\"let pet of targetOwnersPets | filterPets: 'cat'; let i = index\"\n            class=\"owner-category__item\"\n            id=\"{{targetGender.toString().toLocaleLowerCase()}}-gender-owners-pet-{{i + 1}}\">\n\n            <!-- render pet component -->\n            <app-pet [pet]=\"pet\"></app-pet>\n        </li>\n    </ol>\n</div>\n"

/***/ }),

/***/ "./src/app/components/owner-category/owner-category.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/components/owner-category/owner-category.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".owner-category {\n  display: block;\n  width: auto;\n  text-align: center; }\n  .owner-category[data-gender='male'] .owner-category__title {\n    color: #147EFB; }\n  .owner-category[data-gender='female'] .owner-category__title {\n    color: #FC3158; }\n  .owner-category__title {\n    font-size: 40px;\n    text-transform: capitalize;\n    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.22);\n    letter-spacing: 4px; }\n  .owner-category__list {\n    text-align: inherit;\n    counter-reset: listCounter;\n    margin-top: 20px;\n    overflow: hidden; }\n  .owner-category__item {\n    position: relative;\n    display: -ms-inline-flexbox;\n    display: inline-flex;\n    -ms-flex-direction: column;\n        flex-direction: column;\n    -ms-flex-pack: justify;\n        justify-content: space-between;\n    counter-increment: listCounter;\n    background: white;\n    text-align: center;\n    box-sizing: border-box;\n    border-radius: 56px;\n    border-bottom: 4px solid rgba(0, 0, 0, 0.12);\n    margin: 16px 0;\n    padding: 32px 40px;\n    width: calc(100% - 32px);\n    height: auto;\n    overflow: hidden; }\n  .owner-category__item::before {\n      content: counter(listCounter);\n      background: #eee;\n      color: #aaa;\n      display: block;\n      position: absolute;\n      top: 28px;\n      left: 28px;\n      width: 36px;\n      height: 36px;\n      font-size: 18px;\n      font-weight: bold;\n      line-height: 30px;\n      border-radius: 50%;\n      border-top: 4px solid rgba(0, 0, 0, 0.12);\n      box-sizing: border-box;\n      overflow: hidden; }\n  @media screen and (min-width: 680px) {\n      .owner-category__item {\n        width: calc(50% - 32px);\n        margin: 16px; } }\n  @media screen and (min-width: 1170px) {\n      .owner-category__item {\n        width: calc(33.33% - 32px); } }\n"

/***/ }),

/***/ "./src/app/components/owner-category/owner-category.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/owner-category/owner-category.component.ts ***!
  \***********************************************************************/
/*! exports provided: OwnerCategoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OwnerCategoryComponent", function() { return OwnerCategoryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_gender_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/gender.enum */ "./src/app/models/gender.enum.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var OwnerCategoryComponent = /** @class */ (function () {
    function OwnerCategoryComponent() {
        this.owners = [];
        this.genderCategory = 'n/a';
        this.targetGender = _models_gender_enum__WEBPACK_IMPORTED_MODULE_1__["Gender"].UNKNOWN;
        this.targetOwnersPets = [];
    }
    OwnerCategoryComponent.prototype.ngOnInit = function () {
        this.targetGender = _models_gender_enum__WEBPACK_IMPORTED_MODULE_1__["Gender"].getGenderFromText(this.genderCategory);
    };
    OwnerCategoryComponent.prototype.ngOnChanges = function (changes) {
        // if owners input data is updated
        if (changes.owners !== undefined) {
            this.updateTargetOwners();
        }
    };
    /**
     * updateTargetOwners - returns a list of owners based on gender
     */
    OwnerCategoryComponent.prototype.updateTargetOwners = function () {
        var ownerDataList = this.owners;
        var targetOwners = [];
        // if no target gender specified, output all owners
        if (this.targetGender === _models_gender_enum__WEBPACK_IMPORTED_MODULE_1__["Gender"].UNKNOWN) {
            targetOwners = ownerDataList.slice();
        }
        else {
            // otherwise find matching owners with target gender
            var ownerDataLength = ownerDataList.length;
            for (var i = 0; i < ownerDataLength; i++) {
                var owner = ownerDataList[i];
                var ownerGender = _models_gender_enum__WEBPACK_IMPORTED_MODULE_1__["Gender"].getGenderFromText(owner.gender);
                if (ownerGender === this.targetGender) {
                    targetOwners.push(owner);
                }
            }
        }
        this.targetOwnersPets = this.getPetsFromTargetOwners(targetOwners);
    };
    /**
     * getPetsFromTargetOwners - get sorted pets from target owner list
     * @param targetOwners
     */
    OwnerCategoryComponent.prototype.getPetsFromTargetOwners = function (targetOwners) {
        var targetOwnersPets = targetOwners.reduce(function (accumulator, currentValue) {
            return accumulator.concat(currentValue.pets);
        }, []);
        return targetOwnersPets.sort();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], OwnerCategoryComponent.prototype, "owners", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], OwnerCategoryComponent.prototype, "genderCategory", void 0);
    OwnerCategoryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-owner-category',
            template: __webpack_require__(/*! ./owner-category.component.html */ "./src/app/components/owner-category/owner-category.component.html"),
            styles: [__webpack_require__(/*! ./owner-category.component.scss */ "./src/app/components/owner-category/owner-category.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], OwnerCategoryComponent);
    return OwnerCategoryComponent;
}());



/***/ }),

/***/ "./src/app/components/pet/pet.component.html":
/*!***************************************************!*\
  !*** ./src/app/components/pet/pet.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"pet\">\n    <h4 class=\"pet__title\" [innerHTML]=name></h4>\n    <p class=\"pet__type\" [innerHTML]=typeText [attr.aria-hidden]=\"true\"></p>\n</div>\n"

/***/ }),

/***/ "./src/app/components/pet/pet.component.scss":
/*!***************************************************!*\
  !*** ./src/app/components/pet/pet.component.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".pet__title {\n  color: #53D769;\n  text-align: center;\n  font-size: 28px;\n  line-height: 1.25;\n  margin: 0;\n  text-transform: uppercase;\n  text-shadow: 0 2px 1px #338333; }\n  .pet__title::before, .pet__title::after {\n    content: ' ~ '; }\n  .pet__type {\n  display: block;\n  width: auto;\n  height: auto;\n  margin: 16px auto 0 auto;\n  font-size: 48px;\n  line-height: 1; }\n"

/***/ }),

/***/ "./src/app/components/pet/pet.component.ts":
/*!*************************************************!*\
  !*** ./src/app/components/pet/pet.component.ts ***!
  \*************************************************/
/*! exports provided: PetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PetComponent", function() { return PetComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_pet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/pet */ "./src/app/models/pet.ts");
/* harmony import */ var _models_pet_type_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/pet-type.enum */ "./src/app/models/pet-type.enum.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PetComponent = /** @class */ (function () {
    function PetComponent() {
        this.pet = null;
        this.name = '';
        this.typeText = '';
    }
    PetComponent.prototype.ngOnInit = function () {
        // update internal component vars from Pet
        if (this.pet !== null) {
            this.name = this.pet.name;
            this.typeText = _models_pet_type_enum__WEBPACK_IMPORTED_MODULE_2__["PetType"].getPetTypeEmoji(this.pet.type);
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _models_pet__WEBPACK_IMPORTED_MODULE_1__["Pet"])
    ], PetComponent.prototype, "pet", void 0);
    PetComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-pet',
            template: __webpack_require__(/*! ./pet.component.html */ "./src/app/components/pet/pet.component.html"),
            styles: [__webpack_require__(/*! ./pet.component.scss */ "./src/app/components/pet/pet.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], PetComponent);
    return PetComponent;
}());



/***/ }),

/***/ "./src/app/mappers/owner.mapper.ts":
/*!*****************************************!*\
  !*** ./src/app/mappers/owner.mapper.ts ***!
  \*****************************************/
/*! exports provided: OwnerMapper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OwnerMapper", function() { return OwnerMapper; });
/* harmony import */ var _models_owner__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/owner */ "./src/app/models/owner.ts");
/* harmony import */ var _models_pet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/pet */ "./src/app/models/pet.ts");
/* harmony import */ var _models_gender_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/gender.enum */ "./src/app/models/gender.enum.ts");
/* harmony import */ var _models_pet_type_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/pet-type.enum */ "./src/app/models/pet-type.enum.ts");




var OwnerMapper = /** @class */ (function () {
    function OwnerMapper() {
    }
    /**
     * transform - map owner response data object list to list of Owner
     *
     * @returns {Array<Owner>}
     */
    OwnerMapper.transform = function (data) {
        var ownersData = data.slice();
        var dataLength = ownersData.length;
        var owners = [];
        for (var i = 0; i < dataLength; i++) {
            var _a = ownersData[i], name_1 = _a.name, gender = _a.gender, age = _a.age, pets = _a.pets;
            var petsData = Array.isArray(pets) ? pets : [];
            var ownerPets = [];
            var petsDataLength = petsData.length;
            for (var j = 0; j < petsDataLength; j++) {
                var petData = petsData[j];
                ownerPets.push(new _models_pet__WEBPACK_IMPORTED_MODULE_1__["Pet"](petData.name, _models_pet_type_enum__WEBPACK_IMPORTED_MODULE_3__["PetType"].getPetTypeFromText(petData.type)));
            }
            owners.push(new _models_owner__WEBPACK_IMPORTED_MODULE_0__["Owner"](name_1, _models_gender_enum__WEBPACK_IMPORTED_MODULE_2__["Gender"].getGenderFromText(gender), age, ownerPets));
        }
        return owners;
    };
    return OwnerMapper;
}());



/***/ }),

/***/ "./src/app/models/gender.enum.ts":
/*!***************************************!*\
  !*** ./src/app/models/gender.enum.ts ***!
  \***************************************/
/*! exports provided: Gender */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Gender", function() { return Gender; });
/**
 * Gender - gender for owner, or pets
 */
var Gender;
(function (Gender) {
    Gender["MALE"] = "MALE";
    Gender["FEMALE"] = "FEMALE";
    Gender["UNKNOWN"] = "UNKNOWN";
})(Gender || (Gender = {}));
(function (Gender) {
    /**
     * getGenderFromText - returns gender value from text
     *
     * @param {String} text  gender data text
     * @returns {string}
     */
    function getGenderFromText(text) {
        var genderText = text.toUpperCase();
        switch (genderText) {
            case Gender.MALE:
            case Gender.FEMALE:
                return genderText;
            default:
                return Gender.UNKNOWN;
        }
    }
    Gender.getGenderFromText = getGenderFromText;
})(Gender || (Gender = {}));



/***/ }),

/***/ "./src/app/models/owner.ts":
/*!*********************************!*\
  !*** ./src/app/models/owner.ts ***!
  \*********************************/
/*! exports provided: Owner */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Owner", function() { return Owner; });
var Owner = /** @class */ (function () {
    function Owner(name, gender, age, pets) {
        this.name = name;
        this.gender = gender;
        this.age = age;
        this.pets = pets;
    }
    return Owner;
}());



/***/ }),

/***/ "./src/app/models/pet-type.enum.ts":
/*!*****************************************!*\
  !*** ./src/app/models/pet-type.enum.ts ***!
  \*****************************************/
/*! exports provided: PetType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PetType", function() { return PetType; });
/**
 * PetType - pet biological type
 */
var PetType;
(function (PetType) {
    PetType["DOG"] = "DOG";
    PetType["CAT"] = "CAT";
    PetType["FISH"] = "FISH";
    PetType["UNKNOWN"] = "UNKNOWN";
})(PetType || (PetType = {}));
(function (PetType) {
    /**
     * getPetTypeFromText - returns pet type value from text
     *
     * @param {String} text  pet type data text
     * @returns {string}
     */
    function getPetTypeFromText(text) {
        var petTypeText = text.toUpperCase();
        switch (petTypeText) {
            case PetType.DOG:
            case PetType.CAT:
            case PetType.FISH:
                return petTypeText;
            default:
                return PetType.UNKNOWN;
        }
    }
    PetType.getPetTypeFromText = getPetTypeFromText;
    /**
     * getPetTypeEmoji - returns pet type emoji text
     *
     * @param {PetType} petType  pet type data
     * @returns {string}
     */
    function getPetTypeEmoji(petType) {
        switch (petType) {
            case PetType.DOG:
                return '🐶';
            case PetType.CAT:
                return '🐱';
            case PetType.FISH:
                return '🐟';
            default:
                return '👽';
        }
    }
    PetType.getPetTypeEmoji = getPetTypeEmoji;
})(PetType || (PetType = {}));



/***/ }),

/***/ "./src/app/models/pet.ts":
/*!*******************************!*\
  !*** ./src/app/models/pet.ts ***!
  \*******************************/
/*! exports provided: Pet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Pet", function() { return Pet; });
var Pet = /** @class */ (function () {
    function Pet(name, type) {
        this.name = name;
        this.type = type;
    }
    return Pet;
}());



/***/ }),

/***/ "./src/app/pipes/filter-pets.ts":
/*!**************************************!*\
  !*** ./src/app/pipes/filter-pets.ts ***!
  \**************************************/
/*! exports provided: FilterPetsPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterPetsPipe", function() { return FilterPetsPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_pet_type_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/pet-type.enum */ "./src/app/models/pet-type.enum.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var FilterPetsPipe = /** @class */ (function () {
    function FilterPetsPipe() {
    }
    FilterPetsPipe.prototype.transform = function (array, petTypeText) {
        if (petTypeText === void 0) { petTypeText = ''; }
        var result;
        var petType = _models_pet_type_enum__WEBPACK_IMPORTED_MODULE_1__["PetType"].getPetTypeFromText(petTypeText);
        if (petType === _models_pet_type_enum__WEBPACK_IMPORTED_MODULE_1__["PetType"].UNKNOWN) {
            if (petTypeText === '') {
                // return all pets on empty filter
                result = array.slice();
            }
            else {
                // return nothing is filter pet type is unknown
                return [];
            }
        }
        // filter pets based on filter pet type text
        if (petTypeText !== '') {
            result = array.filter(function (pet) {
                return pet.type === petType;
            });
        }
        // default sort pets based on name alphabetically
        result.sort(function (petA, petB) {
            return petA.name >= petB.name ? 1 : -1;
        });
        return result;
    };
    FilterPetsPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'filterPets',
            pure: false
        })
    ], FilterPetsPipe);
    return FilterPetsPipe;
}());



/***/ }),

/***/ "./src/app/services/owners-api.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/owners-api.service.ts ***!
  \************************************************/
/*! exports provided: OwnersApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OwnersApiService", function() { return OwnersApiService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var OwnersApiService = /** @class */ (function () {
    function OwnersApiService(httpClient) {
        this.httpClient = httpClient;
        // endpoint constant
        this.GET_OWNERS_ENDPOINT = 'assets/owners.json';
    }
    OwnersApiService.prototype.getOwners = function () {
        return this.httpClient.get(this.GET_OWNERS_ENDPOINT);
    };
    OwnersApiService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], OwnersApiService);
    return OwnersApiService;
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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/gaga/Dev/github/feline-demo/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map