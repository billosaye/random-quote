const quotes = {
  "Maya Angelou": "Success is liking yourself, liking what you do, and liking how you do it.",
  "Albert Einstein": "The world is a dangerous place, not because of those who do evil, but because of those who watch it happen without doing anything about it.",
  "Marie Curie": "One never notices what has been done; one can only see what remains to be done.",
  "Stephen Hawking": "Intelligence is the ability to adapt to change.",
  "Napoleon Hill": "Whatever the mind of man can conceive and believe, it can achieve.",
  "Ralph Waldo Emerson": "Do not go where the path may lead, go instead where there is no path and leave a trail.",
  "Lao Tzu": "The journey of a thousand miles begins with a single step.",
  "Marcus Aurelius": "The whole future lies in uncertainty: live immediately.",
  "Theodore Roosevelt": "Do what you can, with what you have, where you are.",
  "Bruce Lee": "Be water, my friend. Empty your mind, be formless, shapeless, like water. If you put water into a cup, it becomes the cup. If you put water into a bottle, it becomes the bottle. If you put water into a teapot, it becomes the teapot. Water can drip and it can crash. Be water.",
  "Nelson Mandela": "Education is the most powerful weapon which you can use to change the world.",
  "Mahatma Gandhi": "Be the change that you wish to see in the world.",
  "Aristotle": "There is no wealth like knowledge, and no poverty like ignorance.",
  "Plato": "True knowledge is to know the extent of one's ignorance.",
  "Confucius": "Our greatest glory is not in never falling, but in rising every time we fall.",
  "Leonardo da Vinci": "Study the science of art. Study the art of science. Learn how to see. Realize that everything connects to everything else.",
  "Michelangelo": "The greatest danger for most of us is not that our aim is too high and we miss it, but that it is too low and we reach it.",
  "William Shakespeare": "To be or not to be, that is the question.",
  "Voltaire": "It is forbidden to kill; therefore all murderers are punished unless they kill in large numbers and to the sound of trumpets.",
  "Charles Darwin": "In the struggle for survival, the fittest win out in the long run.",
  "Jane Austen": "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
  "Fyodor Dostoevsky": "The only reason man destroys bridges is because he has ceased to believe that people can ever meet in the middle.",
  "Victor Hugo": "Even the darkest night will end and the sun will rise.",
  "C.S. Lewis": "Friendship is born at that moment when one person says to another, 'What! You too? I thought I was the only one.",
  "George Orwell": "War is peace. Freedom is slavery. Ignorance is strength.",
  "Khalil Gibran": "Out of suffering have emerged the strongest souls; the most massive characters are seared with scars.",
  "Friedrich Nietzsche": "That which does not kill me, makes me stronger.",
  "F. Scott Fitzgerald": "So we beat on, boats against the current, borne back ceaselessly into the past.",
  "Mark Twain": "The difference between the right word and the almost right word is the difference between lightning and a lightning bug."
};



document.querySelector("#generate").addEventListener("click", () => {
  generate();
});

function generate(){ 
  const authors = Object.keys(quotes);
  // grab a random key (author) and store it in author
  const author = authors[Math.floor(Math.random() * authors.length)];
  // grab the value(quote) that belongs to that key
  const quote = quotes[author]

  document.querySelector("#quote").textContent = quote;
  document.querySelector("#author").textContent = author;
}

window.onload = function(){
  generate()
}