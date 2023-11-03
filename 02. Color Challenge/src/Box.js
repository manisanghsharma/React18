const Box = ({ color, setColor }) => {
  return (
    <div className="container">
      <div className="box" style={{backgroundColor: color}}>
        <p id="color">{color ? color : "Empty Value"}</p>
      </div>
      <input
        autoFocus
        id="addColor"
        type="text"
        placeholder="Add Color Name"
        onChange={(e) => setColor(e.target.value)}
      />
    </div>
  );
};
export default Box;
