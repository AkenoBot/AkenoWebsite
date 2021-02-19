
//  main.js 
   
//  GET request using fetch() 
fetch("https://e93e8f05d5f8.ngrok.io/api/v1/cmds") 
    
    // Converting received data to JSON 
    .then(response => response.json()) 
    .then(json => { 
   console.log(json)
        // Create a variable to store HTML 
        let li = `<tr><th>Commands</th><th></th><th>Description</th></tr>`; 
        
        // Loop through each data and add a table row 
        json.cmd.forEach(cmds => { 
            li += `<tr> 
                <td class="table-text">${cmds.name}  </td> 
                <td class="table-text"> - </td> 
                <td class="table-text">${cmds.desc}</td>          
            </tr>`; 
        }); 
   
    // Display result 
    document.getElementById("users").innerHTML = li; 
}); 