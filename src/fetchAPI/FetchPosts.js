import { useEffect, useState } from "react";

function FetchUsers() {
  const [input, setInput] = useState({ title: "", body: "" });
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [toggleBtn, setToggleBtn] = useState(false);
  const [editId, setEditId] = useState(null);

  const getPosts = async () => {
    try {
      await fetch("http://localhost:3005/posts?_sort=id&_order=desc")
        .then((response) => response.json())
        .then((data) => setPosts(data));
      setLoading(false);
    } catch (err) {
      console.log("Error: ", err);
    }
  };

  useEffect(() => {
    getPosts();
  }, []);

  const inputHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    const sanitizeData = {
      title: input.title.trim(),
      body: input.body.trim(),
    };

    if (!editId) {
      try {
        await fetch("http://localhost:3005/posts", {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(sanitizeData),
        });
        setInput({ title: "", body: "" });
        getPosts();
      } catch (err) {
        console.log("Error: ", err);
      }
    } else {
      try {
        await fetch(`http://localhost:3005/posts/${editId}`, {
          method: "PUT",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(sanitizeData),
        });
        setInput({ title: "", body: "" });
        setToggleBtn(false);
        setEditId(null);
        getPosts();
      } catch (err) {
        console.log("Error: ", err);
      }
    }
  };

  const deletePost = async (id) => {
    try {
      await fetch(`http://localhost:3005/posts/${id}`, { method: "DELETE" });
      getPosts();
    } catch (err) {
      console.log("Error: ", err);
    }
  };

  const editPost = async (id) => {
    try {
      await fetch(`http://localhost:3005/posts/${id}`)
        .then((response) => response.json())
        .then((data) => {
          setInput({
            title: data.title,
            body: data.body,
          });
          setToggleBtn(true);
          setEditId(data.id);
        });
    } catch (err) {
      console.log("Error: ", err);
    }
  };

  return (
    <>
      <div className="container">
        <div className="row mt-3">
          <div className="col-md-6 m-auto">
            <h5>Create a Post</h5>
            <hr />
            <form onSubmit={submitHandler}>
              <div className="mb-3">
                <label className="form-label" htmlFor="title">
                  Title
                </label>
                <input
                  id="title"
                  name="title"
                  className="form-control"
                  type="text"
                  autoFocus
                  required
                  maxLength={80}
                  value={input.title}
                  onChange={inputHandler}
                />
              </div>
              <div className="mb-3">
                <label className="form-label" htmlFor="body">
                  Body
                </label>
                <textarea
                  id="body"
                  name="body"
                  className="form-control"
                  maxLength={500}
                  required
                  value={input.body}
                  onChange={inputHandler}
                ></textarea>
              </div>

              {!toggleBtn ? (
                <button type="submit" className="btn btn-info">
                  <i style={{ fontSize: "18px" }} className="fa me-1">
                    &#xf1d9;
                  </i>
                  Submit
                </button>
              ) : (
                <button type="submit" className="btn btn-warning">
                  <i style={{ fontSize: "18px" }} className="fa me-1">
                    &#xf044;
                  </i>
                  Edit
                </button>
              )}
            </form>
          </div>
        </div>

        <hr />

        <div className="row mt-3 mb-5">
          <div className="col-md-6 m-auto">
            <h5>
              <i style={{ fontSize: "18px" }} className="fa me-1">
                &#xf00b;
              </i>
              Post List:
            </h5>
            {loading ? (
              <h1>Loading...</h1>
            ) : (
              posts.map((post) => (
                <div key={post.id} className="card mt-3">
                  <div className="card-body">
                    <h5 className="card-title">{post.title}</h5>
                    <p className="card-text">{post.body}</p>
                    <button
                      onClick={() => editPost(post.id)}
                      className="btn btn-warning btn-sm me-3"
                    >
                      <i style={{ fontSize: "16px" }} className="fa me-1">
                        &#xf044;
                      </i>
                      Edit
                    </button>
                    <button
                      onClick={() => deletePost(post.id)}
                      className="btn btn-danger btn-sm"
                    >
                      <i style={{ fontSize: "16px" }} className="fa me-1">
                        &#xf014;
                      </i>
                      Delete
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default FetchUsers;
