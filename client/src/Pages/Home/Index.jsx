import React, { Component, useEffect, useState } from "react";
import {Helmet} from "react-helmet";
import axios from "axios";
import CheckForm from './Components/Index'
import Footer from '../../Components/Footer/Index'
import toast, { Toaster } from "react-hot-toast";
import "./Index.scss";

import { Link } from "react-router-dom";
function Index({ wishList, setWishList }) {
  function addToWishList(obj) {
    if (!wishList.find((element) => element._id === obj._id)) {
      setWishList([...wishList, obj]);
      toast.success("Successfully added!");
    } else {
      toast.error("Already added!");
    }
  }
  let [toggle, setToggle] = useState(true);
  const [elements, setElements] = useState([]);
  function getData() {
    axios.get("http://localhost:8080/api/elements").then((res) => {
      setElements(res.data);
    });
  }
  useEffect(() => {
    getData();
  }, []);



  function searchData(e) {
    axios.get("http://localhost:8080/api/elements").then((res) => {
      let search = res.data.filter((element) =>
        element.name
          .toLocaleLowerCase()
          .includes(e.target.value.toLocaleLowerCase())
      );
      setElements(search);
    });
  }


  return (
    <div className="home">
    <Helmet>
    <meta charSet="utf-8" />
    <title>Home</title>
    <link rel="canonical" href="http://mysite.com/example" />
</Helmet>
<section>
                <div className="section1"><img src='https://preview.colorlib.com/theme/thelogistico/assets/img/hero/h1_hero1.jpg'/><div className="section1__container">
                    <p>WELCOME TO LOGISTICO</p>
                    <h1>A TRULY GLOBAL SERVICE PROVIDER</h1>
                    <p>We make your cargo transport simple</p>
                    <button>EXPLORE US  <span className='chevron'>›</span></button>
                    </div>
                  
                    </div>
                    <CheckForm className='form'/> 
        </section>
    <section>
        <div className='section2'>
            <div className='section2__cards'>
                <img src="https://preview.colorlib.com/theme/thelogistico/assets/img/icon/services1.svg"/>
                <h1>Commercial Cleaning</h1>
                <p style={{color:'#4C526E',marginTop:'20px'}}>Ullamcorper scelerisque congue purus aenean blandit. Interdum euismod sodales adipiscing placerat quam neque libero.</p>
                 <span className='button'>›</span>
            </div>
            <div className='section2__cards'>
                <img src="https://preview.colorlib.com/theme/thelogistico/assets/img/icon/services2.svg"/>
                <h1>Commercial Cleaning</h1>
                <p style={{color:'#4C526E',marginTop:'20px'}}>Ullamcorper scelerisque congue purus aenean blandit. Interdum euismod sodales adipiscing placerat quam neque libero.</p>
                 <span className='button'>›</span>
            </div>
            <div className='section2__cards'>
                <img src="https://preview.colorlib.com/theme/thelogistico/assets/img/icon/services3.svg"/>
                <h1>Commercial Cleaning</h1>
                <p style={{color:'#4C526E',marginTop:'20px'}}>Ullamcorper scelerisque congue purus aenean blandit. Interdum euismod sodales adipiscing placerat quam neque libero.</p>
                 <span className='button'>›</span>
            </div>
            <div className='section2__cards'>
                <img src="https://preview.colorlib.com/theme/thelogistico/assets/img/icon/services4.svg"/>
                <h1>Commercial Cleaning</h1>
                <p style={{color:'#4C526E',marginTop:'20px'}}>Ullamcorper scelerisque congue purus aenean blandit. Interdum euismod sodales adipiscing placerat quam neque libero.</p>
                 <span className='button'>›</span>
            </div>
        </div>
    </section>
    <section>
        <div className='section3'>
           <div className="left">
            <p>Our Mission</p>
            <h1>"We are able to handle any size load, to-and-from anywhere and within any service time frame has made you our best and bring to the table win-win..</h1>
            <button>Learn More <span>&#8250;</span></button>
           </div>
           <div className="right"><img src='https://preview.colorlib.com/theme/thelogistico/assets/img/gallery/visit2.jpg'/></div>
        </div>
    </section>
    <section>
        <div className='section4'>
            <div className='left'>
                <img src='https://preview.colorlib.com/theme/thelogistico/assets/img/gallery/visit3.jpg'/>
            </div>
            <div className='right'>
                <p>We give you complete control of your shipments.</p>
                <div className='card'>
                    <span>01</span>
                    <h1>Logistic Solution</h1>
                    <p>Praesent eu rhoncus nibh. Quisque tincidunt, nisi in enetis
commodo, neque quam pharetra dolor, nec lacinia.</p>
                </div>
                <div className='card'>
                    <span>01</span>
                    <h1>Logistic Solution</h1>
                    <p>Praesent eu rhoncus nibh. Quisque tincidunt, nisi in enetis
commodo, neque quam pharetra dolor, nec lacinia.</p>
                </div>
            </div>
        </div>
    </section>
      <section className="Main">
        <Toaster position="top-center" reverseOrder={false} />
        <div className="Main__container">
          <div className="line"></div>
          
          <h5 className='newstitle'>Latest News</h5>
          <input
            style={{
              position: "absolute",
              top: "10px",
              left: "21%",
              padding: "15px",
              borderRadius: "6px",
            }}
            placeholder="Search by name"
            onChange={(e) => {
              searchData(e);
            }}
            type="text"
          />
          <div className="Main__container__cards">
            {elements.map((element) => {
              return (
                <div className="Main__container__cards__card">
                  <div className="Main__container__cards__card__img">
                    <img src={`${element.img}`} alt="" />
                  </div>
                  <p>{element.date}</p>
                  <h6>{element.name}</h6>
                
                
                  <div className="cardBtns">
                    <Link to={`/details/${element._id}`}>
                      <button>Details</button>
                    </Link>
                    <button
                      style={{ marginLeft: "30px",marginRight:'30px', backgroundColor: "red" }}
                      onClick={() => {
                        if (
                          window.confirm(
                            "Are you sure you want to delete this course?"
                          )
                        ) {
                          axios
                            .delete(
                              `http://localhost:8080/api/elements/${element._id}`
                            )
                            .then(() => getData());
                        }
                      }}
                    >
                      Delete
                    </button>
                    <button
                      onClick={() => {
                        addToWishList(element);
                        console.log(wishList);
                      }}
                    >
                      Add To WishList
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
       
    <Footer/>
    </div>
  );
}

export default Index;
