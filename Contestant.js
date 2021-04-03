class Contestant {
    constructor() {
        this.index = null;
        this.name = null;
        this.answer = null;
    }

    getCount() {
        var countRef = database.ref('contestantCount');
        countRef.on("value", (data) => {
            contestantCount = data.val();
        })
    }
    updateCount(count) {
        database.ref('/').update({
            'contestantCount': count
        });
    }
    update() {
        var contestantIndex = "contestants/contestant" + this.index;
        database.ref(contestantIndex).set({
            'name': this.name,
            'answer': this.answer
        });
    }

    static getcontestantsInfo() {
        var contestantsInfoRef = database.ref('contestants');
        contestantsInfoRef.on("value", (data) => {
            allcontestants = data.val();
        })
    }
}