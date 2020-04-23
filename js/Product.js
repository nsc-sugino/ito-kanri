//商品クラス
class Product {
    constructor(name,price,type,stock) {
        this._name = name;　//商品名
        this._price = price;　//値段
        this._type = type;　//分類
        this._stock = stock; //在庫
    }

    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }

    get price() {
        return this._price;
    }

    changePrice(price) {
        this._price = price;
    }
    
    get type() {
        return this._type;
    }

    get stock() {
        return this._stock;
    }
    set stock(value) {
        this._stock = value;
    }
    
}
let pro = new Product('キャベツ',98,'野菜',10);
let pro1 = new Product('牛肉',598,'肉',8);
let pro2 = new Product('牛乳',298,'日販',15);





//買い物かごクラス
class Bucket {
    constructor() {
        this._productList = [];
    }
    get productList() {
        return this._productList;
    }
    //商品を追加
    addBucket(product,count) {
        let item = new BucketItme(product,count);
        this._productList.push(item);
        this._productList[0].getPrice();
    }

    //商品をすべて消す
    emptyCart() {

    }

    //商品を取り出す
    removeProduct(Product,count) {

    }

}

let bucket = new Bucket();
bucket.addBucket(chocolate,10);


class BucketItme {
    constructor(product,count) {
        this._product = product;
        this._count = count;
    }

    get product() {
        return this._product;

    }

    get count() {
        return this._count;
    }

    set count(value) {
        this._count = value;
    }


    getUnitPrice() {
        return this._product.price;
    }

    getPrice() {
        return this.getUnitPrice() * this._count;
    }
}

//レシートクラス
class Receipt {
    constructor() {
        //Date => 今の日付を持ってくる
        this.date = new Date();
        this.productList = [];
        //レシートを印刷できるかどうか
        this._canPrint = true;
    }
    //買った商品を追加する
    addProduct(item) {
        //買った商品をリストに追加する
            
            //リストの中から同じ商品のものがないかを検索する
            //productListから探してくれる => this.productList.find(element)
            let cartItme = this.productList.find(element => {
                 //商品の名前が一緒だったらturuを返す
                return element.product == item.product

            });

            if (cartItme) {
                //同じアイテムがあった => 数を足す
                cartItme.count += item.count;

            } else {
                //同じものが無かったら商品をそのまま追加する
                this.productList.push(item);
            }
            
    
    }

    //合計を書きだす
    _sumCart() {
        //CartItmeのgetPriceの合計を出す
            //productListの中身を合計する
            //合計を変数に格納して返す
            let sum = 0;

            for (let index = 0; index < this.productList.length; index++) {
                sum = sum + this.productList[index].getPrice();

            }

    }

    //出力する
    ceratReceipt() {
        //addProduct、_sumCartを使う
        //書きだすための処理
            //日付 
            if (!this._canPrint){
                return;
            }

            console.log(this.date);
            //productList => 商品名 (一つの値段×数) 合計の値段
            for (let i = 0; i < this.productList.length; i++) {
                let price = this.productList[i].getPrice();
                console.log(`商品${this.productList[i].product.name}金額${price}`);
            }
            
            //合計 => _sumCartの戻り値
            let sumPrice = this._sumCart();
            console.log(`合計${sumPrice}`);

            //書きだしたタイミングでオブジェクトを空にする
            
            //this.date = "";
            //this.productList = [];
            //sumPrice = 0;
   
    }

}

