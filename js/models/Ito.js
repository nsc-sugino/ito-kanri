class Ito {
    constructor(color, brand, hinban) {
        
        this._color = color;
        this._brand = brand;
        this._hinban = hinban;

    }
    //colorの値を取得
    get color() {
        return this._color;
    }
    //brandの値を取得
    get brand() {
        return this._brand;
    }
    //hinbanの値を取得
    get hinban() {
        return this._hinban;
    }
}
