var isOpen = false;

var menu = document.querySelector('.nav-header-mobile')
      .addEventListener('click', () => {

            if (!isOpen) {

                  document.querySelector('.mobile-menu').style = 'display: flex';
                  document.querySelector('.open').style = 'display: none';
                  document.querySelector('.close').style = 'display: flex';
            }
            else {

                  document.querySelector('.mobile-menu').style = 'display: none';
                  document.querySelector('.open').style = 'display: flex';
                  document.querySelector('.close').style = 'display: none';
            }

            isOpen = !isOpen;
      });

var nav = document.querySelector('.mobile-menu')
      .addEventListener('click', () => {
            
            if (!isOpen)
                  return;

            document.querySelector('.mobile-menu').style = 'display: none';
            document.querySelector('.open').style = 'display: flex';
            document.querySelector('.close').style = 'display: none';
      });

