// Returns a list of defintions
export default async function getWordDefinitions(word, defaultValue = []) {
  try {
    const response = await fetch(
      `https://wordorganizerapi.azurewebsites.net/f6055e02-412a-4bd6-9e04-323ba5e953e4/define/${word}`,
    );
    return response.json();
  } catch {
    return defaultValue;
  }
}
