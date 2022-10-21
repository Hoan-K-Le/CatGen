const generateCat = () => {
  // create An element for the images
  let image = document.createElement('img')
  let div = document.getElementById('flex-cat-gen')
  image.src =
    'http://thecatapi.com/api/images/get?format=src&type=gif&size=small'
  div.appendChild(image)
}

const removeCat = () => {
  document.getElementById('flex-cat-gen').remove()
}
