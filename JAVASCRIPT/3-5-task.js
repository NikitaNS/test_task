person = {
    fsp: 'Nikita Nesterov Sergeevich',
    number: '+79994997124',
    comment:'coment',

    setFormValues: function(){
        document.querySelector('.fsp').value = person.fsp
        document.querySelector('.number').value = person.number
        document.querySelector('.comment').value = person.comment
        person.send()
    },

    send: function(){
        setTimeout(function(){
            alert('Форма отправленна')
        }, 400)
    }

}

form = {

    popUp: {
        
        overlay: '',
        phoneCount: 1,

        open: function() {
            form.popUp.modal= document.querySelector('.form_window'),
            form.popUp.overlay= document.querySelector('.overlay'),
            form.popUp.overlay.style.display = 'block'
            form.popUp.modal.style.display = 'flex'
        },

        close: function () {
            form.popUp.overlay.style.display = 'none'
            form.popUp.modal.style.display = 'none'
        },

         newNumber: function() {
            
            let newInputPhone = document.createElement('div')
            form.popUp.phoneCount += 1 
            newInputPhone.innerHTML =  document.querySelector('.phone').innerHTML
            newInputPhone.childNodes[0].data += form.popUp.phoneCount
            newInputPhone.classList.add('phone')
            document.querySelector('.phones').insertBefore(newInputPhone, document.querySelector('.addPhone'))
        }

    }
   
},

document.querySelector('.send').onclick= function(){
    person.setFormValues()
}

document.querySelector('.addPhone').onclick= function(){
    form.popUp.newNumber()
}

document.querySelector('#openForm').onclick= function(){
    form.popUp.open()
    document.querySelector('.fsp').value = ''
    document.querySelector('.number').value = ''
    document.querySelector('.comment').value = ''
}