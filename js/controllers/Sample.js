function sosu(number) {
    //2は素数なので最初に2が素数の場合turuを返す
    if (number == 2) {
        console.log('素数です');
        return true;

    } else {
        for (count = 2; count < number; count++) {
            //numberが割り切れれば、素数でないのでfalseを返す
            if (number % count == 0) {
                console.log('素数ではないです');
                return false;
                break;               
            }
            //count+1とnumberが一緒ならturuを返す
            //素数は1とその数字でしか割り切れないため
            if (count + 1 == number) {
                console.log('素数です');
                return true;
                
            }
        }
    }
}

sosu(151);
