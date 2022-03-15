# Im a comment (use ctrl + / for comments)

# Variables
name = "Sebastian"  # String
last = "Ruiz"       # String
age = 22           # Int
found = False       # Bool
price = 9.99        # Float

# Print
print("Name: " + name + "\nLast Name: " + last + str(age))
# OR
print("Name: {name} Last Name: {last} Age:  {age}")

# IF statements
if age >= 18:
    print(name + " " + " Is a grownup!")
elif age == 100:
    print(name + " " + "Is a century old!")
else:
    print(name + " " + "Is Underage")

# Inputs
found = input("Enter" + name + " " + last + " " + "age: ")