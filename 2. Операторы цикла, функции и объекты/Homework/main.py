import time

start_time = time.time()
def get_primes(amount_of_numbers):
  arr_primes = []
  counter = 2
  
  while len(arr_primes) < amount_of_numbers:
    flag = 0
    i = 2

    while i <= counter**0.5:
      if counter % i == 0:
        flag += 1
      i += 1
    if flag == 0:
      arr_primes.append(counter)
    counter += 1
  return arr_primes


get_primes(100000)
print(f"{round((time.time() - start_time), 2)} seconds")



# 305.63 seconds
