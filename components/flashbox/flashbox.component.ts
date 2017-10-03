import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Observable, Subscription } from 'rxjs/Rx';

@Component({
    moduleId: module.id, //for commonjs pak
    selector: 'flash-box',    
    templateUrl: 'flashbox.component.html',
    styleUrls: ['flashbox.component.css']
})
export class FlashBoxComponent implements OnInit{
   
    private isShown: boolean = false;
  
    private _intervalCounterHandler: Observable<number>;
    private _intervalCounterObserver: Subscription= null;    

    //emit when flashbox start showing up
    @Output("onStartVisibleEvent") _onStartVisible = new EventEmitter();
    //emit when flashbox is completely visible
    @Output("onEndVisibleEvent") _onEndVisible = new EventEmitter();
    //emit when flashbox start dissapearing
    @Output("onStartHiddenEvent") _onStartHidden = new EventEmitter();
    //emit when flashbox is hidden
    @Output("onEndHiddenEvent") private _onEndHidden = new EventEmitter();   
    //emit when you try to start flashing flashbox that is already flashing
    @Output("busyEvent") _busy = new EventEmitter();
    //setTimeout value must be greater than 0
    @Output("invalidValueEvent") _invalidValue = new EventEmitter();
    //emit when control type change
    @Output("onTypeChangedEvent") _typeChanged = new EventEmitter<string>();
    //emit when control position change
    @Output("onPositionChangedEvent") _positionChanged = new EventEmitter<string>();
    //emit when control maxwidth change
    @Output("onMaxWidthChangedEvent") _maxWidthChanged = new EventEmitter<number>();
    //emit when control timeout change
    @Output("onTimeoutChangedEvent") _timeoutChanged = new EventEmitter<number>();

    private _type: string = "primary";
    /**
     * Set type of flashbox.
     * Available values: 
     * default, primary, success, info, warning, danger
     * Default value is primary. 
     */
    @Input("type")
    set type(value: string){
        this._type = value;
        this._typeChanged.emit(value);
        this.setType();
    }
   
    private _position: string = "tr";
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
    @Input("position")
    set position(value: string){
        this._position = value;
        this._positionChanged.emit(value);
        this.setPosition();
    }
    
    private _maxwidth: number = 300;
    /**
     * Specify flashbox maximum width.
     * Default value is 300 px.
     */
    @Input("maxwidth")
    set maxwidth(value: number){
        this._maxwidth = value;
        this._maxWidthChanged.emit(value);
    }
    
    private _setTimeout: number = 2000;    
    /**
     * Specify the amount of time flashbox is visible in ms. Default value is 2000ms.
     */
    @Input("setTimeout")
    set setTimeout(value : number){
        this._setTimeout = value;
        this._timeoutChanged.emit(value);      
    }

    private style_type: boolean[] = [false, false, false, false, false, false];

    private style_position: boolean[] = [false, false, false, false, false, false, false, false, false];

    constructor(){
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
        });
        this._typeChanged.subscribe((new_val:any)=>{
            console.log("Type changed to: "+new_val);
        });
        this._positionChanged.subscribe((new_val:any)=>{
            console.log("Position changed to :"+new_val);
        });
        this._maxWidthChanged.subscribe((new_val:any)=>{
            console.log("Max width changed to :"+new_val);
        });
        this._timeoutChanged.subscribe((new_val:any)=>{
            console.log("Timeout changed to :"+new_val);
        });*/

        //console.log("FlashBoxComponent v0.2.6");
    }

    ngOnInit(){
        this.setType();
        this.setPosition();
    }    

    private _version: string  ="0.2.12";
    /**
     * Use this method to retrieve the current control version
     */
    private version(): string{
        return this._version;
    }

    private setType(): void{
        switch(this._type){
            case "default":
            {            
                this.style_type= [true, false, false, false, false, false];
                break;
            };
            case "primary":
            {
                this.style_type= [false, true, false, false, false, false];                
                break;
            };
            case "success":
            {
                this.style_type= [false, false, true, false, false, false];                
                break;
            };
            case "info":
            {
                this.style_type= [false, false, false, true, false, false];                
                break;
            };
            case "warning":
            {
                this.style_type= [false, false, false, false, true, false];               
                break;                
            };
            case "danger":
            {
                this.style_type= [false, false, false, false, false, true];               
                break;
            }
        }
    }

    private setPosition(): void{
        switch(this._position){
            case "tr":{
                this.style_position= [true, false, false, false, false, false, false, false, false];               
                break;
            };
            case "tm":{
                this.style_position= [false, true, false, false, false, false, false, false, false];                             
                break;
            };
            case "tl":{
                this.style_position= [false, false, true, false, false, false, false, false, false];                
                break;
            };
            case "cr":{
                this.style_position= [false, false, false, true, false, false, false, false, false];                
                break;
            };
            case "cm":{
                 this.style_position= [false, false, false, false, true, false, false, false, false];              
                break;
            };
            case "cl":{
                this.style_position= [false, false, false, false, false, true, false, false, false];                
                break;
            };
            case "br":{
                this.style_position= [false, false, false, false, false, false, true, false, false];                
                break;
            };
            case "bm":{
                this.style_position= [false, false, false, false, false, false, false, true, false];                 
                break;
            };
            case "bl":{
                this.style_position= [false, false, false, false, false, false, false, false, true];                 
                break;
            };
        }
    }
    /**
     * Use this method to toggle(show/hide) flashbox.
     */
    public toggle(): void{
        if(this.isShown) this.hide();
        else this.show();
    }        
    /**
     * Use this method to show flashbox.
     * Flashbox will be visible until hide() method is called.
     */
    public show(): void{              
        if(this.isShown){    
            console.error("FlashBox component is already shown");                                   
            this._busy.emit();
            return;
        }            

        this._onStartVisible.emit();
        this.isShown=true;
        setTimeout(()=>{
             this._onEndVisible.emit();
        }, 500);        

    }
    /**
     * Use this method to hide flashbox.
     * Flashbox will be hidden until show() method is called.
     */
    public hide(): void{  

        if(!this.isShown){  
            console.error("FlashBox component is already hidden");         
            this._busy.emit();
            return;
        }      
       
        this._onStartHidden.emit();
        this.isShown=false;
        setTimeout(()=>{
              this._onEndHidden.emit();
        },500);
           
    }
     /**
     * Use this method to show flashbox only once.
     * Flashbox will appear and then disappear.
     */   
    public flashOnce(): void{
        //if flashbox is flashing or visible emit busy event       
        if( (this._intervalCounterObserver!=null && !this._intervalCounterObserver.closed) || this.isShown ){
            console.error("FlashBox component is either shown or flashing");           
            this._busy.emit();
            return;
        }            
             
        this.show();
        setTimeout(()=>this.hide(), this._setTimeout);      
    }
    /**
     * Use this method to start flashbox flashing.
     * FlashBox will be flashing until stopFlashing() method is called.
     */
    public startFlashing(): void{
         //if flashbox is flashing or visible emit busy event       
        if( (this._intervalCounterObserver!=null && !this._intervalCounterObserver.closed) || this.isShown ){
            console.error("FlashBox component is either shown or flashing");           
            this._busy.emit();
            return;
        }            
                             
        //this._intervalCounterHandler=Observable.timer(0, parseInt(this._setTimeout)+1000);
        this._intervalCounterHandler=Observable.timer(0, this._setTimeout+1000);        
        this._intervalCounterObserver=this._intervalCounterHandler.subscribe((num)=>{
            this.toggle();
        });           
    }
    /**
     * Use this method to stop flashbox flashing.
     * FlashBox will be stopped until startFlashing() method is called.
     */
    public stopFlashing(): void{       
       this._intervalCounterObserver.unsubscribe();
       this.isShown=false;
    }

    /**
     * Use this method to start flashbox flashing for predefined number of times. 
     */
    public flashTimes(times: number): void{
        if(times < 0)
        {
            //invalid value
            console.error("Value must be greater than 0");
            this._invalidValue.emit();
            return;
        }
        //if already blinking or shown do nothing
        //message must be hidden to start flashing
         if( (this._intervalCounterObserver!=null && !this._intervalCounterObserver.closed) || this.isShown ){
            console.error("FlashBox component is either shown or flashing");           
            this._busy.emit();
            return;
        }            

        //this._intervalCounterHandler=Observable.timer(0, parseInt(this._setTimeout)+1000);
        this._intervalCounterHandler=Observable.timer(0, this._setTimeout+1000);       
        this._intervalCounterObserver=this._intervalCounterHandler.subscribe((num)=>{
            if(num != times*2){
               // console.log(num);
                this.toggle();
            }
            else{
                this._intervalCounterObserver.unsubscribe();
            }
        });           
    }


}