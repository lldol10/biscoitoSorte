
const sorteDia = ["Se alguém está tão cansado que não possa te dar um sorriso, deixa-lhe o teu.",
"Sorte na vida é sentir a felicidade de viver cada momento.", "Sorte é reconhecer as boas oportunidades e saber aproveitá-las. 🍀", "A sorte me acompanha, tenho corpo fechado à inveja, a intriga não me amarra os pés, sou imune ao mau-olhado.",
 "Sorte é isto. Merecer e ter.", "Minha sorte é ter o teu abraço como recompensa para toda espera.", "A perseverança é a mãe da boa sorte.",
 "Seja merecedor da sorte e ela virá até você!","Às vezes não conseguir o que você quer é uma tremenda sorte.",
 "Eu quero a sorte de um amor tranquilo.","A sorte bate em cada porta uma vez na vida, mas, em muitos casos, a pessoa está se divertindo por aí e não a ouve.",
 "Com sorte você atravessa o mundo, sem sorte você não atravessa a rua.","Eu acredito demais na sorte. E tenho constatado que, quanto mais duro eu trabalho, mais sorte eu tenho.",
 "Sorte é o que acontece quando a capacidade encontra a oportunidade.","A sorte nunca dá, ela apenas empresta.","Se a sorte lhe sorriu, por que não sorrir de volta?",]

document.querySelector('.mensagem').innerText = sorteDia[Math.round(Math.random() * (sorteDia.length - 1))]

function HandleSorte(){
toogleScreen()
}


function toogleScreen(){
    document.querySelector('.screen1').classList.toggle('hide')
    document.querySelector('.screen2').classList.toggle('hide')

    document.querySelector('.mensagem').innerText = sorteDia[Math.round(Math.random() * (sorteDia.length - 1))]
}

const abrirOutra = document.querySelector('#abrirOutra')

abrirOutra.addEventListener('click', toogleScreen)
