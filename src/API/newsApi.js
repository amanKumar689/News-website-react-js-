


// Headline

export  const  News_Order_by_cat=  (category) =>{


  

   

    return new Promise((resolve,reject)=>{

        // Let use XHR for requesting some URL

        const  request = new XMLHttpRequest()
      

      if(!category || category === 'home')
      {

         request.open('GET','https://newsapi.org/v2/top-headlines?language=en&apiKey=f9356d892c0b4612a41fb9d17ccec4f1');
        } 
        else 
        {
        request.open('GET',`https://newsapi.org/v2/top-headlines?category=${category}&language=en&apiKey=f9356d892c0b4612a41fb9d17ccec4f1`);

      } 
      

         
        request.onreadystatechange = ()=>{


           if(request.readyState=== XMLHttpRequest.DONE)
           {
 
              if(request.status >=200 && request.status<=400)
              {
                
                resolve(JSON.parse(request.response))
              } 

              else
              {
                console.log("some error",request.response);
                reject("ERROR HAI MERE DOST");
              }

           }

        } 
        request.send(); 

    })

    

  }

// Top Headline

export const HeadlineData= () =>{

  return new Promise((resolve,reject)=>{

    // Let use XHR for requesting some URL

    const  request = new XMLHttpRequest()
       
    request.open('GET','https://newsapi.org/v2/top-headlines?pageSize=10&language=en&apiKey=f9356d892c0b4612a41fb9d17ccec4f1');

     
    request.onreadystatechange = ()=>{


       if(request.readyState=== XMLHttpRequest.DONE)
       {

          if(request.status >=200 && request.status<=400)
          {
            resolve(JSON.parse(request.response))
          } 

          else
          {
            console.log("some error");
            reject("ERROR HAI MERE DOST");
          }

       }

    } 
    request.send(); 

})

}

