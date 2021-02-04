class Entity {

    public _name:string;

    get name(){
        return this._name;
    }

}

class Organization extends Entity {

}

class Person extends Entity {

    public firstName:string;

    public lastName:string;

    get name(){
        return this.firstName + ' ' + this.lastName;
    }

}