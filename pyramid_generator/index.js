function test () {
    console.log("       #")
    console.log("      ###")
    console.log("     #####")
    console.log("    #######")
    console.log("   #########")
    console.log("  ###########")
    console.log(" #############")
    console.log("###############")
}

console.log("\nPyramid that draw by a script\n")

function addSpace(length) {
    let result = "";
    const space = " ";
    for (let i = 0; i < length; i++) {
        result += space 
    }
    return result;
}

function drawPyramid(character="#", length=7, inverted=false) {
   
    const rows = [];
    for (let i=0; i< length; i++) {
        let result=character;
        for (let j = 0; j < i; j++) {
            result = character + result + character
        }
        if (inverted) {
            rows.unshift(addSpace(length+1-i) + result);
        }else{
            rows.push(addSpace(length+1-i) + result);
        }
       
    }

    for (const row of rows) {
        console.log(row);
    }
   
}
drawPyramid("*",12);
drawPyramid("*",10, true);