let n = Math.floor(Math.random() * 1000)

do {while (true) {
    console.log(n)
    let userGuess = prompt('Загадано число от 0 до 999. \nПопробуйте угадать число:');

    if (userGuess === 'q') {
        break;
    }  else if (isNaN(userGuess) || (+userGuess < 0 && +userGuess > 999) || (userGuess == null)) {
        alert('Вы ввели некорректное значнение!');
    }  else if (userGuess == n) {
        alert(`Вы угадали ! ! ! \nБыло загадано число -- ${n}`);
    }  else if (userGuess < n) {
        alert(`Загаданное число больше чем ${userGuess}`);
    }  else if (userGuess > n) {
        alert(`Загаданное число меньше чем ${userGuess}`);
    }
}
} while (n == userGuess)