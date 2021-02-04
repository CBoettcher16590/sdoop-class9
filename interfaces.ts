import { Outlet } from "./room";

export interface IPlayStation extends IPowerCord {

    brand: string;

}

export interface ITelevision extends IPowerCord {

    model:string;

}

export interface IHDTelevision{

    resolution:string;
    
}


export interface IPowerCord extends IPowered {
    
    plugIn(to:Outlet):void;
    unPlug(to:Outlet):void;

}

export interface IPowered {
    hasPower:boolean;
}

export interface IRadio extends IPowerCord {

    hasSpeakers:boolean;

}

export interface IRadioWithVolumeDial{

    volumeDial:number[];

}