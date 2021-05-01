// BURGER MENU SECTION

    const menuButton = document.querySelector(".toggle-holder");
    const slideMenu = document.querySelector(".slide-menu");
    const toggle = document.getElementById("toggle");
    
    window.addEventListener("click", (event) => {
        if (event.target === menuButton || event.target.parentNode === toggle || event.target === toggle) {
            if (slideMenu.classList.contains('menu-active')) {
                slideMenu.classList.remove('menu-active');
                menuButton.classList.remove('on');
            } else {
                slideMenu.classList.add('menu-active');
                menuButton.classList.add('on');
            }
        } else {
            slideMenu.classList.remove('menu-active');
            menuButton.classList.remove('on');
        }
    });
    
//H1 ANIMATION SECTION

    const typeWriter = selector => {
        const el = document.querySelector(selector)
        const text = el.innerHTML;
    
        (function _type(i = 0) {
            if (i === text.length) return
    
            el.innerHTML =
                text.substring(0, i + 1) + '<span aria-hidden="true"></span>'
            setTimeout(() => _type(i + 1), 100)
        })()
    }
    
    typeWriter(".hello")
    
    
// PROJECTS SECTION
    
    const array = [0, 1, 2, 3];
    
    array.forEach((i) => {
        const project = document.getElementById(`project${i}`);
        const projectInfo = document.getElementById(`project${i}-info`);
        project.addEventListener("mouseover", (event) => {
            projectInfo.style.visibility = "visible";
            projectInfo.style.opacity = 1;
        });
    });
    
    array.forEach((i) => {
        const project = document.getElementById(`project${i}`);
        const projectInfo = document.getElementById(`project${i}-info`);
        project.addEventListener("mouseleave", (event) => {
            projectInfo.style.visibility = "hidden";
            projectInfo.style.opacity = 0;
        });
    });

    
// EXPERIENCES SECTION
    
    //timeline
    const allRonds = document.querySelectorAll('.rond');
    const allBoxes = document.querySelectorAll('.box');
    
    const controller = new ScrollMagic.Controller()
    
    allBoxes.forEach(box => {
    
        for (i = 0; i < allRonds.length; i++) {
    
            if (allRonds[i].getAttribute('data-anim') === box.getAttribute('data-anim')) {
    
                let tween = gsap.from(box, { y: -50, opacity: 0, duration: 0.5 })
    
                let scene = new ScrollMagic.Scene({
                    triggerElement: allRonds[i],
                    reverse: true
                })
                    .setTween(tween)
                    // .addIndicators()
                    .addTo(controller)
    
            }
    
        }
    
    })
    
    
    // Get all the mental boxes
    const modals = document.querySelectorAll(".exp-modal");
    
    // Get all the buttons that opens the modal
    const btns = document.querySelectorAll(".company-exp");
    
    // Get all the <span> element that closes the modal
    const spans = document.querySelectorAll(".exp-close");
    
    // iterate the btns to trigger the event of each modal boxes
    btns.forEach((btn, index) => {
        const modal = modals[index];
        const span = spans[index];
        // When the user clicks on the button, open the modal
        btn.onclick = () => {
            modal.style.display = "block";
        };
        // When the user clicks on <span> (x), close the modal
        span.onclick = () => {
            modal.style.display = "none";
        };
        // When the user clicks anywhere outside of the modal, close it
        window.addEventListener('click', (event) => {
            if (event.target === modal) {
                modal.style.display = "none";
            }
        });
    });
    

    //CONTACT FORM

const form = document.getElementById("contact-form");

const formEvent = form.addEventListener("submit", (event) => {
  event.preventDefault();
  let mail = new FormData(form);
  sendMail(mail);
});

const sendMail = (mail) => {
  fetch("https://nodemailer-vic-lo.herokuapp.com/send", {
    method: "post",
    body: mail,
  }).then((response) => {
    return response.json();
  });
};