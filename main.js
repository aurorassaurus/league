document.addEventListener("keydown", event => {
    const player = document.querySelector(".player")
    if (event.key === "w") {
        const bottom = getPixelValue(player, "bottom") + 100
        const maxbottom = innerHeight - getPixelValue(player, "height")
        const newbottom = Math.min(bottom, maxbottom) 
        player.style.bottom = newbottom+"px"
        console.log (newbottom, maxbottom, bottom)
    }
    if (event.key === "s") {
        const bottom = getPixelValue(player, "bottom") - 100
        const newbottom = Math.max(bottom, 0) 
        player.style.bottom = newbottom+"px"
    }
    if (event.key === "d") {
        const left = getPixelValue(player, "left") + 100
        const maxleft = innerWidth - getPixelValue(player, "width")
        const newleft = Math.min(left, maxleft) 
        player.style.left = newleft+"px"
        console.log (newleft, maxleft, left)
    }
    if (event.key === "a") {
        const left = getPixelValue(player, "left") - 100
        const newleft = Math.max(left, 0) 
        player.style.left = newleft+"px"
    }
})
function getPixelValue(element, prop) {
    return + getComputedStyle(element).getPropertyValue(prop).replace("px", "")
} 