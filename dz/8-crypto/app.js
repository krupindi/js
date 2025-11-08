// Написать 2 функции:

// шифратор пароля - функция принимает пароль, разбивает по символам, меняет местами какие-то буквы по заданному алгоритму и возвращает строку.
// проверка пароля - принимает зашифрованный пароль и второй пароль. Воспроизводит алгоритм назад на зашифрованном пароле и возвращает true, если он совпадает со втором паролем и false, если нет.
// crypto(‘password’) -> ssapdorw

// check(‘ssapdorw’, ‘password’) -> true

// check(‘ssapdorw’, ‘wrong’) -> false

const password = 'password';

function Crypto(pwd) {
  const chars = pwd.split('');

  for (let i = 0; i < chars.length; i += 2) {
    [chars[i], chars[i + 1]] = [chars[i + 1], chars[i]];
  }
  return chars.join('');
}

console.log(Crypto(password));

function Check(encrypted, candidate) {
  const descrypted = Crypto(encrypted);
  return descrypted === candidate;
}

console.log(Check('apssowdr', password));
