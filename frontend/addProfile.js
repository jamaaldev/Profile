//https://developer.mozilla.org/en-US/docs/Web/API
const urlNewUser = 'http://localhost:3000/'

let formRe = document.querySelector('form')
// show image Preview and collect the data input form
formRe.onchange = (even) =>{
    let [imageName] = imgID?.files
    if(imageName){
        
        imgreplace.src = URL.createObjectURL(imageName);
    }
    let formCollect= new FormData(formRe);
    formCollect.get('first')
    formCollect.get('middle')
    formCollect.get('last')
    formCollect.get('dob')
    formCollect.get("avatar",imgID.files[0])
    
    sendData(formCollect)

    }

    const sendData = (data) =>{

        formRe.onsubmit = (eve) =>{
            eve.preventDefault()
            console.log(data)
            console.log('eve',eve)
            fetch(urlNewUser+'api/profile',{
                method: "POST",
                body: data
            }).then(datas => console.log(datas)).catch(err => console.log(err))
            
        }
    }