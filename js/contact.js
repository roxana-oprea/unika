function initMap() {
  // The location of Uluru
  const uluru = {lat: -25.344, lng: 131.036};
  // The map, centered at Uluru
  const map = new google.maps.Map(
    document.getElementById('map'), {zoom: 4, center: uluru});
  // The marker, positioned at Uluru
  const marker = new google.maps.Marker({position: uluru, map: map});
}

(function () {
  'use strict';
  window.addEventListener('load', function () {
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.getElementsByClassName('needs-validation');
    // Loop over them and prevent submission
    const validation = Array.prototype.filter.call(forms, function (form) {
      form.addEventListener('submit', function (event) {
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add('was-validated');
      }, false);
    });
  }, false);
})();
