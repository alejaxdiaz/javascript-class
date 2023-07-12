function Persona(name, lastName, country, age) {
    this.name = name
    this.lastName = lastName
    this.age = age
    this.country = country
}

const persona = new Persona("Alejandra", "Pinto", 29, "Venezuela")

console.log(persona)

const person = {
    name: "Alejandra",
    lastName: "Diaz",
    age: 28,
    country: "Venezuela",
    city: "Valencia",
    skills: [
        "HTML",
        "CSS",
        "JavaScript"
    ], 
    getFullName: function() {
        return `${this.name} ${this.lastName}`
      }
}

console.log(person)

// accessing values using .
console.log(person.name)
console.log(person.lastName)
console.log(person.age)

// value can be accessed using square bracket and key name
console.log(person['name'])
console.log(person['lastName'])
console.log(person['age'])

console.log(person.getFullName())