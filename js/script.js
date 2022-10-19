function calculate(){
    let number = document.getElementById('number').value
    let tab = document.getElementById('tab')

    

    if(number == null){
        alert('Invalid data, try again!')
    }else{
        tab.innerText = ''
        for(let i = 1;i<=10;i++){
            let item = document.createElement('option')
            item.text = `${number  }  x  ${i  }  =  ${number * i}`
            tab.appendChild(item)
        }
    }
}