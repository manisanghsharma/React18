// To render the element in the webpage, first we initialize the component and then we render it in the index.js file

// To initialize - ReactDOM.createRoot(document...)
// and to render we do root.render

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <App />
);

// Here we see we call an app function, this app function can be defined - in App.js file

//Inside the function - we write html + js = jsx - and we can use {} inside the html to reference a javascript code.

function App() {
  function handleNameChange(){
    const nameArr = ['Radha', 'Krishna', 'Guar', 'Nitai', 'Prabhupada Ji']
    let rand = Math.floor(Math.random() * 5);
    return nameArr[rand];
  }
  
  return (
    <p>Hello {handleNameChange()}!</p>
  );
}


