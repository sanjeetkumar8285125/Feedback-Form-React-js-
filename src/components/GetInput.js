import React, { useState } from "react";
export default function GetInput({ setlist }) {
  let [first, setfirst] = useState("");
  let [last, setlast] = useState("");
  let [email, setemail] = useState("");
  let [feed, setfeed] = useState("");
  return (
    // <section className="GetInput">
    //   <div className="container">
    //     <ul>
    //       <li>
    //         <label>FIRSTNAME *</label>
    //         <input
    //           type="text"
    //           value={first}
    //           onChange={(e) => setfirst(e.target.value)}
    //         />
    //       </li>
    //       <li>
    //         <label>MIDDLENAME</label>
    //         <input
    //           type="text"
    //           value={middle}
    //           onChange={(e) => setmiddle(e.target.value)}
    //         />
    //       </li>
    //       <li>
    //         <label>LASTNAME *</label>
    //         <input
    //           type="text"
    //           value={last}
    //           onChange={(e) => setlast(e.target.value)}
    //         />
    //       </li>
    //       <li>
    //         <label>FEEDBACK *</label>
    //         <textarea value={feed} onChange={(e) => setfeed(e.target.value)} />
    //       </li>
    //       <li>
    //         <button onClick={CreateFeed}>SUBMIT</button>
    //       </li>
    //     </ul>
    //   </div>
    // </section>
    
    <div className="login">

        <div className="container">
            <div className="row">
                <div className="col-sm loginpage">
                    <h1 className="text-center loginh1">
                        Feedback Form
                    </h1>
                    <div class="row g-3">
                        <div className="col-md-6">
                            <label for="first" className="form-label ">First Name</label>
                            <input type="text"   value={first}
                                                onChange={(e) => setfirst(e.target.value)} 
                          className="form-control" />
                        </div>
                        <div className="col-md-6">
                            <label for="last" className="form-label">Last Name</label>
                            <input type="text"  value={last}
               onChange={(e) => setlast(e.target.value)} className="form-control" id="Last" />
                        </div>
                  
                        <div className="mb-3">
                            <label for="email" className="form-label">Email Address</label>
                            <input type="email"  value={email}
             onChange={(e) => setemail(e.target.value)} className="form-control" id="exampleInputEmail1"
                                  />

                        </div>
                        <div className="mb-3">
                            <label for="feedback" className="form-label">Feedback</label>
                            <textarea className="form-control" value={feed} onChange={(e) => setfeed(e.target.value)} />
                        </div>
                  
                        
                        
                        <div className="col-12">
                            <button onClick={CreateFeed} className="btn btn-primary loginsub">Submit</button>
                        </div>
                        </div>
                </div>
            </div>
        </div>

    </div>
  );
  //creating new object and adding it to list
  function CreateFeed() {
    if (first === "" || last === "" || email === ""|| feed === "") {
      alert("please fill all fields");
    } else {
      setlist((previtem) => {
        return [
          ...previtem,
          {
            // username: first + " " + " " + last+" "+email,
            username: first + " " + " " + last,
            useremail:email,
            userfeedback: feed
          }
        ];
      });
      // clearing inputs and hooks after submit
      setfirst("");
      setemail("");
      setlast("");
      setfeed("");
    }
  }
}
