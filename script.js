document.addEventListener("DOMContentLoaded",() => {
    getAllTrains();
    document.querySelector("#table-order").addEventListener("submit", (e) => {
        e.preventDefault();
        let form =e.target;
    });
    
})
const train_num=5600
const trainName="madaraka express"
const departTime=0800
const trains= [
]
let train = {train_num,trainName,departTime}

console.log(trains);

const input=document.getElementById('my Form').addEventListener("click", clickAlert);
function clickAlert(){
    alert('Your details have been submitted succesfully')
}
document.getElementById("demo")
function myFunction(){
    document.getElementById("demo").innerHTML ="YOU CLICKED ME!";

}
function renderTrainRow(train){
    console.log(train)
    let row=document.createElement('tr');
    row.innerHTML=`
    <td>${train.train_num}</<td>
    <td>${train.name}</td>
    <td>${train.data.departTime}</td>
    <td>${train.data.arriveTime}</td>
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
	.then(response => console.log(response))
	.catch(err => console.error(err));
 }
//     function initialize(){
//         getAllTrains()
//     }
//    initialize();
    


        
