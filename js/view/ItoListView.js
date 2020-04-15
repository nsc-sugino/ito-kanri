class ItoListView {

    constructor(element) {
        this._element = element;

    }
    //itoから取得した値の表示の形
    _tenplate(ito) {
        return `<tr class="ito">
        <td>${ito.color}</td>
        <td>${ito.brand}</td>
        <td>${ito.hinban}</td>
        </tr>`;
    }


    //画面のリストに新しく糸の情報を追加登録する処理
    update(ito) {

        //一時的にデータをaに保存
        let a = this._element.innerHTML;

        //保存したデータと既存データを足す
        this._element.innerHTML = a + this._tenplate(ito);
        
    }
    //itoTableをクリアするメソッド
    clear() {
        this._element.innerHTML = '';
    }

    
}