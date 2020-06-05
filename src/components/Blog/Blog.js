import React from "react";
import { Button } from "reactstrap";

const Blog = () => {
  return (
    <React.Fragment>
      <div>
        <h1>Our Blog</h1>
        <div>
          <p>Sharing our concepts, codes and experiences.</p>
          <a href="https://medium.com/data-science-community-srm">
            <Button>Publication Link</Button>
          </a>
        </div>
      </div>
      <div className="col-10 mx-auto">
        <div id="medium-widget"></div>
      </div>
    </React.Fragment>
  );
};

export default Blog;