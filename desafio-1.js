const heroi = "rody"
let nivelDoHeroi = 9001;
let rankDoHeroi;

switch (true) {
    case nivelDoHeroi <= 1000:
    rankDoHeroi = "Ferro"
    break;

    case nivelDoHeroi >= 1001 && nivelDoHeroi <= 2000:
    rankDoHeroi = "Bronze"
    break;

    case nivelDoHeroi >= 2001 && nivelDoHeroi <= 5000:
    rankDoHeroi = "Prata"
    break;

    case nivelDoHeroi >= 5001 && nivelDoHeroi <= 7000:
    rankDoHeroi = "Ouro"
    break;

    case nivelDoHeroi >= 7001 && nivelDoHeroi <= 8000:
    rankDoHeroi = "Platina"
    break;

    case nivelDoHeroi >= 8001 && nivelDoHeroi <= 9000:
    rankDoHeroi = "Ascendente"
    break;

    case nivelDoHeroi >= 9001 && nivelDoHeroi <= 10000:
    rankDoHeroi = "Imortal"
    break;

    case nivelDoHeroi >= 10001:
    rankDoHeroi = "Radiante"
    break;
}
 console.log("O Héroi de nome " + heroi + " esta no nível de " + rankDoHeroi)