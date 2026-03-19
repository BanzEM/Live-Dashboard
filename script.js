fetch("https://my-json-server.typicode.com/BanzEm/api/transactions")
.then(response => response.json())
.then(function(transactions){

    let output = document.querySelector("#json-output")
    let data = "";
    let i = 0;

    
    for(let product of transactions){

        if(i < 10){
            data += `   
            <tr>
                <th>${product.id}</th>
                <td>${product.transaction}</td>
                <td>${product.amount}</td>
                <td>${product.date}</td>
                <td>${product.status}</td>
            </tr>
            
            `;
            i++
        } else{
            
            break;
        }
    
}

output.innerHTML = data;

})