export class Square{
    private _size:number;

    set size(s){
        this._size=s;
    }

    get size():number{
        return this._size;
    }

    getArea():number{
        return this._size*this._size;
    }
}