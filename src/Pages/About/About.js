import React from "react";

import about from "../../image/pic-1.png";

const About = () => {
  return (
    <div>
      <div class="container">
        <div class="row my-3">
          <div class="col-sm-12 col-md-6 col-lg-6">
            <h1 className="text-primary">About Us</h1>
            <p>
              Is cars a good website? Overall, Cars.com is a good resource to
              check out whether you're shopping for or selling a car. Even if
              you're just gathering information, the website offers good
              resources under the “Research” tab including the “Value my Car”
              feature and the car finance calculators.
            </p>
            <h6>What makes a good automotive website?</h6>
            <p>
              A great website shows the world who you are, makes people remember
              you, and helps potential customers understand if they found what
              they were looking for. Websites communicate all of that through
              color, shape and other design elements.
            </p>
            <button type="button" class="btn btn-danger">
              Read More
            </button>
          </div>
          <div class="col-sm-12 col-md-6 col-lg-6">
            <img src={about} alt="" width="100%" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
