window.scroll({
    top: 15,
    behavior: 'smooth',
})
let redirect=(url)=>{window.location.href = url}
let scrolto = (vert, hor) => {
    window.scroll({
    top: vert,
    left: hor,
    behavior: "smooth",
  })
}