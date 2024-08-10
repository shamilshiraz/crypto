displayPrice()
async function displayPrice(){

    try{
       const viewPrice=document.getElementById('viewprice')
       const bitcoin=document.getElementById('bitcoin')
       const ethereum=document.getElementById('ethereum')
       const solana=document.getElementById('solana')
       const usdt=document.getElementById('usdt')
       const cardano=document.getElementById('cardano')
       const ripple=document.getElementById('ripple')
       const eos=document.getElementById('eos')
       const response= await fetch('https://api.coincap.io/v2/assets/bitcoin')
       const data=await response.json()
       console.log(data)
       console.log();

       bitcoin.innerHTML+=data.priceUsd


    //    viewPrice.innerHTML+=

       
    





    }
    catch(error){
        console.log(error);
    }




     




}