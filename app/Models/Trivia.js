

export default class Trivia{

    constructor(data){
        this.category = data.category,
        this.question = data.question,
        this.correctanswer = data.correct_answer || data.correctanswer
    }

    get Template(){
        return /*html*/ `
        <div class="col-10 rounded shadow-lg card p-4 m-2 mt-3 mb-3">
                <h3 class="text-center">${this.category}</h3>
                <h4 class="text-left mt-2 text-primary">Question:</h4> <p class="">${this.question}</p>
                <h4 class="text-left mt-2 mb-2 text-success">Answer: </h4><p class="hidden text-dark" id="answer">${this.correctanswer}</p>
                <div class="text-center">
                <button class="btn btn-success mt-2 mr-1" onclick="app.triviaController.revealAnswer()">Reveal Answer</button>
                <button class="btn btn-outline-danger mt-2 mr-1" onclick="app.triviaController.nextRandom()">Random Question</button>
                <button class="btn btn-info mt-2 mr-1" onclick="app.triviaController.nextSports()">Sports Question</button>
                <button class="btn btn-outline-warning mt-2 mr-1" onclick="app.triviaController.nextHistory()">History Question</button>
                <button class="btn btn-primary mt-2 mr-1" onclick="app.triviaController.nextAnimals()">Animals Question</button>
                <button class="btn btn-outline-dark mt-2 mr-1" onclick="app.triviaController.nextVehicles()">Vehicles Question</button>
                <button class="btn btn-secondary mt-2" onclick="app.triviaController.nextMythology()">Mythology Question</button>
                 </div>
    </div>
        `
    }
}