const particleConfig = {
    particles: {
      number: {
        value: 10,
      },
      color: {
        value: "rgb(218, 218, 218)"
      },
      shape: {
        type: "circle",
        stroke: {
          width: 0,
          color: "#000000"
        },
        
       
      },
      opacity: {
        value: 0.9,
        random: true,
      },
      size: {
        value: 5,
        random: true,
      },
      line_linked: {
        enable: false,
        distance: 500,
        color: "#000000",
        opacity: 0.4,
        width: 2
      },
      move: {
        enable: true,
        speed: 5,
        direction: "none",
        random: true,
        straight: true,
        out_mode: "out",
      }
    },
    interactivity: {
      detect_on: "window",
      events: {
        onhover: {
          enable: true,
          mode: "repulse"
        },
        resize: true
      },
      modes: {
        repulse: {
          distance: 100,
          duration: 0.1
        },
        push: {
          particles_nb: 4
        },
        remove: {
          particles_nb: 2
        }
      }
    },
  };
export default particleConfig;