import { useState } from "react";
// // Create Add and Remove buttons
// const addButton = document.createElement('button');
// addButton.textContent = 'Add H1';
// document.body.appendChild(addButton);

// const removeButton = document.createElement('button');
// removeButton.textContent = 'Remove H1';
// document.body.appendChild(removeButton);

// // Add H1 function
// function addH1() {
//   if (!document.getElementById('myHeading')) {
//     const heading = document.createElement('h1');
//     heading.textContent = 'This is an H1 tag inserted by JavaScript';
//     heading.id = 'myHeading';
//     document.body.appendChild(heading);
//   }
// }

// // Remove H1 function
// function removeH1() {
//   const h1 = document.getElementById('myHeading');
//   if (h1) {
//     h1.remove();
//   }
// }

// // Attach event listeners
// addButton.onclick = addH1;
// removeButton.onclick = removeH1;


function App() {
  const [data, setdata] = useState(false);
  return (
    <>
      {data && <h1>This is H1 tag</h1>}

      <button
        className="mr-2"
        onClick={function () {
          setdata(true);
        }}
      >
        Add H1
      </button>
      <button
        onClick={function () {
          setdata(false);
        }}
      >
        Remove H1
      </button>
    </>
  );
}

export default App;
