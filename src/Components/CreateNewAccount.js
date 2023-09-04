import React from "react";
// import "./App.css";
function form(){
    return(
        <div classNameName="container">
            <form>
                <div classNameName="ui-initial">
                   <h1>facebook</h1>
                </div>
                <div>
                  <h5>Facebook helps you connect and share with the people in your life</h5>
                </div>
                <div className="col-md-6">
                <label for="validationDefault03" className="form-label">City</label>
                <input type="text" className="form-control" id="validationDefault03" required/>
                </div>

                <div className="d-grid gap-2 col-6 mx-auto">
                    <button className="btn btn-primary" type="button">Log in</button>
                </div>

                <div>
                    <a href="/uiform" className="stretched-link">forgotten password?</a>
                </div>

                <hr></hr>

                <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                    <button className="btn btn-primary me-md-2" type="button">Button</button>
                    <button className="btn btn-primary" type="button">Button</button>
                </div>
            </form>
                
                <div>
                 <p><span>Create a Page</span>for a celebrity,brand or business.</p> 
                </div>
        </div>
    )
}
export default form;