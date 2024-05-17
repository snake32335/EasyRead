//Получаем бургер
const menuBurger = document.querySelector(".menu__burger"); 

//Вешаем слушатель событий при его клике - вызываем функцию.
menuBurger.addEventListener("click", function() {  
  //Функция добавляет класс или удаляет его. 
  menuBurger.classList.toggle('active');
});