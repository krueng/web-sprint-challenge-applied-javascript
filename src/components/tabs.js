import axios from "axios";

const Tabs = (topics) => {
  // TASK 3
  // ---------------------
  // Implement this function which takes an array of strings ("topics") as its only argument.
  // As an example, if the topics passed are ['javascript', 'bootstrap', 'technology']
  // then the function returns the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  // <div class="topics">
  //   <div class="tab">javascript</div>
  //   <div class="tab">bootstrap</div>
  //   <div class="tab">technology</div>
  // </div>
  //

  //Create
  const divTopics = document.createElement('div');

  //Class
  divTopics.classList.add('topics');

  //loop all
  topics.forEach(e => {
    const divTab = document.createElement('div');
    divTab.classList.add('tab');
    divTab.textContent = e;
    divTopics.appendChild(divTab);
  });
  return divTopics;
}

const tabsAppender = async (selector) => {
  // TASK 4
  // ---------------------
  // Implement this function which takes a css selector as its only argument.
  // It should obtain topics from this endpoint: `http://localhost:5000/api/topics` (test it in Postman/HTTPie!).
  // Find the array of topics inside the response, and create the tabs using the Tabs component.
  // Append the tabs to the element in the DOM that matches the selector passed to the function.
  //
  // const getTopics = async () => {
    try {
      const res = await axios.get(`http://localhost:5000/api/topics`);
      const arrTopics = res.data.topics;
      document.querySelector(selector).appendChild(Tabs(arrTopics));
    } catch (error) {
      const errTxt = document.createElement('p');
      errTxt.textContent = 'Please try again!'
      selector.appendChild(errTxt);
    }
  // }
  // getTopics();

}
export { Tabs, tabsAppender }