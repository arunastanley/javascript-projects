function makeLine(size){      //this function uses # to draw, makeCustomLine fxn is to draw with custom character given be user 

    let line = ""
    for (let i = 0; i< size; i++){
        line = "#" + line;
    }
    return line;
}
//console.log(makeLine(5));

function makeSquare(size){
    
    // let drawSquare = "";
    // for(let i = 0; i < size; i++){
    //     drawSquare += makeLine(size) + '\n' ;
    // }
    // return drawSquare;
    return makeRectangle(size,size);
    
}
//console.log(makeSquare(5));

function makeRectangle(width, height){
    let drawRectangle = "";
    for(let i = 0; i < height; i++){
        drawRectangle += makeLine(width) + '\n' ;
    }
    return drawRectangle.slice(0,-1);
}
//console.log(makeRectangle(5, 3));


function makeDownwardStairs(height){
    let stair = ""
for (let i = 1; i <= height; i++){
    stair += makeLine(i) + '\n';
}
return stair.slice(0,-1);
}
// console.log(makeDownwardStairs(5));

function makeCustomLine(size, drawChar = "#"){

    let line = ""
    for (let i = 0; i< size; i++){
        line = drawChar + line;
    }
    return line;
}

function makeSpace(numSpaces){
    let space = "";
    for (let i = 0; i < numSpaces; i++){
        space += " ";
        }
        return space;
}

function makeSpaceLine(numSpaces, numChars, drawChar){
    let spaceLine = "";
    spaceLine += makeSpace(numSpaces);
    spaceLine += makeCustomLine(numChars,drawChar);
    spaceLine += makeSpace(numSpaces);

    return spaceLine;
    }
//console.log(makeSpaceLine(3, 5));

function makeIsoscelesTriangle(height,drawChar){
    let j = 1;
    let isoscelesTriangle = "";
        for(let i = height-1; i >= 0; i--){
       
        isoscelesTriangle += makeSpaceLine(i,j,drawChar) +'\n';
        j += 2;
        }
    return isoscelesTriangle.slice(0,-1);
}
//console.log(makeIsoscelesTriangle(5,));



function makeDiamond(height,drawChar){
    let diamond = "";
    diamond += makeIsoscelesTriangle(height,drawChar);
    diamond += '\n' + diamond.split('').reverse().join('');
    return diamond;
}
console.log(makeDiamond(5,"A"));

