function accordionMenu(){
  const workers = document.querySelectorAll(".menu-acco__item");
  const teamAccord = document.querySelector(".menu-acco");

  teamAccord.addEventListener("click" , function(event){
      event.preventDefault(); // скидываем стандартное состояние (что бы не кидало страницу вверх / или не перенаправляло на другую)
      const target = event.target; // то на что мы клацнули

      if(target.classList.contains("menu-acco__trigger")){
          const worker = target.parentNode; // родитель нашей ссылки

              for (const iterator of workers) {
                  if(iterator !== worker){
                      iterator.classList.remove("menu-acco__item-active");
                  }
              }

              if(worker.classList.contains("menu-acco__item-active")){
                  worker.classList.remove("menu-acco__item-active");
              }else{
                  worker.classList.add("menu-acco__item-active");
              }
      } 
      if(target.classList.contains("menu-acco__trigger-text")){
          const link = target.parentNode;
          const worker = link.parentNode;

          for (const iterator of workers) {
            if(iterator !== worker){
                iterator.classList.remove("menu-acco__item-active");
            }
        }

        if(worker.classList.contains("menu-acco__item-active")){
            worker.classList.remove("menu-acco__item-active");
        }else{
            worker.classList.add("menu-acco__item-active");
        }

      }
  });
}

accordionMenu();

