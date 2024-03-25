$(document).ready(function () {
    var __extends = (this && this.__extends) || (function () {
        var extendStatics = function (d, b) {
            extendStatics = Object.setPrototypeOf ||
                ({
                        __proto__: []
                    }
                    instanceof Array && function (d, b) {
                        d.__proto__ = b;
                    }) ||
                function (d, b) {
                    for (var p in b)
                        if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
                };
            return extendStatics(d, b);
        };
        return function (d, b) {
            if (typeof b !== "function" && b !== null)
                throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
            extendStatics(d, b);

            function __() {
                this.constructor = d;
            }
            d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
    })();
    var GAME_PLAYING = 0;
    var GAME_END = 1;
    var NUMBER_OF_CELLS = 9;
    /* CLASS DECLARATION */
    /* GAME CLASS */
    var Game = /** @class */ (function () {
        function Game() {
            this.createBoard();
            this.cellsInitialization();
            this.status = GAME_PLAYING;
            this.countEmptyCells = NUMBER_OF_CELLS;
        }
        Game.prototype.getWinner = function (cells) {
            var checkOX = function (x, y, player) {
                if (cells[x - 1][y].player == player &&
                    cells[x + 1][y].player == player) {
                    winLine.push(cells[x][y], cells[x - 1][y], cells[x + 1][y]);
                    return true;
                } else {
                    return false;
                }
            };

            var checkOY = function (x, y, player) {
                if (cells[x][y - 1].player == player &&
                    cells[x][y + 1].player == player) {
                    winLine.push(cells[x][y], cells[x][y - 1], cells[x][y + 1]);
                    return true;
                } else {
                    return false;
                }
            };
            var checkDiagonals = function (x, y, player) {
                if (cells[x - 1][y - 1].player == player &&
                    cells[x + 1][y + 1].player == player) {
                    winLine.push(cells[x][y], cells[x - 1][y - 1], cells[x + 1][y + 1]);
                    return true;
                } else if (cells[x - 1][y + 1].player == player &&
                    cells[x + 1][y - 1].player == player) {
                    winLine.push(cells[x][y], cells[x - 1][y + 1], cells[x + 1][y - 1]);
                    return true;
                } else {
                    return false;
                }
            };
            var importantCells = [{
                    x: 0,
                    y: 1
                }, {
                    x: 1,
                    y: 0
                },
                {
                    x: 1,
                    y: 1
                }, {
                    x: 1,
                    y: 2
                },
                {
                    x: 2,
                    y: 1
                }
            ];
            var player;
            var winLine;
            var hasWinner = false;
            for (var _i = 0, importantCells_1 = importantCells; _i < importantCells_1.length; _i++) {
                var cell = importantCells_1[_i];
                if (!cells[cell.x][cell.y].isEmpty) {
                    player = cells[cell.x][cell.y].player;
                    winLine = [];
                    if (cell.x == 1 && cell.y == 1) {
                        hasWinner = checkDiagonals(cell.x, cell.y, player) ||
                            checkOX(cell.x, cell.y, player) ||
                            checkOY(cell.x, cell.y, player);
                        if (hasWinner)
                            break;
                    } else if (cell.x == 1 && !hasWinner) {
                        hasWinner = checkOX(cell.x, cell.y, player);
                        if (hasWinner)
                            break;
                    } else if (cell.y == 1 && !hasWinner) {
                        hasWinner = checkOY(cell.x, cell.y, player);
                        if (hasWinner)
                            break;
                    }
                }
            }
            if (hasWinner) {
                return {
                    winLine: winLine,
                    player: player
                };
            }
        };
        Object.defineProperty(Game.prototype, "cells", {
            get: function () {
                return this._cells;
            },
            enumerable: false,
            configurable: true
        });
        Game.prototype.registerMove = function (move) {
            if (this.status == GAME_PLAYING && this.countEmptyCells > 0) {
                this.displayMove(move);
                this._cells[move.x][move.y].player = move.player.sign;
                this.countEmptyCells--;
                var winner = this.getWinner(this._cells);
                if (winner) {
                    this.status = GAME_END;
                    this.displayWinLine(winner.winLine);
                    this.displayWinner(winner.player);
                } else if (this.countEmptyCells == 0) {
                    this.status = GAME_END;
                    this.displayDraw();
                }
            }
        };
        Game.prototype.displayMove = function (move) {
            $("*[data-x=\"".concat(move.x, "\"][data-y=\"").concat(move.y, "\"]")).append("<p>".concat(move.player.sign, "</p>"));
            $("*[data-x=\"".concat(move.x, "\"][data-y=\"").concat(move.y, "\"]")).children().addClass('animated flipInY');
        };
        Game.prototype.displayWinLine = function (cells) {
            for (var _i = 0, cells_1 = cells; _i < cells_1.length; _i++) {
                var cell = cells_1[_i];
                $("*[data-x=\"".concat(cell.x, "\"][data-y=\"").concat(cell.y, "\"]")).addClass('win');
            }
        };
        Game.prototype.displayWinner = function (player) {
            console.log("player"+player);
            if (player == "X") {
                $("#loser").prepend("Vous avez perdu!");
                $(".loser").css("display", "block");
                $(".winner").css("display", "block");
                $(".winner").css("opacity", "1");
                $(".board").css("display", "none");
                $(".description_1").css("display", "none");
                $(".winner2").css("display", "none");
                $(".description_3").css("display", "none");
            }else{
                $("#player").prepend("Vous avez gagné!");
                $(".winner").css("display", "block");
                $(".winner").css("opacity", "1");
                $(".board").css("display", "none");
                $(".loser").css("display", "none");
                $(".description_1").css("display", "flex");
                $(".winner2").css("display", "block");
                $(".description_3").css("display", "block");
            }
           
        };

        Game.prototype.displayDraw = function () {
            $("#loser").prepend("Vous êtes égalités!");
            $(".loser").css("display", "block");
            $(".winner").css("display", "block");
            $(".winner").css("opacity", "1");
            $(".board").css("display", "none");
            $(".description_1").css("display", "none");
            $(".winner2").css("display", "none");
            $(".description_3").css("display", "none");
        };
        /* Generate html gameboard */
        Game.prototype.createBoard = function () {
            for (var i = 0; i < 3; i++) {
                for (var j = 0; j < 3; j++) {
                    $('.board').append("<div class=\"cell\" data-x=\"".concat(i, "\" data-y=\"").concat(j, "\"></div>"));
                }
            }
        };
        /* _cells: Cell[][] initialization */
        Game.prototype.cellsInitialization = function () {
            this._cells = [];
            for (var i = 0; i < 3; i++) {
                this._cells[i] = [];
                for (var j = 0; j < 3; j++) {
                    this._cells[i][j] = new Cell(i, j);
                }
            }
        };
        Game.prototype.reset = function () {
            this.status = GAME_PLAYING;
            $(".cell").html('');
            $(".cell").removeClass('win');
            $("#player").html('');
            $("#loser").html('');
            $(".winner").css("display", "none");
            this.cellsInitialization();
            this.countEmptyCells = NUMBER_OF_CELLS;
            $(".board").css("display", "flex");
            botXdefault();
        };
        return Game;
    }());
    /* CELL CLASS */
    var Cell = /** @class */ (function () {
        function Cell(x, y) {
            this.x = x;
            this.y = y;
            this.isEmpty = true;
        };
        Object.defineProperty(Cell.prototype, "player", {
            get: function () {
                return this._player;
            },
            set: function (sign) {
                if (sign == undefined) {
                    this._player = sign;
                    this.isEmpty = true;
                } else {
                    this._player = sign;
                    this.isEmpty = false;
                }
            },
            enumerable: false,
            configurable: true
        });
        return Cell;
    }());
    /*  Player
      public sign - X or O
    */
    var Player = /** @class */ (function () {
        function Player(sign) {
            this.sign = sign;
        }
        return Player;
    }());
    /* Human class */
    var Human = /** @class */ (function (_super) {
        __extends(Human, _super);

        function Human(sign) {
            return _super.call(this, sign) || this;
        }
        Human.prototype.move = function (x, y) {
            //Game.doMove(this, x, y);
            return {
                player: this,
                x: x,
                y: y
            };
        };
        return Human;
    }(Player));
    /* BOT */
    var Bot = /** @class */ (function (_super) {
        __extends(Bot, _super);

        function Bot(sign) {
            return _super.call(this, sign) || this;
        }
        Bot.prototype.move = function (game, enemy) {
            if (game.status == GAME_END) {
                return -1;
            }
            var winMove = this.getWinMove(game, this);
            var enemysWinMove = this.getWinMove(game, enemy);
            if (winMove) {
                return winMove;
            } else if (enemysWinMove) {
                return enemysWinMove;
            } else {
                /* Make a random move */
                var x = void 0,
                    y = void 0;
                do {
                    x = Math.floor(Math.random() * 3);
                    y = Math.floor(Math.random() * 3);
                } while (!game.cells[x][y].isEmpty);
                return {
                    player: this,
                    x: x,
                    y: y
                };
            }
        };
        Bot.prototype.getWinMove = function (game, player) {
            for (var i = 0; i < 3; i++) {
                for (var j = 0; j < 3; j++) {
                    if (game.cells[i][j].isEmpty) {
                        game.cells[i][j].player = player.sign;
                        if (game.getWinner(game.cells)) {
                            game.cells[i][j].player = undefined;
                            return {
                                player: this,
                                x: game.cells[i][j].x,
                                y: game.cells[i][j].y
                            };
                        } else {
                            game.cells[i][j].player = undefined;
                        }
                    }
                }
            }
        };
        return Bot;
    }(Player));
    /* ENTRY POINT */
    var game = new Game();

    function botXdefault(params) {
        var human;
        var bot;
        bot = new Bot("X");
        human = new Human("O");
        game.registerMove(bot.move(game, human));
        $(".cell").on("click", function () {
            /* get click position */
            var x = $(this).data("x");
            var y = $(this).data("y");
            if (game.cells[x][y].isEmpty) {
                game.registerMove(human.move(x, y));
                /* Bot moves after human */
                game.registerMove(bot.move(game, human));
            }
        });
        // $(".sign").on("click", function () {
        //     var HumanSign = $(this).text();
        //     human = new Human(HumanSign);
        //     if (HumanSign == 'X')
        //         bot = new Bot("O");
        //     else {
        //         bot = new Bot("X");
        //         game.registerMove(bot.move(game, human));
        //     }
        //     $(".overlay").hide();
        // });
    }
    botXdefault();

    $(".reset").on("click", function () {
        game.reset();
    });
});