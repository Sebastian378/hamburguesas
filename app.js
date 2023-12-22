function CambioIdioma(){

    var idioma = document.getElementById('idioma').value;
    if (idioma == 'español'){
       texto = [
         {
           parrafo: '1 Sándwich BBQ crunch (1 Filete de pollo apanado) '
         },
         {
           parrafo: '1 Kentucky hambueguesa/Sándwich(1 Filete de pechuga de pollo apanado, pepinillos...'
         },
         {
           parrafo: '1 Sandwich BBQ Crunch (1 filete de pollo apanado) + 1 Papa Pequeña + 1 Gaseosa PET...' 
         },
         {
           parrafo: '1 Kentucky Coronel hamburguesa / Sandwich (1 Filete de pechuga de pollo apanado, Ensalada...'
         },
         {
           parrafo:'1 Kentucky hamburguesa / Sandiwch (1 filete de pechuga de pollo apanado, pepinillos,...'
         },
         {
           parrafo:'1 Kentucky Coronel hamburguesa / Sandwich (1 FIlete de Pechuga de pollo apanado, Ensalada..) ' 
         },
         {
           parrafo:'1 Sandiwich Crispy BBQ (1 Filete de pechuga extra grande, triple empanizado, cebolla crisp... '
         },
         {
           parrafo:'1 Sandwich Crispy BBQ (1 Filete de pechuga extra grande, triple empanizado, cebolla crisp...'
         }
       ];
 
    } else {
       texto = [
        {
         parrafo: '1 BBQ Crunch Sandwich (1 Breaded Chicken Fillet)'
        },
        {
         parrafo:'1 Kentucky hamburger / Sandwich (1 breaded chicken breast fillet, pickles,...'
        },
        {
         parrafo:'1 BBQ Crunch Sandwich (1 breaded chicken fillet) + 1 Small Potato + 1 PET Soda...' 
        },
        {
         parrafo:'1 Kentucky Colonel Burger / Sandwich (1 Breaded Chicken Breast Fillet, Salad,...' 
        },
        {
         parrafo:'1 Kentucky hamburger / Sandiwch (1 breaded chicken breast fillet, pickles,...' 
        },
        {
         parrafo:'1 Kentucky Colonel Hamburger/Sandwich (1 piece of Breaded Chicken Breast, Salad..)'
        },
        {
         parrafo:'1 Crispy BBQ Sandiwich (1 extra large breast fillet, triple breaded, crispy onion, onion and...' 
        },
        {
         parrafo:'1 Crispy BBQ Sandiwich (1 extra large breast fillet, triple breaded, crispy onion, onion and...'
        }
     ]
        
      
 } 
 contador = 1;
      texto.forEach(function(inner){
      document.getElementById('texto-'+contador).innerText = inner.parrafo
      contador++;
    })
 
 }


function Tema(){
    var tema = document.getElementById('theme').value;
    if(tema == 'light'){
        document.getElementById('body').classList.add('theme-light')
        document.getElementById('body').classList.remove('theme-dark')

    }else{
        document.getElementById('body').classList.remove('theme-light')
        document.getElementById('body').classList.add('theme-dark')
    }
}


 