const Header = (title, date, temp) => {
  // TASK 1
  // ---------------------
  // Implement this function taking `title`, `date` and `temp` as its 3 args and returning the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  //  <div class="header">
  //    <span class="date">{ date }</span>
  //    <h1>{ title }</h1>
  //    <span class="temp">{ temp }</span>
  //  </div>
  //

  //Create
  const divHeader = document.createElement('div');
  const spanDate = document.createElement('span');
  const hOne = document.createElement('h1');
  const spanTemp = document.createElement('span');

  //Classes
  divHeader.classList.add('header');
  spanDate.classList.add('date');
  spanTemp.classList.add('temp');

  //Assigning
  spanDate.textContent = date;
  hOne.textContent = title;
  spanTemp.textContent = `${temp}°F`;

  //Appending
  divHeader.appendChild(spanDate);
  divHeader.appendChild(hOne);
  divHeader.appendChild(spanTemp);

  return divHeader;
}

const headerAppender = (selector) => {
  // TASK 2
  // ---------------------
  // Implement this function taking a css selector as its only argument.
  // It should create a header using the Header component above, passing arguments of your choosing.
  // It should append the header to the element in the DOM that matches the given selector.
  //
  document.querySelector(selector).appendChild(Header('Read!', '11/11/1911', 71));

}

export { Header, headerAppender }
