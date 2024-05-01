import OpenAI from "openai";

const openai = new OpenAI({
    apiKey: "",
    dangerouslyAllowBrowser: true,
  });


async function main() {
  const completion = await openai.chat.completions.create({
    messages: [{ role: "system", content: "You are a helpful comic book creator." }],
    model: "gpt-3.5-turbo",
  });

  //console.log(completion.choices[0]);
}


export async function createComicStory(heroes: string[], villains: string[], sideCharacters: string[]) {
    const prompt: string = "create a comic book story that is roughly 1 paragraph long using these characters " + heroes.join( ' ') + ' ' 
    + villains.join(' ') + ' ' + sideCharacters.join(' ');
    const imagePrompt = "create an easy comic book panel or image of these characters doing something " + heroes.join( ' ') + ' ' 
    + villains.join(' ') + ' ' + sideCharacters.join(' ');

    const completion = await openai.chat.completions.create({
        messages: [
            { role: "system", content: "You are a helpful comic book creator." },
            { role: "user", content: prompt }
        ],
        model: "gpt-3.5-turbo",
    });
    return completion.choices[0].message.content;
}

export async function createImagePrompt(heroes: string[], villains: string[], sideCharacters: string[]) 
{
    const imagePrompt = "create an easy comic book panel or image of these characters doing something " + heroes.join( ' ') + ' ' 
    + villains.join(' ') + ' ' + sideCharacters.join(' ');

    const completion = await openai.chat.completions.create({
        messages: [
            { role: "system", content: "You are a helpful comic book prompt creator for Dall-e 3 to use." },
            { role: "user", content: imagePrompt }
        ],
        model: "gpt-3.5-turbo",
    });
    return completion.choices[0].message.content;
}

export async function createComicImage(prompt: string) {
    const response = await openai.images.generate({
        model: "dall-e-3",
        prompt: prompt,
        n: 1,
        size: "1024x1024"
      });
      return response.data[0].url;
}

// const heroes = ['spiderman', 'captain america', 'miles morales'];
// const villains = ['green goblin', 'doctor octopus', 'hobgoblin'];
// const sideCharacters = ['mary jane', 'uncle ben'];
// createComicStory(heroes, villains, sideCharacters);