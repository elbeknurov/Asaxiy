import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./404pagination.css";
const Page = () => {
  return (
    <div>
      <section class="page_404">
        <div class="container">
          <div class="row">
            <div class="col-sm-12 align ">
              <div class="col-sm-10 col-sm-offset-1  text-center">
                <div class="four_zero_four_bg">
                  <h1 class="text-center ">404</h1>
                </div>

                <div class="contant_box_404">
                  <h3 class="page__item">
                    Look!!! <br /> This page was not found &#10005;
                  </h3>

                  <NavLink to="/" className="link_404">
                    Go Back
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Page;
