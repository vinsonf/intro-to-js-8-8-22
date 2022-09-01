import { Enemy } from "./enemy.js";

export class Boss extends Enemy{
    takeDamage(){
        this.health -= 20;
        console.log('take damage')
        this.checkDead();
    }
}