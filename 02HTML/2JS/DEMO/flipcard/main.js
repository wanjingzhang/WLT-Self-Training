; (function (window) { 
    // Game
    var Game = function (el, option) {
        this.el = document.getElementById(el);
        this.option = option;
        // Info section 
        this.info_div = document.createElement('div');
        this.info_div.id = "info_div";

        // Deck 
        this.deck_div = document.createElement('div');
        this.deck_div.id = "deck_div";
        this.gameDeck = new Deck(this.deck_div, option);
        this.gameDeck.buildDeck();

        //     Discard Pile
        //     Rules

        this.el.appendChild(this.info_div);
        this.el.appendChild(this.deck_div);
    }



    // Deck
    var Deck = function (deck_div, option) {
        this.deckData = option.data;
        this.buildDeck = function () {
            var parentFrag = document.createDocumentFragment();
            deck_div.innerHTML = "";
            for (var i = this.deckData.length - 1; i >= 0; i--){
                var card = new Card();
                card.id = "card" + i;
                card.data = this.deckData[i];
                card.buildCard(parentFrag);
                
            }
            deck_div.appendChild(parentFrag);
        }
        
    }
    // Cards 
    //     ----
    //     shuffle
    //     stack
    
   

    // Cards
    var Card = function () {
        this.id = "";
        this.data = "";
        this.cardCont = document.createElement('div');
        this.cardCont.className = "card_containter";
        this.cardFront = document.createElement('div');
        this.cardFront.className = "card_front";
        this.cardBack = document.createElement('div');
        this.cardBack.className = "card_back";
        this.buildCard = function (parentFrag) {
            var flipDiv = document.createElement('div'),
                frontValDiv = document.createElement('div'),
                backValpDiv = document.createElement('div'),
                catDiv = document.createElement('div');
            flipDiv.className = "flip";
            frontValDiv.className = "front_val";
            backValpDiv.className = "back_val";
            catDiv.className = "cat_val";

            frontValDiv.innerHTML = this.data.q;
            backValpDiv.innerHTML = this.data.a;
            catDiv.innerHTML = this.data.category;

            this.cardFront.appendChild(frontValDiv);
            this.cardFront.appendChild(catDiv);
            this.cardBack.appendChild(backValpDiv);
            
            flipDiv.appendChild(this.cardFront);
            flipDiv.appendChild(this.cardBack);

            this.cardCont.id = this.id;
            this.cardCont.appendChild(flipDiv);
            parentFrag.appendChild(this.cardCont);
        }
    }
    //     val
    //     suit
    //     ----
    //     flip

    // Discard Pile
    var Discard = function () {
        
    }
    // Holders
    //     ----
    //     accept or reject
    window.Game = Game;
})(window)

