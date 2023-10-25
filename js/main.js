

(function() {
  "use strict";
 /**
   * darknode function
   */
  const toggle = document.getElementById('toggleDark');
  const body = document.querySelector('body');

  toggle.addEventListener('click', function(){
      this.classList.toggle('bi-brightness-high');
      if(this.classList.toggle('bi-brightness-high-fill')){
          body.style.background = 'white';
          body.style.color = 'black';
          body.style.transition = '2s';
      }else{
          body.style.background = 'black';
          body.style.color = 'white';
          body.style.transition = '2s';
      }
  });

  /**
   * Easy selector helper function
   */
  const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  }

  /**
   * Easy event listener function
   */
  const on = (type, el, listener, all = false) => {
    if (all) {
      select(el, all).forEach(e => e.addEventListener(type, listener))
    } else {
      select(el, all).addEventListener(type, listener)
    }
  }

 

  /**
   * Sidebar toggle
   */
  if (select('.toggle-sidebar-btn')) {
    on('click', '.toggle-sidebar-btn', function(e) {
      select('body').classList.toggle('toggle-sidebar')
    })
  }

  


})();