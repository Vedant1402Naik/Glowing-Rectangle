let rect = document.querySelector('#center');

rect.addEventListener("mousemove", function (details) {
    let rect_location = rect.getBoundingClientRect();
    let inside_rect = details.clientX - rect_location.left

    if (inside_rect < rect_location.width / 2) {
        let redcolor = gsap.utils.mapRange(0, rect_location.width / 2, 255, 0, inside_rect);
        gsap.to(rect, {
            backgroundColor: `rgb(${redcolor},0,0)`,
            ease: Power4
        })
    }
    else {
        let bluecolor = gsap.utils.mapRange(rect_location.width/2, rect_location.width, 0, 255, inside_rect);
        gsap.to(rect, {
            backgroundColor: `rgb(0,0,${bluecolor})`,
            ease: Power4
        })

    }
})

rect.addEventListener("mouseleave", () => {
    gsap.to(rect, {
        backgroundColor: "white"
    })
})


