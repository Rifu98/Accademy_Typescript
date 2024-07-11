// Interfaccia Persona
interface Persona {
    id: number;
    nome: string;
    cognome: string;
    eta: number;
    getFullName(): string;
}

// Classe Utente che implementa Persona
class Utente implements Persona {
    id: number;
    nome: string;
    cognome: string;
    eta: number;
    email: string;

    constructor(id: number, nome: string, cognome: string, eta: number, email: string) {
        this.id = id;
        this.nome = nome;
        this.cognome = cognome;
        this.eta = eta;
        this.email = email;
    }

    getFullName(): string {
        return `${this.nome} ${this.cognome}`;
    }
}

// Classe Professore che implementa Persona con tutti i campi privati e getters e setters
class Professore implements Persona {
    private _id: number;
    private _nome: string;
    private _cognome: string;
    private _eta: number;
    private _materia: string;

    constructor(id: number, nome: string, cognome: string, eta: number, materia: string) {
        this._id = id;
        this._nome = nome;
        this._cognome = cognome;
        this._eta = eta;
        this._materia = materia;
    }

    getFullName(): string {
        return `${this._nome} ${this._cognome}`;
    }

    get id(): number {
        return this._id;
    }

    get nome(): string {
        return this._nome;
    }

    get cognome(): string {
        return this._cognome;
    }

    get eta(): number {
        return this._eta;
    }

    get materia(): string {
        return this._materia;
    }

    set id(value: number) {
        this._id = value;
    }

    set nome(value: string) {
        this._nome = value;
    }

    set cognome(value: string) {
        this._cognome = value;
    }

    set eta(value: number) {
        this._eta = value;
    }

    set materia(value: string) {
        this._materia = value;
    }
}

// Esempi di utilizzo
const utente = new Utente(1, "Mario", "Rossi", 30, "mario.rossi@example.com");
console.log(utente.getFullName()); // Output: Mario Rossi

const professore = new Professore(2, "Luigi", "Verdi", 45, "Matematica");
console.log(professore.getFullName()); // Output: Luigi Verdi
console.log(professore.materia); // Output: Matematica
professore.materia = "Fisica";
console.log(professore.materia); // Output: Fisica
