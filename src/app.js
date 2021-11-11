var chocolates = [
    "green", "green", "green", "silver", "blue", "crimson", "purple", "red", "crimson", "purple",
    "purple", "green", "pink", "blue", "red", "silver", "crimson", "purple", "silver", "silver",
    "red", "green", "red", "silver", "pink", "crimson", "purple", "green", "red", "silver",
    "crimson", "pink", "silver", "blue", "pink", "crimson", "crimson", "crimson", "red", "purple",
    "purple", "green", "pink", "blue", "red", "crimson", "silver", "purple", "purple", "purple",
    "red", "purple", "red", "blue", "silver", "green", "crimson", "silver", "blue", "crimson",
    "purple", "green", "pink", "green", "red", "silver", "crimson", "blue", "green", "red",
    "red", "pink", "blue", "silver", "pink", "crimson", "purple", "green", "red", "blue",
    "red", "purple", "silver", "blue", "pink", "silver", "crimson", "silver", "blue", "purple",
    "purple", "green", "blue", "blue", "red", "red", "silver", "purple", "silver", "crimson"
];

//Progression 1: Add ___ chocolates of ____ color
function addChocolates(chocolates,color,count){
    if(count<=0){
        return "Number cannot be zero/negative";
    }
    else{
        for(let i=0;i<count;i++){
            chocolates.unshift(color);
        }
        return chocolates;
    }

}


//Progression 2: Remove ___ chocolates from the top the dispenser
function removeChocolates(chocolates,number){
    var candies=[];
    if(number<=0){
        return "Number cannot be zero/negative";
    }
    else if(number>=chocolates.length+1){
        return "Insufficient chocolates in the dispenser";
    }
    else{
        for(let i=0;i<number;i++){
            candies.push(chocolates[0]);
            chocolates.shift();
        }
        return candies;
    }
}


//Progression 3: Dispense ___ chocolates
function dispenseChocolates(chocolates,number){
    var candies=[];
    if(number<=0){
        return "Number cannot be zero/negative";
    }
    else if(number>=chocolates.length+1){
        return "Insufficient chocolates in the dispenser";
    }
    else{
        for(let i=0;i<number;i++){
            candies.push(chocolates[chocolates.length-1]);
            chocolates.pop();
        }
        return candies;
    }
}


//Progression 4: Dispense ___ chocolates of ____ color
function dispenseChocolatesOfColor(chocolates,number,color){
    var candies=[];
    if(number<=0){
        return "Number cannot be zero/negative";
    }
    else if(number>=chocolates.length+1){
        return "Insufficient chocolates in the dispenser";
    }
    else{
        for(let i=0;i<number;i++){
            if(color== chocolates[chocolates.length-1]){
                candies.push(chocolates[chocolates.length-1]);
                chocolates.pop();
            }
        }
        return candies;
    }

}


//Progression 5: Display ___ chocolates of each color. Return array of numbers [green, silver, blue, crimson, purple, red, pink]
function noOfChocolates(chocolates){
    var cnt=[];
    var exist=[];
    const countOccurrences = (arr, val) => arr.reduce((a, v) => (v === val ? a + 1 : a), 0);
    for(let i=0;i<chocolates.length;i++){
        if(!exist.includes(chocolates[i])){
            exist.push(chocolates[i]);
            cnt.push(countOccurrences(chocolates,chocolates[i]));
        }
    }
    return cnt;
}


//Progression 6: Sort chocolates based on count in each color. Return array of colors
function sortChocolateBasedOnCount(chocolates){
    let uniqueColors = {}
    chocolates.forEach((color) => {
        if (!(color in uniqueColors)) {
            uniqueColors[`${color}`] = 0
        }
        uniqueColors[`${color}`]++
    });

    let sortedChocolates = Object.entries(uniqueColors)
        .sort()
        .sort((a, b) => b[1] - a[1])
    chocolates.length = 0
    sortedChocolates.forEach((item) => {
        for (let i = 1; i <= item[1]; i++) {
            chocolates.push(item[0])
        }
    });

    return chocolates
    
}


//Progression 7: Change ___ chocolates of ____ color to ____ color
function changeChocolateColor(chocolates,number, color, finalColor){
    if(number<=0){
        return "Number cannot be zero/negative";
    }
    if(color==finalColor){
        return "Can't replace the same chocolates";
    }
    for(let i=0;i<chocolates.length;i++){
        if(chocolates[i]==color){
            chocolates[i]=finalColor;
        }
    }
    return chocolates;
}


//Progression 8: Change all chocolates of ____ color to ____ color and return [countOfChangedColor, chocolates]
function changeChocolateColorAllOfxCount(chocolates,color, finalColor){
    const countOccurrences = (arr, val) => arr.reduce((a, v) => (v === val ? a + 1 : a), 0);
    if(color==finalColor){
        return "Can't replace the same chocolates";
    }
    for(let i=0;i<chocolates.length;i++){
        if(chocolates[i]==color){
            chocolates[i]=finalColor;
        }
    }
    return [countOccurrences(chocolates,finalColor), chocolates];
    
}


//Challenge 1: Remove one chocolate of ____ color from the top


//Challenge 2: Dispense 1 rainbow colored colored chocolate for every 3 chocolates of the same color dispensed
