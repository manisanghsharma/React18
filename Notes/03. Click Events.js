//! Handling Clicks

//* We can handle clicks by using onClick / onDoubleClick - inside this we pass function without (), that means the function is not invoked when we load the page - but when we click the button

    const handleClick = () => {
    console.log("You clicked it!");
    };

    const handleClick2 = (name) => {
    console.log(`${name} clicked it!`);
    };

    const handleClick3 = (e) => {
    console.log(e.target.innerText);
    };

    <div>
    <button onClick={handleClick}>1. Click it!</button>
    <button onClick={() => handleClick2("Manisangh Sharma")}>2. Click it!</button>
    <button onClick={(e) => handleClick3(e)}>3. Click it!</button>
    </div>;

//? If the function requires a parameter, we invoke an anonymous function - when we click - this fn is invoked - inside this fn we call the original fn with the parameter

    <button onClick={() => {
        handleClick("Manisangh Sharma");
    }}></button>;

//! Since the call in only in single line, we do not need the {} after the => so we remove it

    <button onClick={() => handleClick("Manisangh Sharma")}></button>;

//? same goes for the event function (e) - here we also have to pass the (e) when we initialize the onClick event using the anonymous function