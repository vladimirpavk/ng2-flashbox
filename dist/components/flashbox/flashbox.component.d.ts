import { OnInit } from '@angular/core';
export declare class FlashBoxComponent implements OnInit {
    private isShown;
    private intervalCounter;
    private _type;
    type: string;
    private _position;
    position: string;
    private _maxwidth;
    maxwidth: string;
    private _setTimeout;
    setTimeout: number;
    private style_type;
    private style_position;
    constructor();
    ngOnInit(): void;
    private setType();
    private setPosition();
    flashOnce(): void;
    show(): void;
    hide(): void;
    startFlashing(): void;
    stopFlashing(): void;
}
