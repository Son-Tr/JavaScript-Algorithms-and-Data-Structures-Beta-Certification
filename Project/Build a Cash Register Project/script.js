let cid = [
    ['PENNY', 1.01],
    ['NICKEL', 2.05],
    ['DIME', 3.1],
    ['QUARTER', 4.25],
    ['ONE', 90],
    ['FIVE', 55],
    ['TEN', 20],
    ['TWENTY', 60],
    ['ONE HUNDRED', 100]
];
let price = 3.26;
 document.getElementById("price").textContent = `Total: $${price}`


const cash = document.getElementById("cash");
const purchaseBtn = document.getElementById('purchase-btn');
const resultChange = document.getElementById("change-due");
const cashInDrawer = document.getElementById("cash-in-drawer");

// calculate Change function
const calculateChange = () => {
    if (Number(cash.value) < price) {
        resultChange.innerHTML = `
        <p>Customer does not have enough money to purchase the item</P>`;
        cash.value = "";
        return;
    }
    if (Number(cash.value) === price) {
        resultChange.innerHTML = `
        <p>No change due - customer paid with exact cash</P>`;
        cash.value = "";
        return;
    }
    let changeDue = Number(cash.value) - price;
    console.log("changeDue", changeDue);
    let cidCopy = [...cid].reverse();
    console.log("cidCopy", cidCopy);
    let currency = [100, 20, 10, 5, 1, 0.25, 0.1, 0.05, 0.01];
    let totalCid = Number(cidCopy.reduce((a, b) => a + b[1], 0).toFixed(2));
    console.log("totalCid", totalCid);

    let result = { status: "OPEN", changeArr: [] };

    if (totalCid < changeDue) {
        return resultChange.innerHTML = `
        <p> Status: INSUFFICIENT_FUNDS </p>`;
    }

    if (totalCid === changeDue) {
        result.status = "CLOSED";
    }

    for (let i = 0; i < cidCopy.length; i++) {
        let count = 0;
        let cashCurrent = currency[i];
        let cashName = cidCopy[i][0];
        let cashCidCurrent = cidCopy[i][1];
        while (changeDue >= cashCurrent && cashCidCurrent > 0) {
            cashCidCurrent -= cashCurrent;
            changeDue = Number((changeDue -= cashCurrent).toFixed(2));
            count++;
        }
        if (count > 0) {
            result.changeArr.push([cashName, cashCurrent * count]);
        }
    }
    //this case dont enough cash to give user
    if (Number(changeDue) > 0) {
        return resultChange.innerHTML = `
        <p> Status: INSUFFICIENT_FUNDS </p>`;
    }
    convertHTML(result.status, result.changeArr);
    convertVid(result.changeArr)
}

// convert vid into Html , check and update ;
const convertVid = (changeArr) => {
    cashInDrawer.innerHTML = cid.map(item=> `<p>${item[0]}: $${item[1]}</p>`).join("")
    for (let i = 0; i < cid.length; i++) {
     let index = changeArr.findIndex(item=> item[0]=== cid[i][0])
        if(index!==-1){
            cid[i][1]-= changeArr[index][1];
        }
    }
    cashInDrawer.innerHTML = cid.map(item => `<p>${item[0]}: $${item[1].toFixed(2)}</p>`).join("");
    console.log(cid)
};


//convert result into HTML 
const convertHTML = (status, changeArr) => {
    resultChange.innerHTML = `<p><strong> Status: ${status} </strong></p></br>`;
    resultChange.innerHTML+=  changeArr.map((item) =>  `<p> ${item[0]}: ${item[1]} </p>`).join("");
    return;
}
// event listerner click
purchaseBtn.addEventListener("click", () => {  calculateChange();
    cash.value=""
 });


// event keydown enter
cash.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        calculateChange();
        cash.value=""
    }
});

// convert cash in drawer
convertVid([]);    