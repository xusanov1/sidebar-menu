document.addEventListener('DOMContentLoaded', function() {
    let sidebarToggle = document.getElementById('sidebarCollapse');
    let sidebar = document.getElementById('sidebar');
  
    sidebarToggle.addEventListener('click', function() {
      sidebar.classList.toggle('active');
    });
  });