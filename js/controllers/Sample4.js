//昇順
let array = [50,40,100,80,10];

function arraySort(array) {
    for(let i = 0; i < array.length; i++) {
        
        for(let j = array.length - 1; j > i; j--) {
           
            if(array[j] < array[j - 1]){
                let suuji = array[j];
                array[j] = array[j - 1];
                array[j - 1] = suuji;
            }
        }
    }  
    return array; 
}
console.log(arraySort(array));



array.sort();
