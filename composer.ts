// export type Constructor = new (...args:any[]) => {};
export type Constructor<T={}> = new (...args:any[]) => T;

export function compose<P extends Constructor>(...mixins:Array<(Source:P)=>P>){

    return mixins.reduce(( lastMixin, mixin ) => {
        return mixin(lastMixin as P);
    }, class {});

}