const Comments = ({getData}) => {
    return (
        <button onClick={() => getData("comments")} className="btn">
            Comments
        </button>
    );
}
export default Comments