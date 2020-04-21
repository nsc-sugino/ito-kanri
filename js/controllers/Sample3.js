//何の数字から始めるのかnumber、どこまでを終わりにするのかcount
function makeFibonacci(number, count) {
    //fibonacci[1,1]が初期値
    let fibonacci = [number, number];
    
    for (i = 2; i < count; i++) {
        
        //2つ前の配列の数字と1つ前の配列の数字を足す
        //fibonacci[0] => 1 と fibonacci[1] => 1　
        //つまり 1 + 1 = 2、2 + 1 = 3、2 + 3 = 5、5 + 3 = 8....
      fibonacci[i] = fibonacci[i - 2] + fibonacci[i - 1];
    }
  
    return fibonacci;
  }
  //1から始め、10個までで終了
  let fibonacci = makeFibonacci(1, 10);
  console.log(fibonacci);

    