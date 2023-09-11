import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const EditBooks = () => {
  const { id } = useParams();

  const [singleBook, setSingleBook] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/all-books/${id}`)
      .then((res) => res.json())
      .then((data) => setSingleBook(data));
  }, []);

  const {
    _id,
    bookName,
    authorName,
    imageUrl,
    categoryName,
    metaTextDescription,
    bookPdfUrl,
  } = singleBook;
console.log(singleBook);
  

  // const coffees = useLoaderData();
  // const { _id,taste,detail,category, name,  photo, quantity, supplier } =
  // coffees;

  const bookCategories = [
    "Fiction",
    "Non-fiction",
    "Mystery",
    "Programming",
    "Science fiction",
    "Fantasy",
    "Horror",
    "Biography",
    "Autobiography",
    "History",
    "Self-help",
    "Business",
    "Memoir",
    "Poetry",
    "Children's books",
    "Travel",
    "Religion and spirituality",
    "Science",
    "Art and design",
  ];

  const [selectedBookCategory, setSelectedBookCategory] = useState(
    bookCategories[0]
  );

  const handleChangeSelectedValue = (event) => {
    console.log(event.target.value);
    setSelectedBookCategory(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;

    const bookName = form.bookName.value;
    const authorName = form.authorName.value;
    const imageUrl = form.imageUrl.value;
    const categoryName = form.categoryName.value;
    const metaTextDescription = form.metaTextDescription.value;
    const bookPdfUrl = form.bookPDF.value;

    const dataObj = {
      bookName,
      authorName,
      imageUrl,
      categoryName,
      metaTextDescription,
      bookPdfUrl,
    };

    // using fetch for send data to db
    fetch(`http://localhost:5000/book/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(dataObj),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };
  return (
    <div className="p-3 bg-light">
      <form
        className="row g-3"
        onSubmit={handleSubmit}
        // encType="multipart/form-data"
      >
        <div className="col-md-6">
          <label htmlFor="bookName" className="form-label">
            Book Name
          </label>
          <input
            type="name"
            name="bookName"
            className="form-control"
            id="bookName"
            
            defaultValue={bookName}
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="authorName" className="form-label">
            Author Name
          </label>
          <input
            type="name"
            name="authorName"
            className="form-control"
            id="authorName"
            defaultValue={authorName}
          />
        </div>
        <div className="col-12">
          <label htmlFor="imageUrl" className="form-label">
            Book Image URL
          </label>
          <input
            type="url"
            name="imageUrl"
            className="form-control"
            id="imageUrl"
            defaultValue={imageUrl}
          />
        </div>

        <div className="col-md-4">
          <label htmlFor="inputState" className="form-label">
            State
          </label>
          <select
            id="inputState"
            name="categoryName"
            className="form-select"
            value={selectedBookCategory}
            defaultValue={categoryName}
            onChange={handleChangeSelectedValue}
          >
            {bookCategories.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
        <div className="col-md-8">
          <label htmlFor="metaTextDescription" className="form-label">
            Meta description
          </label>
          <textarea
            type="text"
            className="form-control"
            name="metaTextDescription"
            id="metaTextDescription"
            
          defaultValue={metaTextDescription}
          />
        </div>
        <div className="col-12">
          <div class="mb-3">
            <label for="formFile" class="form-label">
              Insert pdf link of the book
            </label>
            <input
              name="bookPDF"
              class="form-control"
              type="url"
              id="formFile"
              defaultValue={bookPdfUrl}
            />
          </div>
        </div>
        <div className="col-12">
          <button type="submit" className="btn btn-primary">
            Update book
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditBooks;
