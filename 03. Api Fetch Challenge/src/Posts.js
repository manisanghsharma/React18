const Posts = ({ getData }) => {
    return (
        <button onClick={() => getData("posts")} className="btn">
            Posts
        </button>
    );
};
export default Posts;
