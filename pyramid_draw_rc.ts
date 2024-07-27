function est () {
    console.log("       #");
    console.log("      ###");
    console.log("     #####");
    console.log("    #######");
    console.log("   #########");
    console.log("  ###########");
    console.log(" #############");
    console.log("###############");
};

function padRow(character:string, rowNumber: number,rowCount: number) {
    let space = Math.max(rowCount-rowNumber,0);
    return " ".repeat(space)+character.repeat(2 * rowNumber + 1)+ " ".repeat(space);
}

const draw = (character: string,length:number=10,inverted:boolean =false) => {
    let rows:string[] = [];
    for (let i = 0; i < length; i++) {
        if (inverted) {
            rows.unshift(padRow(character,i,length));
        }else{
            rows.push(padRow(character,i,length));
        } 
    }
    let result: string = "";
    for (const row of rows) {
        result+= row + "\n";
    }
    console.log(result)
};

draw("#",5, true);
draw("*",15);