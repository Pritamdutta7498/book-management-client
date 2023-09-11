import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const BookDetails = () => {
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
  return (
    <div class="card">
      <div class="card-header">{bookName}</div>
      <div class="card-body">
        <h5 class="card-title">{authorName}</h5>
        <p class="card-text">
         {metaTextDescription}
        </p>
        <iframe title="pdf file viewer" src={bookPdfUrl} width="100%" height="600px"></iframe>
      </div>
    </div>
  );
};

export default BookDetails;
