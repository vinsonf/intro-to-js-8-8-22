export class Enemy{
    health = 100;
    strength = 10;
    weakness = 'fire';

    takeDamage(){
        this.health -= 50;
        console.log('take damage')
        this.checkDead();
    }

    checkDead(){
        if (this.health <= 0){
            console.log('this enemy is dead');
            alert('You have defeated the enemy');
        } else {
            console.log('this enemy is still alive');
        }
    }
}