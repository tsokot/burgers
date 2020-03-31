function accordionMenu(){
  const workers = document.querySelectorAll(".menu-acco__item"); // полуаем все li элементы
  const teamAccord = document.querySelector(".menu-acco");
  const trigger = document.querySelector(".menu-acco__trigger");
  const tarWidth = trigger.clientWidth; // ширина одной лишки (ссылки)
  const windowWidth = document.documentElement.clientWidth; // ширина окна браузера
  const closeMenuWidth = tarWidth * workers.length; // ширина закрытого слайдера (3 лишки)
  const contentWidth = windowWidth - closeMenuWidth;
  const tabletWidth = 768;
  const contentDef = 500;
 

  teamAccord.addEventListener("click" , function(event){
      event.preventDefault(); // скидываем стандартное состояние (что бы не кидало страницу вверх / или не перенаправляло на другую)
      const target = event.target; // то на что мы клацнули

      if(target.classList.contains("menu-acco__trigger")){
          const worker = target.parentNode; // родитель нашей ссылки

              for (const iterator of workers) {
                  if(iterator !== worker){
                      iterator.classList.remove("menu-acco__item-active");
                      iterator.lastElementChild.style.width = 0;
                  }
              }

              if(worker.classList.contains("menu-acco__item-active")){
                  worker.classList.remove("menu-acco__item-active");
                  target.nextElementSibling.style.width = 0;
              }else{
                  worker.classList.add("menu-acco__item-active");
                  if(windowWidth < tabletWidth){
                    target.nextElementSibling.style.width = contentWidth +"px";
                  } else {
                        target.nextElementSibling.style.width = contentDef +"px";
                  }
                  
              }
      } 
      if(target.classList.contains("menu-acco__trigger-text")){
          const link = target.parentNode;
          const worker = link.parentNode;

          for (const iterator of workers) {
            if(iterator !== worker){
                iterator.classList.remove("menu-acco__item-active");
                iterator.lastElementChild.style.width = 0;
            }
        }

        if(worker.classList.contains("menu-acco__item-active")){
            worker.classList.remove("menu-acco__item-active");
            link.nextElementSibling.style.width = 0;
        }else{
            worker.classList.add("menu-acco__item-active");
            if(windowWidth < tabletWidth){
                link.nextElementSibling.style.width = contentWidth +"px";
            } else {
                link.nextElementSibling.style.width = contentDef + "px";
            }
            
        }

      }
  });
}

accordionMenu();

