(function() {
    emailjs.init('user_6W7H9JW9czHKpNYZnOCUw');
})();

const complish = document.getElementById('com');
complish.addEventListener('click',()=>{
 emailjs.send("service_6vt0j4e","template_1rpwpkm",{
    discordid: document.getElementById('discordID').value,
    introduction: document.getElementById('introduction').value
   }).then(function(response) {
    console.log('SUCCESS!', response.status, response.text);
 }, function(error) {
    console.log('FAILED...', error);
 })});