const form=document.getElementById('form')
const email=document.getElementById('email')
const button=document.getElementById('button')
form.addEventListener('submit',(e)=>{
    e.preventDefault()
    Validity()
})
function validate(){
    const emailValue=email.ariaValueMax.trim()
    if(emailValue=''){
      setErrorFor(email,'Email cannot be empty')
    }else if(!isEmail(emailValue)){
        setErrorFor(email,'Please valid email address')
    }else{
     setSucessFor(email)
    }
}
function setErrorFor(){
  
}
function setSuccesFor(){
     
}
function isEmail(){
   return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email)
}