const whoWon = require('../RPS.js');


describe("whoWon rockPaperScissors",function(){
    test("should return tie when players pick the same option ",function(){
        expect(whoWon("rock","rock")).toBe('TIE!');
    });

    test("should return Player 2 wins when he picks paper and player1 picks rock",function(){
        expect(whoWon("rock","paper")).toBe('Player 2 wins!');
    });

    test("should return Player 2 wins when he picks scissors and player1 picks paper",function(){
        expect(whoWon("paper","scissors")).toBe('Player 2 wins!');
    });

    test("should return Player 2 wins when he picks rock and player1 picks scissors",function(){
        expect(whoWon("scissors","rock")).toBe('Player 2 wins!');
    });

    test("should return 'invalid input' for values other than rock, paper, scissors",function(){
        expect(whoWon("fire","rock")).toBe('Invalid input');
    });



});