document.querySelectorAll("a").forEach((a)=>{
    // Jika di klik akan menjalankan fungsi computerChoice()
    a.addEventListener("click", (element)=>{
        computerChoice(element);
    })
})

function computerChoice(element){
    //pilihan user
    let pilihanUser = element.target.innerText;

    // menangkap element pilihan computer
    let pilihanComputer = document.querySelector("#result")

    // membuat pilihan komputer dengan array
    let choices = ["Rock", "Paper", "Scissors"];

    // membuat pilihan computer secara random atau otomatis
    pilihanComputer.innerHTML = choices[Math.round (Math.random()*2)];
    pilihanComputer = pilihanComputer.innerHTML;

    // jika pilihan user = pilihan computer (draw)
    if(pilihanUser == pilihanComputer){
        alert("DRAW");
        //setTimeout(()=>alert("DRAW"), 300);
    }
    // jika pilihan computer menang
    if(pilihanComputer == "Paper" && pilihanUser == "Rock"){
        alert("Computer Win");
    }else if(pilihanComputer == "Rock" && pilihanUser == "Scissors"){
        alert("Computer WIN");
    }else if(pilihanComputer == "Scissors" && pilihanUser == "Paper"){
        alert("Computer WINN");
    }

    // jika pilihan user menang
    if(pilihanUser == "Paper" && pilihanComputer == "Rock"){
        alert("User Win");
    }else if(pilihanUser == "Rock" && pilihanComputer == "Scissors"){
        alert("Computer WIN");
    }else if(pilihanUser == "Scissors" && pilihanComputer == "Paper"){
        alert("Computer WINN");
    }
}