console.log('%c HI', 'color: firebrick')

document.addEventListener("DOMContentLoaded", () => {
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
    const breedUrl = "https://dog.ceo/api/breeds/list/all";
    let allBreeds = [];

    
fetch(imgUrl)
.then(response => response.json())
.then(data => {
    const dogImageContainer = document.getElementById("dog-image-container");
    data.message.forEach(imgUrl => {
        const img = document.createElement("img");
        img.src = imgUrl;
        img.alt = "Cute dog";
        dogImageContainer.appendChild(img);
    });
})

.catch(error => console.error("Error fetching images:", error));

fetch(breedUrl)
.then(response => response.json())
.then( data => {
    const breedList = document.getElementById("dog-breeds");
    allBreeds = Object.keys(data.message);

    renderBreeds(allBreeds);

    const breedDropdown = document.getElementById("breed-dropdown");
    breedDropdown.addEventListener("change", (event) => {
        const selectedLetter = event.target.value;
        const filteredBreeds = allBreeds.filter(breed => breed.startsWith(selectedLetter));
        renderBreeds(filteredBreeds);
    });

})

.catch(error => console.error("Error fetching breeds:", error))

function renderBreeds(breeds){
    const breedList = document.getElementById("dog-breeds");
    breedList.innerHTML = "";

    breeds.forEach(breed => {
        const li = document.createElement('li');
        li.textContent = breed;
    

        li.addEventListener('click', () => {
            li.style.color = "blue";
        });

        breedList.appendChild(li);
    });

}

});