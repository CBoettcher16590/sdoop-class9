import { IPowered } from "./interfaces";

export class Outlet {
    
    hasPower:boolean;
    pluggedIn:IPowered;

    plugIn(source:IPowered){
        this.pluggedIn = source;
        source.hasPower = this.hasPower;
    }

    unPlug(source:IPowered){
        source.hasPower = false;
        this.pluggedIn = undefined;
    }

    power(is:boolean){
        this.hasPower = is;
        this.pluggedIn && ( this.pluggedIn.hasPower = this.hasPower );
    }

}