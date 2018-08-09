export class Rectangle{
    private _width:number;
    private _height:number;


    setWidth(w):void{
        this._width=w;
    }

    setHeight(h):void{
        this._height=h;
    }

   getHeight():number{
         return this._height
    }

    getWidth():number{
        return this._width
    }


    getArea():number{
        return this._width*this._height;
    }
}