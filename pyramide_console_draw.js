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

function drawPyramid(character="#", length=7) {
   
    const rows = [];
    for (let i=0; i< length; i++) {
        let result=character;
        for (let j = 0; j < i; j++) {
            result = character + result + character
        }
        rows.push(addSpace(length+1-i) + result);
    }

    for (const row of rows) {
        console.log(row);
    }
   
}
drawPyramid("*",12);