// SeaLion.js

class SeaLion extends Animal {
  constructor (name,species,sound){
    this.name="Mr.waggy bloog"
    this.species = "Sea Lion";
    this.sound = "Ow ow ow (sea dog energy)";
    this.canFly = false;
    this.canSwim= true

  }

  makeSound() {
    return `${this.name} says: ${this.sound}`;
  }

  move() {
    const moves = [
      `${this.name} flops across the beach like a giant wet noodle. `,
      `${this.name} zooms underwater like a chunky torpedo with whiskers. `,
      `${this.name} wiggles dramatically, demanding attention from literally everyone around.`
    ];
    return moves[Math.floor(Math.random() * moves.length)];
  }

  specialSkill() {
    return `${this.name} balances a ball on its nose while striking a pose worthy of a circus superstar. `;
  }
}
