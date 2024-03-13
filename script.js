async function fetchRandomTasks(){
    let clicker = document.getElementById("clicker").style.display = "none"
    let resultDiv = document.getElementById("containerdiv")

    for(let i = 0; i <= 10; i++) {
        const pexelsApiKey = "EKTuMuLCrqudZJFcBRWKBR4op7UgsabrCfi4XhfV3YCJTWSwl3wMZPfB"
        let randomTaskResponse = await fetch("https://www.boredapi.com/api/activity")
        let randomTaskData = await randomTaskResponse.json()
        let imageResponse = await fetch(`https://api.pexels.com/v1/search?query=cute+animal`, {headers:{Authorization: pexelsApiKey}})
        let imageData = await imageResponse.json()

        if (imageData.photos && imageData.photos.length > 0) {
            let src = imageData.photos[Math.round(Math.random()*15)].src.original

            let resultElement = document.createElement('div')
            resultElement.classList.add('result');
            resultElement.innerHTML = `
            <div class="result">
                <img src="${src}" alt="image">
                <h3>${randomTaskData.activity}</h3>
                <p>${randomTaskData.type}</p>
            </div>
            `
            resultElement.querySelector("p").style.backgroundColor = `rgba(${Math.round(Math.random()*255)}, ${Math.round(Math.random()*255)}, ${Math.round(Math.random()*255)}, 50%)`
            resultDiv.appendChild(resultElement)
        }
    }
}

document.getElementById("clicker").addEventListener('click', fetchRandomTasks)

window.addEventListener('scroll', () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        fetchRandomTasks();
    }
});