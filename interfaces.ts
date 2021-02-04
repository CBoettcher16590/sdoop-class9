import { Outlet } from "./room";

export interface IPlayStation extends IPowerCord {

    brand: string;

}

export interface ITelevision extends IPowerCord {
}

export interface IPowerCord extends IPowered {
    
    plugIn(to:Outlet):void;
    unPlug(to:Outlet):void;

}

export interface IPowered {
    hasPower:boolean;
}