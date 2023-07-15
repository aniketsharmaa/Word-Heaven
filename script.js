const url = "https://api.dictionaryapi.dev/api/v2/entries/en/";
const result = document.getElementById("result");
const sound = document.getElementById("sound");
const btn = document.getElementById("search-btn");

btn.addEventListener("click", () => {
    let inpWord = document.getElementById("inp-word").value;
    if(inpWord=="aniket" || inpWord =="Aniket"){
        result.innerHTML = `
        <div class="word">
                <h3>${inpWord}</h3>
                <button onclick="playSound()"   >
                    <i class="fas fa-volume-up"></i>
               </button>
            </div>
            <div class="details">
                <p>"ani k et"</p>
                
            </div>
            <p class="word-meaning">
            <p>He is the creater of this webpage</p>
            </p>
            <p class="word-example">
               You can also connect with him on github (username: aniketsharmaa).
            </p>`;
          
    }
    else if (inpWord=="Word Heaven" || inpWord =="word heaven" || inpWord =="wordheaven" || inpWord =="Wordheaven"){
        result.innerHTML = `
        <div class="word">
                <h3>${inpWord}</h3>
               
            </div>
            <div class="details">
                <p>"wuhd heh ven"</p>
                
            </div>
            <p class="word-meaning">
            <p>It is the minimal looking Online Dictionary website </p>
            </p>
            <p class="word-example">
               created by Aniket Sharma ✨ 
            </p>`;

    }
    else{
        fetch(`${url}${inpWord}`)
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            result.innerHTML = `
            <div class="word">
                    <h3>${inpWord}</h3>
                    <button onclick="playSound()"   >
                        <i class="fas fa-volume-up"></i>
                   </button>
                </div>
                <div class="details">
                    <p>${data[0].meanings[0].partOfSpeech}</p>
                    <p>/${data[0].phonetic}/</p>
                </div>
                <p class="word-meaning">
                   ${data[0].meanings[0].definitions[0].definition}
                </p>
                <p class="word-example">
                    ${data[0].meanings[0].definitions[0].example || ""}
                </p>`;
            sound.setAttribute("src", `https:${data[0].phonetics[0].audio}`);
        })
        .catch(() => {
            result.innerHTML = `<h3 class="error">SORRY!! Try different word. </h3>`;
        });
    }

});
function playSound() {
    sound.play();
}