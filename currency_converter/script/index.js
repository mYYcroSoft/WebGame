
function getCurrencyRates(cur_data) {
  
  }


  function calculate(){
    const cur_data = {
        count: document.getElementById("first_count").value,
        from: document.getElementById("from_cur").value,
        to: document.getElementById("to_cur").value
    }
  
    var url = `https://api.exchangerate-api.com/v4/latest/${cur_data.from}`;
    fetch(url)
      .then(response => response.json())
      .then(data => {
        currencyRates = data.rates;
        let to_rate = document.getElementById("to_cur").value
      
        console.log(calc)
      })
   
}