function updateParseOutput(){
    document.getElementById("parsed").innerHTML = parseTerraform();
}

function parseTerraform(){
    const terraform = document.getElementById("terraform").value;
    let lines = terraform.split('\n');
    let output = "";
    for(let i = 0; i < lines.length;i++){
        if(lines[i].trim().substring(0,1) == "#" || lines[i].trim().substring(0,4).toLowerCase() == "plan"){
            output += lines[i] + "\n\n";
        }
    }
    return output;
}

function copyParsed() {
    var copyText = document.getElementById("parsed");
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    document.execCommand("copy");
    // alert("Copied the text: " + copyText.value);
  }