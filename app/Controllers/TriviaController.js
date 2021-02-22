import { ProxyState } from "../AppState.js"
import { triviaService } from "../Services/TriviaService.js"

function _draw(){
    let trivia = ProxyState.trivia;
    let template = ''
    trivia.forEach(t => template += t.Template)
    document.getElementById("app").innerHTML = /*html*/`
        ${template}
    `
}


export default class TriviaController{
    constructor(){
        console.log("hello from controller")
        ProxyState.on('trivia', _draw)
        _draw()
    }

    revealAnswer(){
       document.getElementById("answer").classList.remove("hidden")
    }

    nextRandom(){
        triviaService.nextRandom()
    }

    nextSports(){
        triviaService.nextSports()
    }

    nextHistory(){
        triviaService.nextHistory()
    }

    nextAnimals(){
        triviaService.nextAnimals()
    }

    nextVehicles(){
        triviaService.nextVehicles()
    }

    nextMythology(){
        triviaService.nextMythology()
    }
}