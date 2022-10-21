class PersonAccount {

    constructor (firstName , lastName , incomes , expenses){
        this.firstName = firstName
        this.lastName = lastName
        this.incomes = incomes
        this.expenses = expenses
    }


    totalIncome() {
        let total = 0
        this.incomes.forEach(element => {
            total += Number(element.incomeAmount);
        });
        return total
    }

    totalExpense() {
        let total = 0;
        this.expenses.forEach(item => {
            total += Number(item.expenceAmount)
        })
        return total
    }

    addIncome(income) {
        this.incomes.push(income)
        console.log("Income Has Been Added Successfully")
    }

    addExpense(expence) {
        this.expenses.push(expence)
        console.log("Expence Has Been Added Successfully")
    }

    accountBalance() {
        return this.totalIncome() - this.totalExpense()
    }
}

count = 0
document.getElementById("addAccBtn").onclick = displayForm

let accounts = []

function displayForm() {
    document.getElementById("form-container").style.display = "block"
}


document.getElementById("add-acc-submit-btn").onclick = saveData


function saveData() {
    let firstName = document.getElementById("firstNameInput").value 
    let lastName = document.getElementById("lastNameInput").value 
    let incomeAmount = document.getElementById("incomeAmountInput").value
    let incomeDesc = document.getElementById("incomeDescInput").value
    let expenceAmount = document.getElementById("expenceAmountInput").value
    let expenceDesc = document.getElementById("expenceDescInput").value

    const perAcc = new PersonAccount(firstName, lastName ,[{incomeAmount , incomeDesc}] , [{expenceAmount, expenceDesc}] );
    if ((isNaN(incomeAmount) || isNaN(expenceAmount)) && incomeAmount.length <= 0 || expenceAmount.length <= 0 ) {
        alert("Invalid Input")
        console.log(incomeAmount.length , expenceAmount.length)
        return
    }

    accounts.push(perAcc)

    document.getElementById("form-container").style.display = "none";

    document.getElementById("firstNameInput").value  = ""
    document.getElementById("lastNameInput").value = ""
    document.getElementById("incomeAmountInput").value = ""
    document.getElementById("incomeDescInput").value = ""
    document.getElementById("expenceAmountInput").value = ""
    document.getElementById("expenceDescInput").value = ""

     displayAccountDetails(perAcc)
}



function displayAccountDetails(obj) {
    count++
    const contentToAdd = `<div class="contents-container">
                            <div class="name"> <h2>${obj.firstName} ${obj.lastName}</h2> </div>

                            <div id="totals-table-${count}">
                                <table border="1" style="width: 100%;">
                                    <tbody>
                                        <tr>
                                            <th>Total Income</th>
                                            <th>Total Expence</th>
                                            <th>Account Balance</th>
                                        </tr>
                                        <tr>
                                        <td>${obj.totalIncome()}</td>
                                        <td>${obj.totalExpense()}</td>
                                        <td>${obj.accountBalance()}</td>
                                        </tr>
                                    </tbody>
                                </table>
                                </div>
                                <div id="incomes-table-${count}">
                                    <table border="1" style="width: 100%;">
                                        <tbody>
                                            <tr><th colspan="2">Incomes</th></tr>
                                            <tr>
                                                <th width="50%">Income</th>
                                                <th>Descriptioni</th>

                                            </tr>
                                            <tr>
                                            <td>${obj.incomes[0].incomeAmount}</td>
                                            <td>${obj.incomes[0].incomeDesc}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div id="expences-table-${count}">
                                    <table border="1" style="width: 100%;">
                                        <tbody>
                                            <tr><th colspan="2">Expences</th></tr>
                                            <tr>
                                                <th width="50%">Expence</th>
                                                <th>Description</th>
                                            </tr>
                                            <tr>
                                            <td>${obj.expenses[0].expenceAmount}</td>
                                            <td>${obj.expenses[0].expenceDesc}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div id="buttons${count}">
                                    <button id="add-income-${count}" onclick = "displayDiv( 'incomeButton' ,'addsdiv${count}')" value="incomeButton">Add Income</button>
                                    <button id="add-expence-${count}" onclick = "displayDiv('expenseButton' ,'addsdiv${count}')" value="expenseButton">Add Expence</button>
                                </div>
                                <div id="addsdiv${count}" style="display: none;">
                                        <div class="input-fields">
                                            <input type="text" placeholder="Income Amount" >
                                            <input type="text" placeholder="Income Description">
                                        </div>
                                        <div>
                                            <button id="inside-aamount-btn-${count}" onclick = "hideDiv('addsdiv${count}')" >Submit</button>
                                        </div>
                                </div>
                        </div>` 

                        document.getElementById("container").innerHTML += contentToAdd
}

let buttonValue = "";

function displayDiv(btnValue,id){
    document.getElementById(id).style.display = "block"
    buttonValue = btnValue
}

function hideDiv(id){
    
    let elem = document.getElementById(id);
    let elemid = elem.attributes[0].nodeValue.split("")[elem.attributes[0].nodeValue.length-1]
    const arr = []
      
    Array.from(elem.children[0].children).forEach(child => arr.push(child.value) )

    if(buttonValue === "incomeButton"){
        let ss = document.getElementById(`incomes-table-${elemid}`).children[0]
        ss.children[0].innerHTML += `<tr> <td>${arr[0]}</td> <td>${arr[1]}</td> </tr>`
       accounts[elemid-1].addIncome({incomeAmount : Number(arr[0]) , incomeDesc : arr[1]})
    }

    if(buttonValue === "expenseButton"){
        let ss = document.getElementById(`expences-table-${elemid}`).children[0]
        ss.children[0].innerHTML += `<tr> <td>${arr[0]}</td> <td>${arr[1]}</td> </tr>`
       accounts[elemid-1].addExpense({expenceAmount : Number(arr[0]) , expenceDesc : arr[1]})
    }


    let num = 1
    let ss = document.getElementById(`totals-table-${elemid}`).children[0]
    Array.from(ss.children[0].children[1].children).forEach(child  => {
        if (num === 1){
            child.innerText = accounts[elemid-1].totalIncome()
            num++
        }
        else if(num === 2) {
            child.innerText = accounts[elemid-1].totalExpense()
            num++
        }
        else {
            child.innerText = accounts[elemid-1].accountBalance()
        }
    })
        
    elem.style.display = "none"

    elem = document.getElementById(id);
    Array.from(elem.children[0].children).forEach(child => child.value = "" )
}
