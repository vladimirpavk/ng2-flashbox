# ng2 - flashbox
[![npm version](https://img.shields.io/npm/v/ng2-flashbox.svg)](https://www.npmjs.com/package/ng2-flashbox) [![npm downloads-monthly](https://img.shields.io/npm/dm/ng2-flashbox.svg)](https://www.npmjs.com/package/ng2-flashbox) [![npm downloads-total](https://img.shields.io/npm/dt/ng2-flashbox.svg)](https://www.npmjs.com/package/ng2-flashbox)

**FlashBox(ng2-flashbox)** - angular2 component used to display simple user information messages.

**FlashBox(ng2-flashbox)** GitHub [repo](https://github.com/vladimirpavk/ng2-flashbox/).

**FlashBox(ng2-flashbox)** development enviroment(Angular4, SystemJS, gulp) [repo](https://github.com/vladimirpavk/Angular4-FlashBoxComponent).

Try [online-demo](https://vladimirpavk.github.io/Angular4-FlashBoxComponent/).


### Installation
```
npm install ng2-flashbox --save
```


### How to use FlashBox(ng2-flashbox) component
FlashBox(ng2-flashbox) component is a part of the CommonComponents module.

Configure your module loader. If you use **SystemJs** add the following mapings:
```
System.config({
    ...
    paths: {
      ...
      'npm:': 'node_modules/'
      ...
    },
    map: {
        ...
        'ng2-flashbox': 'npm:ng2-flashbox/index.js'
        ...
    }
    ...
})
```

Import CommonComponents module in your application module.
```
... 
Import { CommonComponentsModule } from 'ng2-flashbox';
...
@NgModule({
    ...
     imports: [ ...
         CommonComponentsModule 
         ...
         ],
    ...
})
```

Use FlashBox(ng2-flashbox) component within component template with ```<flash-box></flash-box>``` tags.

Place your **HTML** based message inside element like this
```
<flash-box>
        <!-- HTML Message -->
        <div style="border-type: solid; border-width:2px">
            <label style="color: rgb(0,0,0); text-decoration: underline;">Information message</label>
           <label>
            Any message
            </label>
        </div>
</flash-box> 

```


### Attributes

```
<flash-box type="typeValue" position="positionValue" max-width="maxWidthValue" setTimeout="setTimeoutValue">
        <!-- HTML message -->
</flash-box>    
```
 
1. typeValue: **string**, default: **primary**.

Specify FlashBox type. Available values(bootstrap label types): **default**, **primary**, **success**, **info**, **warning**, **danger**.


2. positionValue: **string**, default: **tr**. 

Specify FlashBox position. Available values:

  * **tr** - top-right,
  * **tm** - top-middle,
  * **tl** - top-left,
  * **cr** - center-right,
  * **cm** - center-middle,
  * **cl** - center-left,
  * **br** - bottom-right,
  * **bm** - bottom-middle,
  * **bl** - bottom-left


3. maxWidthValue: **string**, default: **300px**

Specify FlashBox maximum width.


4. setTimeoutValue: **number**, default: **2000**

Specify the amount of time FlashBox is visible in **ms**.


### Actions

Use angular2 template local variable(TLV) system or invoke a method from a controller.

#### **Template local variable example**
```
    <flash-box .... #tlv_name>
        ....
    </flash-box>
    
    <button (click)="tlv_name.available_action()">Cause flashbox action</button>
```

#### **Controller method invokation example**

reference component source
```
    import { FlashBoxComponent } from 'ng2-flashbox';
```

reference component from template local variable using 
```
    @ViewChild("tlv_name") tlv:FlashBoxComponent;
    tlv.available_action();
```


#### **Methods( available_action() )**:

1. **flashOnce():void** - show FlashBox once for **setTimeout** time.
2. **show():void** - show FlashBox.
3. **hide():void** - hide FlashBox.
4. **startFlashing():void** - start flashing. Transition period between unvisible and visible is set to **0,5 sec** and is currently unconfigurable. The FlashBox control is shown for **setTimeout** time.
5. **stopFlashing():void** - stop flashing.
6. **toogle():void** - toggle show/hide control.
7. **flashTimes(number numOfTimes):void** - show FlashBox **numOfTimes** times.


#### **Events**:

1. **busyEvent()** - fires when FlashBox is busy. 
    When show() on FlashBox that is already shown.
    When hide() on FlashBox that is already hidden.
    When flashOnce() on FlashBox that is already shown or blinking.
    When startFlashing() on FlashBox that is already shown or blinking.
    When flashTimes(number numOfTImes) on FlashBox that is alread shown or blinking.
2. **onStartVisibleEvent()** - fires when FlashBox is starting to show.
3. **onEndVisibleEvent()** - fires when FlashBox is completely shown.
4. **onStartHiddenEvent()** - fires when FlashBox is starting to become unvisible.
5. **onEndHiddenEvent()** - fires when FlashBox is completely invisible.
6. **invalidValueEvent()** - fires when **setTimeout** to number that is less or equal 0.
7. **onTypeChangedEvent** - fires when you change **type** property of the control.
8. **onPositionChangedEvent** - fires when you change **position** property of the control.
9. **onMaxWidthChangedEvent** - fires when you change **maxwidth** property of the control.
10. **onTimeoutChangedEvent** - fires when you change **setTimeout** property of the control. 
