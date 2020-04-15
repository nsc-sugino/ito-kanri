class ItoList {

    constructor() {
        //原本（値を書き換えれないように）
        //配列を使用しリスト化
        //itoListを空にする
        this._list = [];
    }

    //原本をコピー（値を書き換えられてもよいように）
    get list() {
        return [].concat(this._list);
    }

    //糸のリストの最後に新しく追加する
    addItem(ito) {
        this._list.push(ito);
    }

    //糸のリストをクリア
    clear() {
        this._list = [];

    }



}