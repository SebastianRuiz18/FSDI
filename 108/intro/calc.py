# Description
    # PyCalc
    # 2022
    # Sebastian Ruiz
    # A simple test python calculator

# Imports

# Global variables

# Functions
from email import message


def print_menu():
    print("=====================================")
    print(" PyCalc 3000 ")
    print("=====================================")

    print("[1] Sum")
    print("[2] Substract")
    print("[3] Multiply")
    print("[4] Divide")
    print("[5] Repeat message")

# Plain Instructions
print_menu()
option = input("Please select an option: ")
if option == "5":
    msg = input ("Message: ")
    times = int (input ("How many times? "))
    for i in range(0,times):
        print(msg)
elif option != "1" or option != "2" or option != "3" or option != "4":
    print("Your option must be 1, 2, 3, 4 or 5")
else:
    n1 = float (input ("Number 1: "))
    n2 = float (input ("Number 2: "))

if option == "1":
    res = n1 + n2
    print(f"Result is: {res}")
elif option == "2":
    res = n1 - n2
    print(f"Result is: {res}")
elif option == "3":
    res = n1 * n2
    print(f"Result is: {res}")
elif option == "4":
    if n2 == 0:
        print("Cannot divide by 0!")
    else:
        res = n1 / n2
        print(f"Result is: {res}")





