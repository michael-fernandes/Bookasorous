// Returns a list of defintions
export default function saveDefinition() {
  fetch(
    `https://wordorganizerapi.azurewebsites.net/f6055e02-412a-4bd6-9e04-323ba5e953e4/save/${word}`,
  )
    .then((response) => response.json())
    .then((json) => {
      console.log(json);
      addWordHandler(json);
    })
    .catch((error) => console.error(error))
    .finally(() => onChangeText(''));
}
