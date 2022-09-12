const getAccountNumber = (account_number,bank_number) => {
    fetch( `https://api.paystack.co/bank/resolve?account_number=${account_number}&bank_code=${bank_number}` , {
        headers: {
            "Authorization" : "Bearer sk_test_d1b83ae902e7135db7d879d7121ec665e0a8243d" 
         }
      }).then(response => {
        console.log(response);
        if (!response.ok) {
            throw Error("Invalid Account Number");
        }
        return response.json();
      })
      .then(data => {
        console.log(data.data)
        const vi = data.data.account_name
        console.log(`my variable is ${vi}`);
        document.getElementById("accname").value =  ` ${vi}`; 
        const inputs = document.querySelectorAll('input.A');
        inputs.forEach(input => input.disabled = true);
        const sels = document.querySelectorAll('select.B');
        sels.forEach(select => select.disabled = true);


        // var element = document.getElementById("elementsToOperateOn");
        // element.classList.add("show");
        

// Create element:


// Append to another element:
accname.value = `${vi}`
// document.getElementById("myDIV").appendChild(para);
$('#elementsToOperateOn :input').attr('disabled', true);


      }).catch(error => {
        alert(error)
      } )


};

// document.querySelector('buton').addEventListener('click', () => {

// })
function myFunction() {

    const account_number = document.getElementById("myText").value;
    const bank_number = document.getElementById("app").value;
    console.log(`my variable is ${account_number}`);
    console.log(`my variable is ${bank_number}`);
   
    
    getAccountNumber(account_number, bank_number);
  }



//   then((data) => data.json()).then((data) => console.log(data));

// .then(response => response.json()).then(responseJson => console.log(responseJson))



