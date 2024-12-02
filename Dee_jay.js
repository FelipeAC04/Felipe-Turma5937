"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Dee_jay = void 0;
var Dee_jay = /** @class */ (function () {
    function Dee_jay() {
        this.usouGolpeEspecial = false;
        this.nome = 'Dee jay';
        this.vida = 100;
        this.nacionalidade = '';
        this.estiloLuta = '';
    }
    Dee_jay.prototype.getNome = function () {
        return this.nome;
    };
    Dee_jay.prototype.setNome = function (nome) {
        this.nome = nome;
    };
    Dee_jay.prototype.getVida = function () {
        return this.vida;
    };
    Dee_jay.prototype.setVida = function (vida) {
        this.vida = vida;
    };
    Dee_jay.prototype.getNacionalidade = function () {
        return this.nacionalidade;
    };
    Dee_jay.prototype.setNacionalidade = function (nacionalidade) {
        this.nacionalidade = nacionalidade;
    };
    Dee_jay.prototype.getEstiloLuta = function () {
        return this.estiloLuta;
    };
    Dee_jay.prototype.setEstiloLuta = function (estiloluta) {
        this.estiloLuta = estiloluta;
    };
    Dee_jay.prototype.golpeLeve = function () {
        var min = 10;
        var max = 15;
        var danoLeve = Math.floor(Math.random() * (max - min + 1)) + min;
        return danoLeve;
    };
    Dee_jay.prototype.golpePesado = function () {
        var min = 5;
        var max = 30;
        var danoPesado = Math.floor(Math.random() * (max - min + 1)) + min;
        return danoPesado;
    };
    Dee_jay.prototype.golpeEspecial = function () {
        if (this.usouGolpeEspecial) {
            return 0;
        }
        else {
            var min = 30;
            var max = 50;
            var danoEspecial = Math.floor(Math.random() * (max - min + 1)) + min;
            return danoEspecial;
        }
    };
    return Dee_jay;
}());
exports.Dee_jay = Dee_jay;
