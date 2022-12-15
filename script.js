document.addEventListener("DOMContentLoaded",() => {
    getAllTrains();
    document.querySelector("#table-order").addEventListener("submit",(e) => {
        e.preventDefault();
        let form=e.target;
    })
})
const train_num=5600
const trainName="madaraka express"
const departTime=0800
const trains= [
    {train_num:5601,trainName:"DMU",departTime:0940,},
    {train_num:5602,trainName:"Transit Shed",departTime:1200,},
    {train_num:5603,trainName:"NCR",departTime:0900,},
    {train_num:5604,trainName:"SGR",departTime:2000,},
]
