import { OnInit } from '@angular/core';
export declare class FlashBoxComponent implements OnInit {
    private isShown;
    private intervalCounter;
    private _type;
    /**
     * Set type of flash box.
     * Available values:
     * default, primary, success, info, warning, danger
     * Default value is primary.
     */
    type: string;
    private _position;
    /**
    * Set position of flash box.
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
    position: string;
    private _maxwidth;
    /**
     * Specify component's maximum width.
     * Default value is 300 px.
     */
    maxwidth: string;
    private _setTimeout;
    /**
     * Specify the amount of time the component is visible in ms. Default value is 2000ms.
     */
    setTimeout: number;
    private style_type;
    private style_position;
    constructor();
    ngOnInit(): void;
    private setType();
    private setPosition();
    /**
     * Use this method to show/hide message
     */
    toggle(): void;
    /**
     * Use this method to show message only once.
     * Message will appear and then disappear.
     */
    flashOnce(): void;
    /**
     * Use this method to show message.
     * Message will be visible until hide() method is called.
     */
    show(): void;
    /**
     * Use this method to hide message.
     * Message will be hidden until show() method is called.
     */
    hide(): void;
    /**
     * Use this message to start message flashing.
     * Message will be flashing until stopFlashing() method is called.
     */
    startFlashing(): void;
    /**
     * Use this message to stop message flashing.
     * Message will be stopped until startFlashing() method is called.
     */
    stopFlashing(): void;
}
