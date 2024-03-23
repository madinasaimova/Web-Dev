x = int(input())

sum_of_digits = 0
while x > 0:
    digit = x % 10
    sum_of_digits += digit
    x //= 10

print(sum_of_digits)
