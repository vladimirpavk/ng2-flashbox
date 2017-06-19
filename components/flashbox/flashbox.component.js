System.register(["@angular/core", "rxjs/Rx"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var __moduleName = context_1 && context_1.id;
    var core_1, Rx_1, __moduleName, FlashBoxComponent;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (Rx_1_1) {
                Rx_1 = Rx_1_1;
            }
        ],
        execute: function () {
            FlashBoxComponent = class FlashBoxComponent {
                constructor() {
                    this.isShown = false;
                    this._intervalCounterObserver = null;
                    //emit when flashbox start showing up
                    this._onStartVisible = new core_1.EventEmitter();
                    //emit when flashbox is completely visible
                    this._onEndVisible = new core_1.EventEmitter();
                    //emit when flashbox start dissapearing
                    this._onStartHidden = new core_1.EventEmitter();
                    //emit when flashbox is hidden
                    this._onEndHidden = new core_1.EventEmitter();
                    //emit when you try to start flashing flashbox that is already flashing
                    this._busy = new core_1.EventEmitter();
                    //setTimeout value must be greater than 0
                    this._invalidValue = new core_1.EventEmitter();
                    this._type = "primary";
                    this._position = "tr";
                    this._maxwidth = "300px";
                    this._setTimeout = 2000;
                    this.style_type = [false, false, false, false, false, false];
                    this.style_position = [false, false, false, false, false, false, false, false, false];
                    /*
                    //subscribe to events
                    this._onStartVisible.subscribe(()=>{
                        console.log("_onStartVisible event fired");
                    });
                    this._onEndVisible.subscribe(()=>{
                        console.log("_onEndVisible event fired");
                    });
                    this._onStartHidden.subscribe(()=>{
                        console.log("_onStartHidden event fired");
                    });
                    this._onEndHidden.subscribe(()=>{
                        console.log("_onEndHidden event fired");
                    this._busy.subscribe(()=>{
                        console.log("_busy event fired");
                    });*/
                    console.log("FlashBoxComponent v0.2.1");
                }
                /**
                 * Set type of flashbox.
                 * Available values:
                 * default, primary, success, info, warning, danger
                 * Default value is primary.
                 */
                set type(value) {
                    this._type = value;
                    this.setType();
                }
                /**
                * Set position of flashbox.
                * Available values:
                * tr - top-right,
                * tm - top-middle,
                * tl - top-left,
                * cr - center-right,
                * cm - center-middle,
                * cl - center-left,
                * br - bottom-right,
                * bm - bottom-middle,
                * bl - bottom-left
                * Default value is tr.
                */
                set position(value) {
                    this._position = value;
                    this.setPosition();
                }
                /**
                 * Specify flashbox maximum width.
                 * Default value is 300 px.
                 */
                set maxwidth(value) {
                    this._maxwidth = value;
                }
                /**
                 * Specify the amount of time flashbox is visible in ms. Default value is 2000ms.
                 */
                set setTimeout(value) {
                    this._setTimeout = value;
                }
                ngOnInit() {
                    this.setType();
                    this.setPosition();
                }
                setType() {
                    switch (this._type) {
                        case "default":
                            {
                                this.style_type = [true, false, false, false, false, false];
                                break;
                            }
                            ;
                        case "primary":
                            {
                                this.style_type = [false, true, false, false, false, false];
                                break;
                            }
                            ;
                        case "success":
                            {
                                this.style_type = [false, false, true, false, false, false];
                                break;
                            }
                            ;
                        case "info":
                            {
                                this.style_type = [false, false, false, true, false, false];
                                break;
                            }
                            ;
                        case "warning":
                            {
                                this.style_type = [false, false, false, false, true, false];
                                break;
                            }
                            ;
                        case "danger":
                            {
                                this.style_type = [false, false, false, false, false, true];
                                break;
                            }
                    }
                }
                setPosition() {
                    switch (this._position) {
                        case "tr":
                            {
                                this.style_position = [true, false, false, false, false, false, false, false, false];
                                break;
                            }
                            ;
                        case "tm":
                            {
                                this.style_position = [false, true, false, false, false, false, false, false, false];
                                break;
                            }
                            ;
                        case "tl":
                            {
                                this.style_position = [false, false, true, false, false, false, false, false, false];
                                break;
                            }
                            ;
                        case "cr":
                            {
                                this.style_position = [false, false, false, true, false, false, false, false, false];
                                break;
                            }
                            ;
                        case "cm":
                            {
                                this.style_position = [false, false, false, false, true, false, false, false, false];
                                break;
                            }
                            ;
                        case "cl":
                            {
                                this.style_position = [false, false, false, false, false, true, false, false, false];
                                break;
                            }
                            ;
                        case "br":
                            {
                                this.style_position = [false, false, false, false, false, false, true, false, false];
                                break;
                            }
                            ;
                        case "bm":
                            {
                                this.style_position = [false, false, false, false, false, false, false, true, false];
                                break;
                            }
                            ;
                        case "bl":
                            {
                                this.style_position = [false, false, false, false, false, false, false, false, true];
                                break;
                            }
                            ;
                    }
                }
                /**
                 * Use this method to toggle(show/hide) flashbox.
                 */
                toggle() {
                    if (this.isShown)
                        this.hide();
                    else
                        this.show();
                }
                /**
                 * Use this method to show flashbox.
                 * Flashbox will be visible until hide() method is called.
                 */
                show() {
                    if (this.isShown) {
                        console.error("FlashBox component is already shown");
                        this._busy.emit();
                        return;
                    }
                    this._onStartVisible.emit();
                    this.isShown = true;
                    setTimeout(() => {
                        this._onEndVisible.emit();
                    }, 500);
                }
                /**
                 * Use this method to hide flashbox.
                 * Flashbox will be hidden until show() method is called.
                 */
                hide() {
                    if (!this.isShown) {
                        console.error("FlashBox component is already hidden");
                        this._busy.emit();
                        return;
                    }
                    this._onStartHidden.emit();
                    this.isShown = false;
                    setTimeout(() => {
                        this._onEndHidden.emit();
                    }, 500);
                }
                /**
                * Use this method to show flashbox only once.
                * Flashbox will appear and then disappear.
                */
                flashOnce() {
                    //if flashbox is flashing or visible emit busy event       
                    if ((this._intervalCounterObserver != null && !this._intervalCounterObserver.closed) || this.isShown) {
                        console.error("FlashBox component is either shown or flashing");
                        this._busy.emit();
                        return;
                    }
                    this.show();
                    setTimeout(() => this.hide(), this._setTimeout);
                }
                /**
                 * Use this method to start flashbox flashing.
                 * FlashBox will be flashing until stopFlashing() method is called.
                 */
                startFlashing() {
                    //if flashbox is flashing or visible emit busy event       
                    if ((this._intervalCounterObserver != null && !this._intervalCounterObserver.closed) || this.isShown) {
                        console.error("FlashBox component is either shown or flashing");
                        this._busy.emit();
                        return;
                    }
                    this._intervalCounterHandler = Rx_1.Observable.timer(0, parseInt(this._setTimeout) + 1000);
                    this._intervalCounterObserver = this._intervalCounterHandler.subscribe((num) => {
                        this.toggle();
                    });
                }
                /**
                 * Use this method to stop flashbox flashing.
                 * FlashBox will be stopped until startFlashing() method is called.
                 */
                stopFlashing() {
                    this._intervalCounterObserver.unsubscribe();
                    this.isShown = false;
                }
                /**
                 * Use this method to start flashbox flashing for predefined number of times.
                 */
                flashTimes(times) {
                    if (times < 0) {
                        //invalid value
                        console.error("Value must be greater than 0");
                        this._invalidValue.emit();
                        return;
                    }
                    //if already blinking or shown do nothing
                    //message must be hidden to start flashing
                    if ((this._intervalCounterObserver != null && !this._intervalCounterObserver.closed) || this.isShown) {
                        console.error("FlashBox component is either shown or flashing");
                        this._busy.emit();
                        return;
                    }
                    this._intervalCounterHandler = Rx_1.Observable.timer(0, parseInt(this._setTimeout) + 1000);
                    this._intervalCounterObserver = this._intervalCounterHandler.subscribe((num) => {
                        if (num != times * 2) {
                            // console.log(num);
                            this.toggle();
                        }
                        else {
                            this._intervalCounterObserver.unsubscribe();
                        }
                    });
                }
            };
            __decorate([
                core_1.Output("onStartVisibleEvent"),
                __metadata("design:type", Object)
            ], FlashBoxComponent.prototype, "_onStartVisible", void 0);
            __decorate([
                core_1.Output("onEndVisibleEvent"),
                __metadata("design:type", Object)
            ], FlashBoxComponent.prototype, "_onEndVisible", void 0);
            __decorate([
                core_1.Output("onStartHiddenEvent"),
                __metadata("design:type", Object)
            ], FlashBoxComponent.prototype, "_onStartHidden", void 0);
            __decorate([
                core_1.Output("onEndHiddenEvent"),
                __metadata("design:type", Object)
            ], FlashBoxComponent.prototype, "_onEndHidden", void 0);
            __decorate([
                core_1.Output("busyEvent"),
                __metadata("design:type", Object)
            ], FlashBoxComponent.prototype, "_busy", void 0);
            __decorate([
                core_1.Output("invalidValueEvent"),
                __metadata("design:type", Object)
            ], FlashBoxComponent.prototype, "_invalidValue", void 0);
            __decorate([
                core_1.Input("type"),
                __metadata("design:type", String),
                __metadata("design:paramtypes", [String])
            ], FlashBoxComponent.prototype, "type", null);
            __decorate([
                core_1.Input("position"),
                __metadata("design:type", String),
                __metadata("design:paramtypes", [String])
            ], FlashBoxComponent.prototype, "position", null);
            __decorate([
                core_1.Input("maxwidth"),
                __metadata("design:type", String),
                __metadata("design:paramtypes", [String])
            ], FlashBoxComponent.prototype, "maxwidth", null);
            __decorate([
                core_1.Input("setTimeout"),
                __metadata("design:type", Number),
                __metadata("design:paramtypes", [Number])
            ], FlashBoxComponent.prototype, "setTimeout", null);
            FlashBoxComponent = __decorate([
                core_1.Component({
                    moduleId: __moduleName,
                    selector: 'flash-box',
                    templateUrl: 'flashbox.component.html',
                    styleUrls: ['flashbox.component.css']
                }),
                __metadata("design:paramtypes", [])
            ], FlashBoxComponent);
            exports_1("FlashBoxComponent", FlashBoxComponent);
        }
    };
});

//# sourceMappingURL=flashbox.component.js.map
