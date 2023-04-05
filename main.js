



let myTable = document.querySelector('#table');

const date = new Date();
const dateStr = date.toDateString();
const newDate = dateStr.split(' ')
console.log(newDate)


let employees = [
    { serialNo: '1', email: "adeola@gmail.com" , role: "C.E.O", createdBy: 'Osas', createdDate: '', modifiedBy: "Femi",  modifiedDate: "", },
    { serialNo: '2', email: "adegoke@gmail.com" , role: "Manager", createdBy: 'Chioma', createdDate: '', modifiedBy: "Funmi",  modifiedDate: "", },
    { serialNo: '3', email: "tobi@gmail.com" , role: "Devops Engineer", createdBy: 'Kemi', createdDate: '', modifiedBy: "Kemi",  modifiedDate: "", },
    { serialNo: '4', email: "wale@gmail.com" , role: "Project manager", createdBy: 'Funmi', createdDate: '', modifiedBy: "Chioma",  modifiedDate: "", },
    { serialNo: '5', email: "oladele@gmail.com" , role: "Supervisor", createdBy: 'Femi', createdDate: '', modifiedBy: "Osas",  modifiedDate: "", },
    { serialNo: '6', email: "femi@gmail.com" , role: "Front-engineer", createdBy: 'Oladele', createdDate: '', modifiedBy: "Oladele",  modifiedDate: "", },
    { serialNo: '7', email: "funmi@gmial.com" , role: "Backend engineer", createdBy: 'Wale', createdDate: '', modifiedBy: "Wale",  modifiedDate: "", },
    { serialNo: '8', email: "kemi@gmail.com" , role: "HR", createdBy: 'Tobi', createdDate: '', modifiedBy: "Tobi",  modifiedDate: "", },
    { serialNo: '9', email: "chioma@gmial.com" , role: "Secretary", createdBy: 'Adegoke', createdDate: '', modifiedBy: "Adegoke",  modifiedDate: "", },
    { serialNo: '10', email: "osas@gmail.com" , role: "Product manager", createdBy: 'Adeola', createdDate: '', modifiedBy: "Adeola",  modifiedDate: "", },
]

let table = document.createElement('table');

let tableHead = document.createElement('tr');
let tableHeadcell1 = document.createElement('th');

tableHeadcell1.innerText = 'S/N';
tableHead.appendChild(tableHeadcell1);


let tableHeadcell2 = document.createElement('th');
tableHeadcell2.innerText = 'Email';
tableHead.appendChild(tableHeadcell2);

let tableHeadcell3 = document.createElement('th');
tableHeadcell3.innerText = 'Role';
tableHead.appendChild(tableHeadcell3);

let tableHeadcell4 = document.createElement('th');
tableHeadcell4.innerText = 'Created By';
tableHead.appendChild(tableHeadcell4);

let tableHeadcell5 = document.createElement('th');
tableHeadcell5.innerText = 'Created Date';
tableHead.appendChild(tableHeadcell5);


let tableHeadcell6 = document.createElement('th');
tableHeadcell6.innerText = 'Modified By';
tableHead.appendChild(tableHeadcell6);


let tableHeadcell7 = document.createElement('th');
tableHeadcell7.innerText = 'Modified Date';
tableHead.appendChild(tableHeadcell7);

table.appendChild(tableHead);

document.body.appendChild(table);


for (let i = 0; i < employees.length; i++) {
    let tableRow = document.createElement('tr');
    let tableCell1 = document.createElement('td');
    tableCell1.innerText = employees[i].serialNo;
    tableRow.appendChild(tableCell1);

    let tableCell2 = document.createElement('td');
    tableCell2.innerText = employees[i].email;
    tableRow.appendChild(tableCell2);

    let tableCell3 = document.createElement('td');
    tableCell3.innerText = employees[i].role;
    tableRow.appendChild(tableCell3);

    let tableCell4 = document.createElement('td');
    tableCell4.innerText = employees[i].createdBy;
    tableRow.appendChild(tableCell4);

    let tableCell5 = document.createElement('td');
    tableCell5.innerText = employees[i].createdDate;
    tableRow.appendChild(tableCell5);

    let tableCell6 = document.createElement('td');
    tableCell6.innerText = employees[i].modifiedBy;
    tableRow.appendChild(tableCell6);

    let tableCell7 = document.createElement('td');
    tableCell7.innerText = employees[i].modifiedDate;
    tableRow.appendChild(tableCell7);

    table.appendChild(tableRow);
}




