// Classe Utente che implementa Persona
var Utente = /** @class */ (function () {
    function Utente(id, nome, cognome, eta, email) {
        this.id = id;
        this.nome = nome;
        this.cognome = cognome;
        this.eta = eta;
        this.email = email;
    }
    Utente.prototype.getFullName = function () {
        return "".concat(this.nome, " ").concat(this.cognome);
    };
    return Utente;
}());
// Classe Professore che implementa Persona con tutti i campi privati e getters e setters
var Professore = /** @class */ (function () {
    function Professore(id, nome, cognome, eta, materia) {
        this._id = id;
        this._nome = nome;
        this._cognome = cognome;
        this._eta = eta;
        this._materia = materia;
    }
    Professore.prototype.getFullName = function () {
        return "".concat(this._nome, " ").concat(this._cognome);
    };
    Object.defineProperty(Professore.prototype, "id", {
        get: function () {
            return this._id;
        },
        set: function (value) {
            this._id = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Professore.prototype, "nome", {
        get: function () {
            return this._nome;
        },
        set: function (value) {
            this._nome = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Professore.prototype, "cognome", {
        get: function () {
            return this._cognome;
        },
        set: function (value) {
            this._cognome = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Professore.prototype, "eta", {
        get: function () {
            return this._eta;
        },
        set: function (value) {
            this._eta = value;
        },
        enumerable: false,
        configurable: true
    });
    Professore.prototype.getMateria = function () {
        return this._materia;
    };
    Object.defineProperty(Professore.prototype, "materia", {
        set: function (value) {
            this._materia = value;
        },
        enumerable: false,
        configurable: true
    });
    return Professore;
}());
// Esempi di utilizzo
var utente = new Utente(1, "Mario", "Rossi", 30, "mario.rossi@example.com");
console.log(utente.getFullName()); // Output: Mario Rossi
var professore = new Professore(2, "Luigi", "Verdi", 45, "Matematica");
console.log(professore.getFullName()); // Output: Luigi Verdi
console.log(professore.getMateria()); // Output: Matematica
professore.materia = "Fisica";
console.log(professore.materia); // Output: Fisica
