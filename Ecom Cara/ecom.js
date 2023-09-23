const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

if (bar) {
    bar.addEventListener('click', ()=> {
        nav.classList.add('active');
     })
}
if (close) {
    close.addEventListener('click', ()=> {
        nav.classList.remove('active');
     })
 }

//  <script>
  const scriptURL = 'https://script.google.com/macros/s/AKfycbxL4HTP618PBCIFJ8wIw4l9mXrifETi1qtsqaqh71xB6rjrtZil95jjPB1D38agmZ-hVg/exec'
  const form = document.forms['submit-to-google-sheet']

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => console.log('Success!', response))
      .catch(error => console.error('Error!', error.message))
  })
// </script>