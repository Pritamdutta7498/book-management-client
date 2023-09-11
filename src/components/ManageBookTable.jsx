import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ManageBookTable = () => {
  const [allBooks, setAllBooks] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/all-books")
      .then((res) => res.json())
      .then((data) => setAllBooks(data));
  }, []);

  // delete btn implementation

  const handleDeleteBtn = (id) => {
    fetch(`http://localhost:5000/book/${id}`, {
      method: "DELETE",
    })
    .then(res => res.json())
    .then(data=> {console.log(data)})
  };

  return (
    <div>
      <table className="table table-dark table-striped">
        <thead>
          <tr>
            <th scope="col">SL</th>
            <th scope="col">Book Name</th>
            <th scope="col">Author Name</th>
            <th scope="col">category Name</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {allBooks.map((book, index) => (
            <tr key={index}>
              <th scope="row">{index + 1}</th>
              <th scope="row">{book.bookName}</th>
              <td>{book.authorName}</td>
              <td>{book.categoryName}</td>
              <td>
                <button onClick={() => handleDeleteBtn(book._id)} className="btn btn-warning ms-2">
                  Delete
                </button>
               <Link to={`/admin/dashboard/edit-books/${book._id}` } className="btn btn-success ms-2">Update</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageBookTable;
