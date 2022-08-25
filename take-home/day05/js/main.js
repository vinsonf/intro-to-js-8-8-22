

function testPassword() {
    const password = prompt("Enter a password");

    if (password.length < 6){
        alert('password is not long enough');
        return testPassword();
    }

    if (password.length > 20){
        alert('password is too long');
        return testPassword(); 
    }

    const firstCharacter = password[0];

    const isLowerCase = firstCharacter.charCodeAt(0) >= 96 && firstCharacter.charCodeAt(0) <= 122;

    const isUpperCase = firstCharacter.charCodeAt(0) >= 65 && firstCharacter.charCodeAt(0) <= 90;

    if ( isLowerCase || isUpperCase ){
        alert('password is valid');

    } else{
        alert('password does not start with a letter');
        return testPassword();
    }

}

// testPassword();


function testPassword2() {
    const password = prompt("Enter a password");
    const isLetterPattern = /[a-zA-Z]/;
    const isCorrectLengthPattern = /^.{6,20}$/;

    if ( !isLetterPattern.test(password[0]) ){
        alert('password does not start with a letter');
        return testPassword2();
    }
    if ( !isCorrectLengthPattern.test(password) ){
        alert('password correct length');
        return testPassword2();
    }
    alert('password is valid');

}

testPassword2();