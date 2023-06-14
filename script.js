import openai

# Set up OpenAI API credentials
openai.api_key = "YOUR_API_KEY"

def generate_horoscope(name):
    prompt = f"Horoscope for {name}:"
    response = openai.Completion.create(
        engine="davinci",
        prompt=prompt,
        max_tokens=100,
        temperature=0.7,
        n=1,
        stop=None,
        timeout=10
    )
    horoscope = response.choices[0].text.strip()
    return horoscope

def main():
    name = input("Enter your name: ")
    horoscope = generate_horoscope(name)
    print(horoscope)

if __name__ == "__main__":
    main()
