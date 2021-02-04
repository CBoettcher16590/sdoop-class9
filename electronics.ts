import { compose, Constructor } from "./composer";
import { IHDTelevision, IPlayStation, IPowerCord, IPowered, ITelevision, IRadio, IRadioWithVolumeDial } from "./interfaces";
import { Outlet } from "./room";

function withPowerCord<P extends Constructor>( RequiresPowerCord:P ): P & Constructor<IPowerCord> {
    return class extends RequiresPowerCord {

        hasPower: boolean;

        plugIn(to:Outlet){
            to.plugIn(this);
        }

        unPlug(to:Outlet){
            to.unPlug(this);
        }

    }
}

function withHighDef<P extends Constructor>( RequiresHD:P ): P & Constructor<IHDTelevision>{

    return class extends RequiresHD{
        resolution:string;
        
    }

}

function withVolumeDial<Parent extends Constructor>( RequiresVolumeDial:Parent ): Parent & Constructor<IRadioWithVolumeDial>{

    return class extends RequiresVolumeDial{
        volumeDial:number[] = [1, 2, 3, 4, 5];
    }
}

class Radio extends withPowerCord(class {}) implements IRadio{

    hasSpeakers:boolean;

    constructor(){
        super();
  
    }   
}

class RadioWithVolumeDial extends withVolumeDial(Radio){
    constructor(){
        super();
        
    }
}

class Television extends withPowerCord(class {}) implements ITelevision {

    model:string;

    constructor(){
        super();
    
        this.hasPower;
    }

}

class HDTelevision extends withHighDef(Television){
    constructor(){
        super();
        this.hasPower;
    }

}


class PlayStation extends withPowerCord(class {}) implements IPlayStation {

    brand: string;

}

// const PlayStation = class extends compose( withPowerCord ){

//     brand: string;

//     private chipset:string = "foobar";

// } as Constructor<IPlayStation>;

// const console = new PlayStation();
// console.