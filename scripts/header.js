function toggleMenuOpen() {
  const menuOpen = document.querySelector('.hamburger-menu-icon');
  menuOpen.addEventListener('click', () => {
    document.querySelector('.sidebar').style.right = '0';
    document.querySelector('.search').style.right = '300px';
  });
}


function toggleMenuClose() {
  const menuClose = document.querySelector('.sidebar-menu-close');
  menuClose.addEventListener('click', () => {
    document.querySelector('.sidebar').style.right = '-450px';
    document.querySelector('.search').style.right = '20px';
  });
}

function searchContainerToggle() {
  const searchElement = document.querySelector('.search-button');
  searchElement.addEventListener('click', () => {
    const container = document.querySelector('.search-bar-container');
    if (container.style.display === 'flex') {
      document.querySelector('.overview').style.height = '650px';
      container.style.transform = 'translateX(100%)';
      setTimeout(() => {
        container.style.display = 'none';
      }, 450);
    } else {
      document.querySelector('.overview').style.height = '670px';
      container.style.display = 'flex';
      setTimeout(() => {
        container.style.transform = 'translateX(0)';
      }, 10);
    }
  });
}

function searchButtonHover() {
  const searchElement = document.querySelector('.search-button');
  const searchMessage = document.querySelector('.bubble-message');
  searchElement.addEventListener('mouseover', () => {
    searchMessage.classList.add('visible');
  });

  searchElement.addEventListener('mouseout', () => {
    searchMessage.classList.remove('visible');
  });
}


function onScroll() {
  const header = document.querySelector('.header');
  const searchContainer = document.querySelector('.search-bar-container');
  
  window.addEventListener('scroll', () => {
    if (searchContainer.style.display === 'flex') {
      searchContainer.style.position = 'fixed';
      searchContainer.style.top = '80px';
      searchContainer.style.left = '0';
      searchContainer.style.right = '0';
    }
  })
}


window.addEventListener('load', () => {
  setTimeout(() => {
    const search = document.querySelector('.bubble-message');
    search.classList.add('visible');
    
    setTimeout(() => {
        search.classList.remove('visible');
    }, 3000);
  }, 3000);
});

toggleMenuOpen();
toggleMenuClose();
searchContainerToggle();
onScroll();
searchButtonHover();