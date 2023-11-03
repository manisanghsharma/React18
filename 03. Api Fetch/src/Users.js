const Users = ({getData}) => {
    return (
        <button onClick={() => getData("users")} className="btn">
            Users
        </button>
    );
}
export default Users