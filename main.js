let swiper = new Swiper(".mySwiper", {
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });
      const pushbar = new Pushbar({
        blur:true,
        overlay:true,
      });

      tippy('#a', {
        content: 'VLAD GAY!',
      });
function test() {
        swal({
          title: "VLAD GAY!", 
          icon: "success",
          buttons: ["YEEES", "OF COURSE"],
          closeOnClickOutside: false,
          closeOnEsc: false
        });
      }
function sure() {
  swal("Are you sure?", {
    className: "red-bg",
    dangerMode: true,
    buttons: false,
    timer: 3000,
  });
}
      
