var axios = require('axios');
async function getChart(id){
    const url='http://localhost:4200/api/chart/'+id;
    var a = await axios.get(url);
    var data = a.data.mydata;
    var time = [];
    var mncount = [];
    var roi = [];
    var pricebtc = [];
    var priceusd = [];
    var dailyincome = [];
    var monthlyincome = [];
    var yearlyincome = [];
    data.map((o)=>{
      //console.log(o.time);
      time.push(o.time);
      mncount.push(o.index.mncount);
      roi.push(o.index.roi);
      pricebtc.push(o.index.pricebtc);
      priceusd.push(o.index.priceusd);
      dailyincome.push(o.index.dailyincome);
      monthlyincome.push(o.index.monthlyincome);
      yearlyincome.push(o.index.yearlyincome);
    })
    var pricedata = {
      masternode: {
        labels: time,
        datasets: [
        {
          label: 'Masternode',
          fill: false,
          lineTension: 0.1,
          backgroundColor: '#d9534f',
          borderColor: '#d9534f',
          borderCapStyle: 'butt',
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          pointBorderColor: '#d9534f',
          pointBackgroundColor: '#fffaaa',
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: '#d9534f',
          pointHoverBorderColor: '#d9534f',
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: mncount
        }]
      },
      roi: {
        labels: time,
        datasets: [
        {
          label: 'ROI [%]',
          fill: false,
          lineTension: 0.1,
          backgroundColor: '#325d88',
          borderColor: '#325d88',
          borderCapStyle: 'butt',
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          pointBorderColor: '#325d88',
          pointBackgroundColor: '#fff',
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: '#325d88',
          pointHoverBorderColor: 'rgba(220,220,220,1)',
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: roi
        }]
      },
      priceUSD: {
        labels: time,
        datasets: [
        {
          label: 'Price [USD]',
          fill: false,
          lineTension: 0.1,
          backgroundColor: '#00b300',
          borderColor: '#00b300',
          borderCapStyle: 'butt',
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          pointBorderColor: '#00b300',
          pointBackgroundColor: '#fff',
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: '#00b300',
          pointHoverBorderColor: 'rgba(220,220,220,1)',
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: priceusd
        }]
      },
      priceBTC: {
        labels: time,
        datasets: [
          {
              label: 'Price [BTC]',
              fill: false,
              lineTension: 0.1,
              backgroundColor: '#671164',
              borderColor: '#671164',
              borderCapStyle: 'butt',
              borderDash: [],
              borderDashOffset: 0.0,
              borderJoinStyle: 'miter',
              pointBorderColor: '#671164',
              pointBackgroundColor: '#fff',
              pointBorderWidth: 1,
              pointHoverRadius: 5,
              pointHoverBackgroundColor: '#671164',
              pointHoverBorderColor: 'rgba(220,220,220,1)',
              pointHoverBorderWidth: 2,
              pointRadius: 1,
              pointHitRadius: 10,
              data: priceusd
            }]
      },
      dailyincome: {
        labels: time,
        datasets: [
          {
            label: `Daily [${id}]`,
            fill: false,
            lineTension: 0.1,
            backgroundColor: '#ffcd56',
            borderColor: '#ffcd56',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: '#ffcd56',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: '#ffcd56',
            pointHoverBorderColor: 'rgba(220,220,220,1)',
            pointHoverBorderWidth: 2,
            pointRadius: 2,
            pointHitRadius: 10,
            data: dailyincome
          }]
      },
      monthlyincome: {
        labels: time,
        datasets: [
          {
            label: `Monthly [${id}]`,
            fill: false,
            lineTension: 0.1,
            backgroundColor: '#4bc0c0',
            borderColor: '#4bc0c0',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: '#4bc0c0',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: '#4bc0c0',
            pointHoverBorderColor: 'rgba(220,220,220,1)',
            pointHoverBorderWidth: 2,
            pointRadius: 2,
            pointHitRadius: 10,
            data: monthlyincome
          }]
      },
      yearlyincome: {
        labels: time,
        datasets: [
          {
            label: `Yearly [${id}]`,
            fill: false,
            lineTension: 0.1,
            backgroundColor: '#9966ff',
            borderColor: '#9966ff',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: '#9966ff',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: '#9966ff',
            pointHoverBorderColor: 'rgba(220,220,220,1)',
            pointHoverBorderWidth: 2,
            pointRadius: 2,
            pointHitRadius: 10,
            data: yearlyincome
          }]  
      }
    }
    return pricedata;
}
export default getChart;
 