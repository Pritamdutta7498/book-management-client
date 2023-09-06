import React from "react";

const BookUploadForm = () => {
  return (
    <div className="p-3 bg-light">
      <form class="row g-3">
        <div class="col-md-6">
          <label for="inputBookName" class="form-label">
            Book Name
          </label>
          <input
            type="text"
            name="bookName"
            class="form-control"
            id="inputBookName"
            placeholder="enter book name"
          />
        </div>
        <div class="col-md-6">
          <label for="inputAuthorName" class="form-label">
            Author Name
          </label>
          <input
            type="text"
            class="form-control"
            name="authorName"
            id="inputAuthorName"
            placeholder="enter author name"
          />
        </div>
        <div class="col-md-6">
          <label for="" class="form-label">
            ImageUrl
          </label>
          <input
            type="text"
            name="imgUrl"
            placeholder="enter your image url"
            class="form-control"
            id=""
          />
        </div>
        <div class="col-md-6">
          <label for="" class="form-label">
            Category Name
          </label>
          <input
            type="text"
            name="categoryName"
            placeholder="Category name"
            class="form-control"
            id=""
          />
        </div>
        <div class="col-md-6">
          <label for="" class="form-label">
            Text Description
          </label>
          <input
            type="text"
            name="metaTextDescription"
            placeholder="text description"
            class="form-control"
            id=""
          />
        </div>
        <div class="col-md-6">
          <label for="" class="form-label">
            Book Pdf Url
          </label>
          <input
            type="text"
            name="bookPdfUrl"
            placeholder="enter your book pdf url"
            class="form-control"
            id=""
          />
        </div>

        <div class="col-12">
          <div class="form-check">
            <input class="form-check-input" type="checkbox" id="gridCheck" />
            <label class="form-check-label" for="gridCheck">
              Check me out
            </label>
          </div>
        </div>
        <div class="col-12">
          <button type="submit" class="btn btn-primary">
            Sign in
          </button>
        </div>
      </form>
    </div>
  );
};

export default BookUploadForm;
