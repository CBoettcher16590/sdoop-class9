import { compose, Constructor } from "./composer";
import { IPlayStation, IPowerCord, IPowered, ITelevision } from "./interfaces";
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


class Television extends withPowerCord(class {}) implements ITelevision {

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