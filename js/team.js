function accordionTeam(){
  const workers = document.querySelectorAll(".team-acco__item");
  const teamAccord = document.querySelector(".team-acco");

  teamAccord.addEventListener("click" , function(event){
      event.preventDefault(); // скидываем стандартное состояние (что бы не кидало страницу вверх / или не перенаправляло на другую)
      const target = event.target; // то на что мы клацнули

      if(target.classList.contains("team-acco__trigger")){
          const worker = target.parentNode; // родитель нашей ссылки
          const content = target.nextElementSibling; //  элемент который находится рядом с вашей ссылкой на уровне
          const contentHeight = content.firstElementChild.clientHeight; // высота wrapper который лежит в content

              for (const iterator of workers) {
                  if(iterator !== worker){
                      iterator.classList.remove("team__active");
                      iterator.lastElementChild.style.height= 0;
                  }
              }

              if(worker.classList.contains("team__active")){
                  worker.classList.remove("team__active");
                  content.style.height = 0;
              }else{
                  worker.classList.add("team__active");
                  content.style.height = contentHeight + "px";
              }
      }
  });
}

accordionTeam();