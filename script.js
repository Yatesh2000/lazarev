var nav = document.querySelector('nav')

nav.addEventListener("mouseenter", function(){

    let tl = gsap.timeline()
    
    tl.to(".nav-bottom",{
        height: '21vh'
    },"a")

    tl.to("#nav-part2 h5",{
        display: "block"
    },"a")

    tl.to("#nav-part2 h5 span",{
        y: 0,
        delay: 0.1,
        stagger:{
            amount: 0.2
        }
    },"a")
})



nav.addEventListener("mouseleave", function(){

    let tl = gsap.timeline()
    
   
    tl.to("#nav-part2 h5 span",{
        y: 25,
        stagger:{
            amount: 0.2
        }
    })

    tl.to("#nav-part2 h5",{
        display: "none",

    },"b")


    tl.to(".nav-bottom",{
        height: '0vh',
        delay: -0.4
    },"b")

 
})



