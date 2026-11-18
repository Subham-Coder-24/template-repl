def greet(name: str) -> str:
    return f"Hello, {name}! Welcome to your Python workspace."


if __name__ == "__main__":
    name = input("What's your name? ")
    print(greet(name))
