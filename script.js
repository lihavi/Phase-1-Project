document.addEventListener("DOMContentLoaded",() => {
    getAllTrains();
    document.querySelector("#table-order").addEventListener("submit", (e) => {
        e.preventDefault();
        let form =e.target;
    });
});


const train_num = 12235
const trainName = "Dibrugarh - New Delhi Rajdhani Express"
const departTime = 1925
const trains = [
    {train_num:12236, trainName: "New Delhi - Dibrugarh Rajdhani Express",  departTime: 0925,},
  {train_num:12301, trainName: "Howrah - New Delhi Rajdhani Express (via Gaya)",  departTime:1655 ,},
   {train_num:12302, trainName: "New Delhi - Howrah Rajdhani Express (Via Gaya)", departTime:1655,},
   {train_num:12305, trainName: "Howrah - New Delhi Rajdhani Express (via Patna)",  departTime:1405,},
   {train_num:12306, trainName: "New Delhi - Howrah Rajdhani Express (via Patna)",  departTime:1655,}  
]
let train = {train_num, trainName, departTime}
trains.push(train);
console.log(trains);


const input = document.getElementById('myForm').addEventListener("click", clickAlert);

function clickAlert() {
  alert('Your details has been submitted successfully');
}

document.getElementById("demo").addEventListener("click", myFunction);
function myFunction() {
  document.getElementById("demo").innerHTML = "YOU CLICKED ME!";
}


function renderTrainRow(train){
    console.log(train)
    let row =document.createElement('tr');
    row.innerHTML=`
    <td>${train.train_num}</td>
    <td>${train.name}</td>
    <td>${train.data.arriveTime}</td>
    <td>${train.data.departTime}</td>
    <td>${train.train_from}</td>
    <td>${train.train_to}</td>
    `;
    document.querySelector('.table').appendChild(row)
}
function getAllTrains(){const options = {
	method: 'POST',
	headers: {
		'content-type': 'application/json',
		'X-RapidAPI-Key': '91915021edmsha0b4e2c95975759p1b9176jsnffcc33e7e69f',
		'X-RapidAPI-Host': 'trains.p.rapidapi.com'
	},
	body: '{"search":"Rajdhani"}'
};

fetch('https://trains.p.rapidapi.com/', options)
	.then(response => response.json())
	.then(response => {
        response.forEach(train => renderTrainRow(train));
        console.log(response)
    })
	.catch(err => console.error(err));
}

var tickets = [];

document.getElementById("ticket-form").addEventListener("submit", submitOrder);
function submitOrder(event){
    event.preventDefault();
    var trainNo = document.getElementById('trainNumber').value;
    var trainName = document.getElementById('trainName').value;
    var departure = document.getElementById('departure').value;
    var ticket = {
        trainNo,
        trainName,
        departure
    };
    tickets.push(ticket);
    console.log('tickets', tickets)
}

function renderTickets(ticket){
    console.log(ticket)
    let row =document.createElement('tr');
    row.innerHTML=`
    <td>${tickets.trainNo}</td>
    <td>${ticket.trainName}</td>
    <td>${ticket.departure}</td>
    `;
    document.querySelector('.table').appendChild(row)
}

// function initialize(){
//     getAllTrains()
// }
// initialize();