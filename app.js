const gifArea = document.querySelector('#gif-area');
const searchInput = document.querySelector('input[name="search"]');
const form = document.querySelector('#searchform')


form.addEventListener("submit", async function(evt) {
  evt.preventDefault();
  
  const keyword = searchInput.value;
  searchInput.value = "";
  const response = await axios.get("http://api.giphy.com/v1/gifs/search", { params: { q: keyword, api_key: "MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym"}});
//   console.log(response.data);

  const gif = document.createElement('div');
  const newGif = document.createElement('img')
  let results = response.data.data.length;
  let randomIdx = Math.floor(Math.random() * results);
  newGif.setAttribute('src', response.data.data[randomIdx].images.original.url)

  const removeBtn = document.createElement('button');
  removeBtn.innerText = 'Remove Images';
  removeBtn.className = 'delete'

  gif.append(newGif);
  gifArea.append(gif);
  gifArea.append(removeBtn);
  


});


gifArea.addEventListener('click', function(e){
    if(e.target.className === 'delete'){
        e.target.parentElement.remove();
    };
});