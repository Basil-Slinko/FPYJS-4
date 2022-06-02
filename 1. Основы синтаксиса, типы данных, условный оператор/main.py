import random as rand


n = rand.randint(0, 999)
print(n)
user_number = int(input('\nЗагадано число от 0 до 999.\nПопробуйте угадать число: '))

if (user_number < 0) or (user_number > 999):
    user_number = input('Введено неверное значение, попробуйте ещё раз: ')

while n != user_number:
    if n == user_number:
        print(f'\nВы угадали ! ! !\nБыло загадано число -- n')


