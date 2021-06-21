const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'My name is Soladoye Olaoluwa!';

const paragraph = document.createElement('p');
paragraph.classList.add('paragraph');
paragraph.textContent = `Hey I'm Red!`;
paragraph.style.color = 'red';

const heading = document.createElement ('heading');
heading.classList.add('heading');
heading.textContent = `I'm a blue h3`;
heading.setAttribute ('style','color:blue');


container.appendChild(content);
container.appendChild(paragraph);
container.appendChild(heading)
