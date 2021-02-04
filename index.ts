


// mixins = [ canPoop, canBark ]

import { compose, Constructor } from "./composer"

// lastMixin = class {}, mixin = canPoop
    // return canPoop(class {})
// lastMixin = canPoop(class {}), mixin = canBark
    // return canBark(canPoop(class {}))


function canPoop<P extends Constructor>( Source:P ){
    return class extends Source {
        poop(){

        }
    }
}

function canBark<P extends Constructor>( Source:P ){
    return class extends Source {
        bark(){
            
        }
    }
}

function canMeow<P extends Constructor>( Source:P ){
    return class extends Source {
        meow(){
            
        }
    }
}

function canClean<P extends Constructor>( Source:P ){
    return class extends Source {
        clean(){
            
        }
    }
}

function canDrive<P extends Constructor>( Source:P ){
    return class extends Source {
        drive(){
            
        }
    }
}

function canCapture<P extends Constructor>( Source:P ){
    return class extends Source {
        capture(){
            
        }
    }
}

const Dog = compose( canPoop, canBark );
const Cat = compose( canPoop, canMeow );
const CleaningRobot = compose( canClean, canDrive );
const CaptureRobot = compose( canCapture, canDrive );
const CaptureRobotDog = compose( canCapture, canDrive, canBark );
const CaptureCat = compose( canMeow, canPoop, canCapture );