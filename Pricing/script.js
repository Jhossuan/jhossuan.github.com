const d = document;

const switchBtn = d.querySelector('.switch-button__checkbox')


switchBtn.addEventListener('click',()=>{
    togglePrice();
});

const togglePrice = () =>{
   const price1 = d.querySelector('.price-1');
   const price2 = d.querySelector('.price-2');
   const price3 = d.querySelector('.price-3');

   const price1month = d.querySelector('.price-1-month')
   const price2month = d.querySelector('.price-2-month')
   const price3month = d.querySelector('.price-3-month')


   price1.classList.toggle('is-active');
   price2.classList.toggle('is-active');
   price3.classList.toggle('is-active');

   price1month.classList.toggle('is-active-month');
   price2month.classList.toggle('is-active-month');
   price3month.classList.toggle('is-active-month');
}