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
                <td class="py-1 px-4">${product.id}</td>
                <td class="py-1 px-4">${product.transaction}</td>
                <td class="py-1 px-4">${product.amount}</td>
                <td class="py-1 px-4">${product.date}</td>
                <td  class="py-1 px-4">
                <span class="${product.status == "Success" ? 'text-green-600' : 'text-yellow-500'}"> ${product.status} </span>
                </td>
            </tr>
            `;

            transation_count++ 
            i++
        }             

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
        
        column1.innerHTML = `<span class="py-8 px-4">${transactions[index].id}</span>`;
        column2.innerHTML = `<span class="py-8 px-4">${transactions[index].transaction}</span>`;
        column3.innerHTML = `<span class="py-8 px-4">${transactions[index].amount}</span>`;
        column4.innerHTML = `<span class="py-8 px-4">${transactions[index].date}</span>`;
        column5.innerHTML = ` <span class="${transactions[index].status == "Success" ? 'text-green-600' : 'text-yellow-500'}  py-8 px-4"> ${transactions[index].status}</span>`;    

        index++
        
        } else{
            
            clearInterval(interval)
        }
        
        }

        
          let addRowInterval = setInterval(() =>{
                transation_count++
                counter.innerHTML = transation_count;
                addRow()

            if(transation_count == transactions.length){
                clearInterval(addRowInterval);
            }

            } , 10000);

            
    
        

        

output.innerHTML = data;
counter.innerHTML = transation_count;

})
.catch(error => {
    console.error('Error:', error);
  });


