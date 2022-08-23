const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '03796b0546msh90d07bf6190eb68p168dffjsn20f07e26501e',
                'X-RapidAPI-Host': 'disc-golf-discs.p.rapidapi.com'
            }
        };
        
        fetch('https://disc-golf-discs.p.rapidapi.com/discs?limit=1000', options)
            .then(response => response.json())
            .then(response => console.log(response))
            .catch(err => console.error(err));
