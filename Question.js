class Question {
    constructor() {
        this.title = createElement('h2');
        this.question = createElement('h5')
        this.input = createInput("Your name");
        this.answer = createInput("Your answer")
        this.button = createButton("Submit");
    }
    display() {
        this.title.html("QUIZZZ GAME");
        this.title.position(350,0);
        this.question.html("You see a boat filled with people. It hasn't sunk yet,but when you look again you don't see a single person. How is that possible????")
        this.question.position(30,80);
        this.input.position(200,200);
        this.button.position(200,250);
        this.answer.position(400,200)
        this.button.mousePressed(() => {
            this.input.hide();
            this.button.hide();
            this.answer.hide();

            contestant.name = this.input.value();
            contestantCount++;   
            contestant.index = contestantCount;
            // contestant.update();
            contestant.updateCount(contestantCount);

            contestant.answer = this.answer.value();  
            contestant.update();
            // contestant.updateCount(contestant);
        });
    }
}
