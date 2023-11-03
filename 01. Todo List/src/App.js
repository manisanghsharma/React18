import "./index.css";
import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";
import Searchitem from "./Searchitem";
import Additem from "./Additem";
import { useEffect, useState } from "react";
import apiRequest from "./apiRequest";

function App() {
    const [items, setItems] = useState([]);
    const [newItem, setNewItem] = useState("");
    const [search, setSearch] = useState("");
    const [fetchError, setFetchError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    const apiURL = "http://localhost:3500/items";

    useEffect(() => {
        const fetchItems = async () => {
            try {
                const response = await fetch(apiURL);
                if (!response.ok) throw Error("Did not receive expected Data");
                const listItems = await response.json();
                setItems(listItems);
                setFetchError(null);
            } catch (error) {
                setFetchError(error.message);
            } finally {
                setIsLoading(false);
            }
        };
        fetchItems();
    }, []);

    const addItem = async (item) => {
        const id = items.length ? items[items.length - 1].id + 1 : 1;
        const myNewItem = { id, checked: false, item };
        const listItems = [...items, myNewItem];
        setItems(listItems);

        const postOptions = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(myNewItem),
        };

        const result = await apiRequest(apiURL, postOptions);
        if (result) setFetchError(result);
    };

    const handleCheck = async (id) => {
        const listItems = items.map((item) =>
            item.id === id
                ? {
                      ...item,
                      checked: !item.checked,
                  }
                : item
        );
        setItems(listItems);

        const myItem = listItems.filter((item) => item.id === id);
        const updateOptions = {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ checked: myItem[0].checked }),
        };
        const reqUrl = `${apiURL}/${id}`;
        const result = await apiRequest(reqUrl, updateOptions);
        if (result) setFetchError(result);
    };

    const handleDelete = async (id) => {
        const listItems = items.filter((item) => item.id !== id);
        setItems(listItems);

        const myItem = items.filter((item) => item.id === id);
        const deleteOptions = { method: "DELETE" };
        const reqUrl = `${apiURL}/${id}`;
        const result = await apiRequest(reqUrl, deleteOptions);
        if (result) setFetchError(result);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!newItem) return;
        addItem(newItem);
        setNewItem("");
    };

    return (
        <div className="App">
            <Header title={"Grocery List"} />
            <Additem
                newItem={newItem}
                setNewItem={setNewItem}
                handleSubmit={handleSubmit}
            />
            <Searchitem
                search={search}
                setSearch={setSearch}
                handleSubmit={handleSubmit}
            />
            <main>
                {isLoading && <p>Loading Items...</p>}
                {fetchError && (
                    <p style={{ color: "red" }}>{`Error: ${fetchError}`}</p>
                )}
                {!fetchError && !isLoading && (
                    <Content
                        items={items.filter((item) =>
                            item.item
                                .toLowerCase()
                                .includes(search.toLowerCase())
                        )}
                        handleCheck={handleCheck}
                        handleDelete={handleDelete}
                    />
                )}
            </main>
            <Footer length={items.length} />
        </div>
    );
}

export default App;
