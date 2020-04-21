//降順
//並び変える配列
let array = [50,40,100,80,10];

function arraySort(array) {
    for(let i = 0; i < array.length; i++) {

        //array.lengthは5なので1引いて配列の番号に合うようにする
        //（配列の長さは5だが、番号は0,1,2,3,4のため)
        for(let j = array.length - 1; j > i; j--) {
            
             //配列の後ろの値とその一つ前の値を比べる
            if(array[j] > array[j - 1]){
                //退避用の変数suuji
                let suuji = array[j];
                array[j] = array[j - 1];
                array[j - 1] = suuji;
            }
        }
    }  
    return array; 
}
console.log(arraySort(array));




