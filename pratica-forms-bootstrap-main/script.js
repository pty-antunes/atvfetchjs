document.addEventListener('DOMContentLoaded', ()=>{
    const form = document.querySelector('form');

    form.addEventListener('submit', async(Event)=>{
        Event.preventDefault();

        const textv = document.getElementById('text').value;
        const emailv = document.getElementById('email')?.value;

        const FormData = {
            text: textv,
            email: emailv,
        };

        console.log('dados coletados', FormData);

        const response = await fetch('http://www.api.com/cadastro', {
            method: 'POST',
            headers:{
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(FormData)
        })
    });
});