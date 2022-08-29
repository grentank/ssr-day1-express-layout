import React from 'react';

export default function Form() {
  return (
    <form method="POST" action="/message">
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">
          Name
          <input name="username" type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
          <div id="emailHelp" className="form-text">Please be respectful</div>
        </label>
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputPassword1" className="form-label">
          Message
          <input name="message" type="text" className="form-control" id="exampleInputPassword1" />
        </label>
      </div>
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  );
}
