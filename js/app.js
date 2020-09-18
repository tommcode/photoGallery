let container = document.querySelector(".container")
let photos = document.querySelector(".photo")
let button = document.querySelector(".btn-next")


fetch('https://picsum.photos/v2/list')
  .then(response => response.json())
  .then(data => {

    let startIndex = 0;
    let endIndex = 3;
      function generateImg() {
          
        data.slice(startIndex, endIndex).forEach(photo => {

        url = `${photo.url}`
        let slug = url.split("/").pop().split(";")[0]
        let photoSrc = `http://source.unsplash.com/${slug}`

        
            let li = document.createElement('li')
            photos.appendChild(li)

            let image = document.createElement('img');
            console.log(slug)
            image.src = photoSrc
            li.appendChild(image)

      })
      
    }
    generateImg()

    button.addEventListener("click", function(){
        startIndex +=3
        endIndex +=3
        photos.querySelectorAll("li").forEach(photo => photo.remove())
        
        
        if(endIndex === 30) {
           
            photos.querySelectorAll("li").forEach(photo => photo.remove())
            let text = document.createElement('h1')
            text.textContent = "You have already seen all the images, click the button again to start over."
            container.appendChild(text)
        } else if(endIndex === 33 ) {
            
            startIndex = 0;
            endIndex = 3;
            container.querySelector('h1').remove()
            
        }
        generateImg()
    })

})
    ;
