document.addEventListener('DOMContentLoaded', function() {
  // Initialize Sidenav
  var elems = document.querySelectorAll('.sidenav');
  var instances = M.Sidenav.init(elems, {});

  // Close Sidenav when any link inside it is clicked (for single page mobile experience)
  var sidenavLinks = document.querySelectorAll('.sidenav li a');
  sidenavLinks.forEach(function(link) {
    link.addEventListener('click', function() {
      var sidenavInstance = M.Sidenav.getInstance(document.querySelector('.sidenav'));
      if (sidenavInstance) {
        sidenavInstance.close();
      }
    });
  });
});
