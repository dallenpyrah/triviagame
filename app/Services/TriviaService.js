import { ProxyState } from "../AppState.js"
import Trivia from "../Models/Trivia.js"
import { api } from "./AxiosService.js"


class TriviaService{
    constructor(){
        this.getTrivia()
    }

    getTrivia(){
        api.get('https://opentdb.com/api.php?amount=1').then(res => {
            console.log(res.data)
            ProxyState.trivia = res.data.results.map(rawTriviaData => new Trivia(rawTriviaData))
            ProxyState.next = res.data.next
            ProxyState.previous = res.data.previous
            console.log(ProxyState.trivia)
        }).catch(err => console.log(err))

    }
    nextRandom(){
        api.get('https://opentdb.com/api.php?amount=1').then(res => {
            console.log(res.data)
            ProxyState.trivia = res.data.results.map(rawTriviaData => new Trivia(rawTriviaData))
            ProxyState.next = res.data.next
            ProxyState.previous = res.data.previous
            console.log(ProxyState.trivia)
        }).catch(err => console.log(err))
    
    }

    nextSports(){
        api.get('https://opentdb.com/api.php?amount=1&category=21&difficulty=hard&type=multiple').then(res => {
            console.log(res.data)
            ProxyState.trivia = res.data.results.map(rawTriviaData => new Trivia(rawTriviaData))
            ProxyState.next = res.data.next
            ProxyState.previous = res.data.previous
            console.log(ProxyState.trivia)
        }).catch(err => console.log(err))
    
    }

    nextHistory(){
        api.get('https://opentdb.com/api.php?amount=1&category=23&difficulty=hard&type=multiple').then(res => {
            console.log(res.data)
            ProxyState.trivia = res.data.results.map(rawTriviaData => new Trivia(rawTriviaData))
            ProxyState.next = res.data.next
            ProxyState.previous = res.data.previous
            console.log(ProxyState.trivia)
        }).catch(err => console.log(err))
    
    }

    nextAnimals(){
        api.get('https://opentdb.com/api.php?amount=1&category=27&difficulty=hard&type=multiple').then(res => {
            console.log(res.data)
            ProxyState.trivia = res.data.results.map(rawTriviaData => new Trivia(rawTriviaData))
            ProxyState.next = res.data.next
            ProxyState.previous = res.data.previous
            console.log(ProxyState.trivia)
        }).catch(err => console.log(err))
    
    }

    nextVehicles(){
        api.get('https://opentdb.com/api.php?amount=1&category=28&difficulty=hard&type=multiple').then(res => {
            console.log(res.data)
            ProxyState.trivia = res.data.results.map(rawTriviaData => new Trivia(rawTriviaData))
            ProxyState.next = res.data.next
            ProxyState.previous = res.data.previous
            console.log(ProxyState.trivia)
        }).catch(err => console.log(err))
    
    }

    nextMythology(){
        api.get('https://opentdb.com/api.php?amount=1&category=20&difficulty=hard&type=multiple').then(res => {
            console.log(res.data)
            ProxyState.trivia = res.data.results.map(rawTriviaData => new Trivia(rawTriviaData))
            ProxyState.next = res.data.next
            ProxyState.previous = res.data.previous
            console.log(ProxyState.trivia)
        }).catch(err => console.log(err))
    
    }
}

    


export const triviaService = new TriviaService()