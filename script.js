const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'My name is Soladoye Olaoluwa!';

const paragraph = document.createElement('p');  // This sets the element tag
paragraph.classList.add('paragraph');           // This adds a class to the element
paragraph.textContent = `Hey I'm Red!`;         // This sets a textcontent to the element
paragraph.style.color = 'red';                  // This is a way of defining a single inline style

const heading = document.createElement('h3');
heading.classList.add('heading');
heading.textContent = `I'm a blue h3`;
heading.setAttribute ('style','color:blue');

const division = document.createElement('div');
division.classList.add('division');
// division.textContent = `test`;
division.setAttribute('style', 'background-color:pink; border:1px solid black');    //Define multiple inline styles

const anotherHeading = document.createElement ('h1');
anotherHeading.classList.add('anotherHeading');
anotherHeading.textContent = `I'm in a Div`;

const para = document.createElement('p');
para.classList.add('paragraph');
para.textContent = `Me too, boss`;

btn.addEventListener('click', function (e) {
    e.target.style.background = 'cyan';
  });

container.appendChild(content);
container.appendChild(paragraph);
container.appendChild(heading);
container.appendChild(division);
division.appendChild(anotherHeading);
division.appendChild(para);
