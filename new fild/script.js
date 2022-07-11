 

    function getdata(){
        console.log("clicked");
        var url = 'https://api.currentsapi.services/v1/latest-news?apiKey=xbdEohR7VUVtO5Efr8V7nvNjqm5prUjOQit4GWz_U5Qx2ead';
        
        fetch(url).then(function(response) {
            return response.json();
        }).then((data)=>{
            console.log(data);
        })
        }
        getdata();



        // function getdata(){
            //     url = "aditya.txt";
            //     fetch(url).then((response)=>{
            //         return response.text();
            //     }).then((data)=>{
            //         console.log(data);
            //     })
            // }
            // getdata();