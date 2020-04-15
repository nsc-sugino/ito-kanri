class ItoController {
    constructor() {
        
        //変数$にquerSelectorを実行させたい
        let $ = document.querySelector.bind(document);


        //idを探すため#を付ける
        this._inputColor = $('#color');
        this._inputBrand = $('#brand');
        this._inputHinban = $('#hinban');

        
        this._itoList = new ItoList();

        //itoTableのクラスがついているclassを探す
        this._itoListView = new ItoListView($('.ito-table'));
    }

    //ブラウザで行われるリフレッシュをさせない
    addIto(event) {
       
        event.preventDefault();

        //入力チェック
        //ture:追加の処理続行
        //false:追加の処理中断
        if (this._isValidInput()) {
          
            //値を保存する
            let ito = new Ito(

                this._inputColor.value, //#0000ff
                this._inputBrand.value, //DMC
                this._inputHinban.value //123
            );
            //↑の状態　ito = {'_color' : '#0000ff', '_brand' : 'DMC', '_hinban' : '123'}
     
            //ItoListに新しく追加する命令
            this._itoList.addItem(ito);

            console.log(this._itoList);
        

            //itoListViewのリストを更新する命令
            this._itoListView.update(ito);

            this._formReset();
        }
    }

    //itoListを削除する命令
    clearIto(event) {
        event.preventDefault();
        this._itoList.clear();

        this._itoListView.clear();

        this._formReset();
    }

    deleteIto() {
        //画面から消す
        this._itoList.deleteItem();
    }
        //
    //}
    deleteItem(ito) {
        
        //this._list　あなたはitoを持っていますか
        //this._list  itoを削除してください
       
        //listの中から1つずつ探してくれる
        //this._itoList.findIndex(item => {JSON.stringify(item) == JSON.stringify(ito)});
        for (let index = 0; index < this._list.length; index++) {
            //JSON.　文字列に変換する
            if (JSON.stringify(ito) == JSON.stringify(this._list[index])) {
                itemIndex = index;
                break;
            }
        }
        if (itemIndex >= 0) {
        this._list.splice(itemIndex, 1);
        }
    }
        


    //入力欄を初期値に戻す処理
    _formReset() {
        //色を黒(デフォルト)にする
        this._inputColor.value = '#000000';
        //メーカー名を空文字にする
        this._inputBrand.value = '';
        //品番を空文字にする
        this._inputHinban.value = '';
      
    }
        
    //糸のバリデーションするメソッド 
    //入力が不正の場合 = false 入力されていない場合 = ture
    //tureになる条件:メーカー名&&品番が空文字ではない
    //falseになる条件:メーカ名||品番が空文字のとき
   _isValidInput() {
        //結果
        let valid = false;
        //メーカー名が空文字
        let brandKara = this._inputBrand.value == '';
        
        //品番が空文字
        let hinbanKara = this._inputHinban.value == '';
        
        //brandkaraとhinkaraを反転（!はNOT）
        valid = !brandKara && !hinbanKara;

       
        //結果を教える
        return valid;
    }

}
    
       
        
        
    



