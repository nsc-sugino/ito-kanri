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

    //this._list　あなたはitoを持っていますか
    //this._list  itoを削除してください
    selectClear(sakujyoIto) {

        //糸を順番に探して、一致したものを消す、listの中から1つずつ探してくれる、
        let count = -1;

        for (let a = 0; a < this._list.length; a++) {
            //JSON 文字列に変換して比較（this._itoList.findIndex(item => {JSON.stringify(item) == JSON.stringify(ito)});）
            
            if (JSON.stringify(this._list[a]) == JSON.stringify(sakujyoIto)) {
                
                count = a;
                break;
            } 

        }

        if (count >= 0) {
            this._list.splice(count, 1);

        }
    }


}