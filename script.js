fetch("https://my-json-server.typicode.com/BanzEm/js-api/transactions")
.then(response => response.json())
.then(function(transactions){

    let output = document.querySelector("#json-output")
    let counter = document.querySelector("#transaction_count")

    let data = "";

    let i = 0;
    let transation_count = 0;

    
    for(let product of transactions){

        if (i < 10){
            data += `   
            <tr>
                <td>${product.id}</td>
                <td>${product.transaction}</td>
                <td>${product.amount}</td>
                <td>${product.date}</td>
                <td >
                <span class="${product.status == "Success" ? 'text-green-600' : 'text-yellow-500'}"> ${product.status} </span>
                </td>
            </tr>
            `;

            transation_count++ 

        } else if ( i >= 9){

       

        }          
        
        i++

    } 

    let index = 10

    function addRow(){

        if(index < transactions.length){
        var table = document.getElementById("transaction-table");
        var row = table.insertRow(1);
        var column1 = row.insertCell(0);
        var column2 = row.insertCell(1);
        var column3 = row.insertCell(2);
        var column4 = row.insertCell(3);
        var column5 = row.insertCell(4);
        
        column1.innerHTML = transactions[index].id;
        column2.innerHTML = transactions[index].transaction;
        column3.innerHTML = transactions[index].amount;
        column4.innerHTML = transactions[index].date;
        column5.innerHTML = transactions[index].status;    

        index++
        } else{
            clearInterval(interval)
        }
        }
    
        setInterval(addRow,10000)
        transation_count++ 


output.innerHTML = data;
counter.innerHTML = transation_count;

})
.catch(error => {
    console.error('Error:', error);
  });


