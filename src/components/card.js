import axios from "axios";
const Card = (article) => {
  // TASK 5
  // ---------------------
  // Implement this function, which should return the markup you see below.
  // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
  //
  // <div class="card">
  //   <div class="headline">{ headline }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ authorPhoto }>
  //     </div>
  //     <span>By { authorName }</span>
  //   </div>
  // </div>
  //
  const { headline, authorPhoto, authorName } = article;

  //Create
  const divCard = document.createElement('div');
  const divHeadli = document.createElement('div');
  const divAuthor = document.createElement('div');
  const divImgCon = document.createElement('div');
  const imgAuthor = document.createElement('img');
  const spanAutho = document.createElement('span');

  //Classes
  divCard.classList.add('card');
  divHeadli.classList.add('headline');
  divAuthor.classList.add('author');
  divImgCon.classList.add('img-container');

  //Assigning
  divHeadli.textContent = headline;
  imgAuthor.src = authorPhoto;
  spanAutho.textContent = `By ${authorName}`;

  //Appending
  divCard.appendChild(divHeadli);
  divCard.appendChild(divAuthor);
  divAuthor.appendChild(divImgCon);
  divImgCon.appendChild(imgAuthor);
  divAuthor.appendChild(spanAutho);

  divCard.addEventListener('click', () => {
    console.log(headline);
  })

  return divCard

}

const cardAppender = (selector) => {
  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `http://localhost:5000/api/articles` (test it in Postman/HTTPie!).
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //

  axios.get(`http://localhost:5000/api/articles`)
    .then(res => {
      const arr = res.data.articles;
      const ndx = Object.keys(arr);
      for (let i = 0; i < ndx.length; i++) {
        for (let ii = 0; ii < arr[ndx[i]].length; ii++) {
          // const headline = arr[ndx[i]][ii].headline;
          // const authorPhoto = arr[ndx[i]][ii].authorPhoto;
          // const authorName = arr[ndx[i]][ii].authorName;
          const { headline, authorPhoto, authorName } = arr[ndx[i]][ii];
          document.querySelector(selector).appendChild(Card({ headline, authorPhoto, authorName }));
        }
      }
    })
}

export { Card, cardAppender }
