const ScrollNav = () => {
    const enlaces = document.querySelectorAll('.navbar a');
    enlaces.forEach((enlace) => {
      enlace.addEventListener('click', (e) => {
        e.preventDefault();
        const seccionScroll = e.target.attributes.href.value;
        const seccion = document.querySelector(seccionScroll);
        seccion.scrollIntoView({ behavior: 'smooth' });
      });
    });
  };
  
  export default ScrollNav;
  