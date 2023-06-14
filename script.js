def add(num1, num2):
    return num1 + num2

def subtract(num1, num2):
    return num1 - num2

def multiply(num1, num2):
    return num1 * num2

def divide(num1, num2):
    return num1 / num2

def calculator():
    print("Calculator")
    print("1. Add")
    print("2. Subtract")
    print("3. Multiply")
    print("4. Divide")

    choice = input("Enter your choice (1-4): ")

    num1 = float(input("Enter the first number: "))
    num2 = float(input("Enter the second number: "))

    if choice == "1":
        result = add(num1, num2)
        operator = "+"
    elif choice == "2":
        result = subtract(num1, num2)
        operator = "-"
    elif choice == "3":
        result = multiply(num1, num2)
        operator = "*"
    elif choice == "4":
        result = divide(num1, num2)
        operator = "/"
    else:
        print("Invalid choice.")
        return

    print(f"{num1} {operator} {num2} = {result}")

calculator()
