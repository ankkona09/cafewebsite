  const menuIcon = document.getElementById('menuIcon');
  const closeMenuIcon = document.getElementById('closeMenuIcon');
  const mySidebar = document.getElementById('mySidebar');

  // Add an event listener to the menu icon for the 'click' event
  menuIcon.addEventListener('click', function () {
    mySidebar.classList.toggle('show');
    menuIcon.classList.toggle('hidden');
    closeMenuIcon.classList.remove('hidden');
  });

  // Add an event listener to the close menu icon for the 'click' event
  closeMenuIcon.addEventListener('click', function () {
    mySidebar.classList.remove('show');
    menuIcon.classList.remove('hidden');
    closeMenuIcon.classList.add('hidden');
  });


