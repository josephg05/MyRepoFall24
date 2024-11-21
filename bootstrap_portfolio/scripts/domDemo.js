console.log(document);

function testTheDom() {
    console.log("testing the dom");

    var nodes = document.getElementsByTagName("li");
    console.log(nodes);

    for(let node of nodes) {
        console.log(node.textContent);
    }

    var checkingNode = document.getElementById("checking");
    console.log(checkingNode.textContent);
    //checkingNode.textContent = "Changed!";
    balance = parseInt(checkingNode.textContent);
    balance += 100;
    checkingNode.textContent = balance;
}

function depositChecking() {
    var td = document.getElementById('checking');
    checking = parseInt(td.textContent,10);
    checking += 100;
    td.textContent = checking;
}

function depositSavings() {
    var td = document.getElementById('savings');
    savings = parseInt(td.textContent,10);
    savings += 100;
    td.textContent = savings;

    if(savings == 0) {
        var title = document.getElementById('bankAccountTitle');
        title.textContent = "Bank Account";
    }
}

function emptySavings() {
    var td = document.getElementById('savings');
    savings = parseInt(td.textContent,10);
    savings = 0;
    td.textContent = savings;
}