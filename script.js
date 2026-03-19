fetch("https://my-json-server.typicode.com/BanzEm/js-api/transactions")
.then(response => response.json())
.then(function(transactions){

    let output = document.querySelector("#json-output")
    let data = "";

    let i = 0;
    let transation_count = 0;

    
    for(let product of transactions){

        if (i < 10){
            data += `   
            <tr>
                <th>${product.id}</th>
                <td>${product.transaction}</td>
                <td>${product.amount}</td>
                <td>${product.date}</td>
                <td >
                <span class="${product.status == "Success" ? 'text-green-600' : 'text-yellow-500'}"> ${product.status} </span>
                </td>
            </tr>
            `;

            transation_count++
            i++

        } else{
            const intervalCounter = setInterval(table_rows,3000)

            function table_rows(){
                data += data
             
               }
            transation_count++

        }

    }        
output.innerHTML = data;

})
.catch(error => {
    console.error('Error:', error);
  });


  