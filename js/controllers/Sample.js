function sosu(number) {
    if (number == 2) {
        return true;
        
    } else {
        for (count = 2; count < number; count++) {
            if (number % count == 0) {
                return false;
                break;               
            }
            if (count + 1 == number) {
                return true;
                
            }
        }
    }
}

console.log(sosu(151));
