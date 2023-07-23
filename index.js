// Code your solutions in this file
function writeCards(arr, typeOfGift){
    const newArr = [];
    if(Array.isArray(arr) && typeof(typeOfGift) === 'string'){
        for(let i = 0; i<arr.length; i++){
            newArr[i] = `Thank you, ${arr[i]}, for the wonderful ${typeOfGift} gift!`;
        }
    }
    else{
        return 'Input array in this section';
    }

    return newArr;
}

function countDown(number){

    if(typeof(number) === 'number'){

        while(number>=0){
            console.log(number);
            number--;
        }

    }

}

countDown(10);


