import React, { useState } from "react";
import { Icon } from "@iconify/react";

const App = () => {
  const tags = [
    "New York",
    "London",
    "Hats",
    "Norway",
    "Sweaters",
    "Ideas",
    "Deals",
    "Accessories",
    "News",
    "Clothing",
    "Shopping",
    "Jeans",
    "Trends",
  ];
  const [email, setEmail] = useState("");
  return (
    <>
      <header className="bg-black xs:flex justify-between hidden ">
        <nav className="flex cursor-pointer">
          <div className="text-white hover:bg-gray-300 hover:text-black px-4 py-3">
            <Icon icon="ri:facebook-box-fill" />
          </div>
          <div className="text-white hover:bg-gray-300 hover:text-black px-4 py-3">
            <Icon icon="ph:instagram-logo" width="16" />
          </div>
          <div className="text-white hover:bg-gray-300 hover:text-black px-4 py-3">
            <Icon icon="fa-brands:snapchat-square" />
          </div>
          <div className="text-white hover:bg-gray-300 hover:text-black px-4 py-3">
            <Icon icon="fa-brands:flickr" />
          </div>
          <div className="text-white hover:bg-gray-300 hover:text-black px-4 py-3">
            <Icon icon="mdi:twitter" />
          </div>
          <div className="text-white hover:bg-gray-300 hover:text-black px-4 py-3">
            <Icon icon="akar-icons:linkedin-fill" />
          </div>
        </nav>
        <div className="text-white hover:bg-gray-300 hover:text-black px-4 py-3 cursor-pointer">
          <Icon icon="ri:search-line" />
        </div>
      </header>
      <main className="bg-gray-100">
        <div className=" max-w-[1600px] mx-auto bg-white">
          <section className="py-[70px] text-center">
            <h1 className="text-5xl font-semibold mb-5 tracking-tight">
              JANE BLOGLIFE
            </h1>
            <h3 className="text-lg">
              Welcome to the blog of{" "}
              <span className="bg-black text-white px-2">Jane's world</span>
            </h3>
          </section>
          <section className="relative">
            <img
              src="https://www.w3schools.com/w3images/jane.jpg"
              alt="blog"
              className="w-full"
            />
            <div className="absolute top-[50%] left-0 -translate-y-[50%] text-white px-6">
              <h3 className="text-2xl xs:text-3xlxl lg:text-4xl tracking-widest mb-4">
                Jane's
              </h3>
              <h2 className="text-3xl xs:text-5xl lg:text-[64px] tracking-wider mb-2 font-semibold">
                FASHION BLOG
              </h2>
              <button className="uppercase text-black bg-gray-400 hover:bg-gray-300 px-4 xs:px-6 lg:px-8 py-1 xs:py-2 lg:py-3 text-xs xs:text-sm lg:text-base">
                subscribe
              </button>
            </div>
          </section>
          <section className="bg-gray-100 py-6 px-8 border border-gray-400 grid grid-cols-12 gap-8">
            <section className="col-span-12 lg:col-span-8 grid grid-flow-row gap-y-8">
              <div className="p-6 bg-white">
                <div className="text-center">
                  <h2 className="text-2xl mb-3">TITLE HEADING</h2>
                  <h3 className="text-lg">
                    Title description,{" "}
                    <span className="text-gray-500">May 2, 2016</span>
                  </h3>
                </div>
                <img
                  src="https://www.w3schools.com/w3images/girl_hat.jpg"
                  alt="face"
                  className="w-full my-6"
                />
                <div className="text-justify">
                  <p className="font-sans mb-3">
                    <span className="font-semibold">More Hats!</span> I am crazy
                    about hats these days. Some text about this blog entry.
                    Fashion fashion and mauris neque quam, fermentum ut nisl
                    vitae, convallis maximus nisl. Sed mattis nunc id lorem
                    euismod placerat. Vivamus porttitor magna enim, ac accumsan
                    tortor cursus at. Phasellus sed ultricies mi non congue
                    ullam corper. Praesent tincidunt sedtellus ut rutrum. Sed
                    vitae justo condimentum, porta lectus vitae, ultricies
                    congue gravida diam non fringilla.
                  </p>
                  <p className="font-sans">
                    Sunt in culpa qui officia deserunt mollit anim id est
                    laborum consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco.
                  </p>
                </div>
                <div className="flex justify-between items-center mt-8">
                  <button className="flex items-center bg-white hover:bg-gray-300 border border-gray-400 py-2 px-4">
                    <span className="mr-1">
                      <Icon icon="fontisto:like" />
                    </span>
                    <span>Like</span>
                  </button>
                  <button className="flex items-center bg-black text-white hover:bg-gray-300 hover:text-black py-2 px-4">
                    <span className="mr-2 font-sans font-semibold">
                      Replies
                    </span>
                    <span className="px-2 bg-white text-black text-sm">1</span>
                  </button>
                </div>
                <div className="border-t border-gray-200 pt-4 flex mt-16">
                  <div className="w-20 mr-20">
                    <img
                      src="https://www.w3schools.com/w3images/avatar_smoke.jpg"
                      alt="author"
                      className="w-full h-full"
                    />
                  </div>
                  <div className="flex flex-col justify-center">
                    <div className="flex mb-2 items-baseline">
                      <h2 className="text-xl mr-2">George</h2>
                      <h3 className="text-gray-500">May 3, 2015, 6:32 PM</h3>
                    </div>
                    <p>Great blog post! Following</p>
                  </div>
                </div>
              </div>
              <div className="p-6 bg-white">
                <div className="text-center">
                  <h2 className="text-2xl mb-3">TITLE HEADING</h2>
                  <h3 className="text-lg">
                    Title description,{" "}
                    <span className="text-gray-500">April 23, 2016</span>
                  </h3>
                </div>
                <img
                  src="https://www.w3schools.com/w3images/man_hat.jpg"
                  alt="face"
                  className="w-full my-6"
                />
                <div className="text-justify">
                  <p className="font-sans mb-3">
                    <span className="font-semibold">Hats!</span> The trend this
                    summer is hats for men!
                  </p>
                  <p className="font-sans">
                    Some text about this blog entry. Fashion fashion and mauris
                    neque quam, fermentum ut nisl vitae, convallis maximus nisl.
                    Sed mattis nunc id lorem euismod placerat. Vivamus porttitor
                    magna enim, ac accumsan tortor cursus at. Phasellus sed
                    ultricies mi non congue ullam corper. Praesent tincidunt
                    sedtellus ut rutrum. Sed vitae justo condimentum, porta
                    lectus vitae, ultricies congue gravida diam non fringilla.
                  </p>
                </div>
                <div className="flex justify-between items-center mt-8">
                  <button className="flex items-center bg-white hover:bg-gray-300 border border-gray-400 py-2 px-4">
                    <span className="mr-1">
                      <Icon icon="fontisto:like" />
                    </span>
                    <span>Like</span>
                  </button>
                  <button className="flex items-center bg-black text-white hover:bg-gray-300 hover:text-black py-2 px-4">
                    <span className="mr-2 font-sans font-semibold">
                      Replies
                    </span>
                    <span className="px-2 bg-white text-black text-sm">2</span>
                  </button>
                </div>
              </div>
              <div className="p-6 bg-white">
                <div className="text-center">
                  <h2 className="text-2xl mb-3">TITLE HEADING</h2>
                  <h3 className="text-lg">
                    Title description,{" "}
                    <span className="text-gray-500">April 7, 2016</span>
                  </h3>
                </div>
                <img
                  src="https://www.w3schools.com/w3images/runway.jpg"
                  alt="face"
                  className="w-full my-6"
                />
                <div className="text-justify">
                  <p className="font-sans mb-3">
                    <span className="font-semibold">Dont miss!</span> The runway
                    in New York City this weekend is gonna be legendary!
                  </p>
                  <p className="font-sans">
                    Some text about this blog entry. Fashion fashion and mauris
                    neque quam, fermentum ut nisl vitae, convallis maximus nisl.
                    Sed mattis nunc id lorem euismod placerat. Vivamus porttitor
                    magna enim, ac accumsan tortor cursus at. Phasellus sed
                    ultricies mi non congue ullam corper. Praesent tincidunt
                    sedtellus ut rutrum. Sed vitae justo condimentum, porta
                    lectus vitae, ultricies congue gravida diam non fringilla.
                  </p>
                </div>
                <div className="flex justify-between items-center mt-8">
                  <button className="flex items-center bg-white hover:bg-gray-300 border border-gray-400 py-2 px-4">
                    <span className="mr-1">
                      <Icon icon="fontisto:like" />
                    </span>
                    <span>Like</span>
                  </button>
                  <button className="flex items-center bg-black text-white hover:bg-gray-300 hover:text-black py-2 px-4">
                    <span className="mr-2 font-sans font-semibold">
                      Replies
                    </span>
                    <span className="px-2 bg-white text-black text-sm">3</span>
                  </button>
                </div>
              </div>
            </section>
            <aside className="col-span-12 lg:col-span-4 flex flex-col gap-y-8">
              <div className="bg-black text-white">
                <img
                  src="https://www.w3schools.com/w3images/avatar_girl2.jpg"
                  alt="eyes"
                  className="w-full"
                />
                <div className="p-4">
                  <h2 className="mb-2 text-xl">My Name</h2>
                  <p className="font-sans">
                    Just me, myself and I, exploring the universe of uknownment.
                    I have a heart of love and a interest of lorem ipsum and
                    mauris neque quam blog. I want to share my world with you.
                  </p>
                </div>
              </div>
              <div>
                <h2 className="py-5 px-4 bg-black text-white text-xl">
                  Popular Posts
                </h2>
                <div className="bg-white">
                  <div className="px-4 py-3 border-t border-gray-300 flex hover:bg-gray-300 cursor-pointer">
                    <div className="w-12 mr-4">
                      <img
                        src="https://www.w3schools.com/w3images/avatar_smoke.jpg"
                        alt="face"
                        className="w-full h-full"
                      />
                    </div>
                    <div className="flex flex-col justify-center">
                      <h3 className="font-sans text-xl">Denim</h3>
                      <p className="font-sans">Sed mattis nunc</p>
                    </div>
                  </div>
                  <div className="px-4 py-3 border-t border-gray-300 flex hover:bg-gray-300 cursor-pointer">
                    <div className="w-12 mr-4">
                      <img
                        src="https://www.w3schools.com/w3images/bandmember.jpg"
                        alt="face"
                        className="w-full h-full"
                      />
                    </div>
                    <div className="flex flex-col justify-center">
                      <h3 className="font-sans text-xl">Sweaters</h3>
                      <p className="font-sans">Praes tinci sed</p>
                    </div>
                  </div>
                  <div className="px-4 py-3 border-t border-gray-300 flex hover:bg-gray-300 cursor-pointer">
                    <div className="w-12 mr-4">
                      <img
                        src="https://www.w3schools.com/w3images/workshop.jpg"
                        alt="face"
                        className="w-full h-full"
                      />
                    </div>
                    <div className="flex flex-col justify-center">
                      <h3 className="font-sans text-xl">Workshop</h3>
                      <p className="font-sans">Ultricies congue</p>
                    </div>
                  </div>
                  <div className="px-4 py-3 border-t border-gray-300 flex hover:bg-gray-300 cursor-pointer">
                    <div className="w-12 mr-4">
                      <img
                        src="https://www.w3schools.com/w3images/avatar_smoke.jpg"
                        alt="face"
                        className="w-full h-full"
                      />
                    </div>
                    <div className="flex flex-col justify-center">
                      <h3 className="font-sans text-xl">Trends</h3>
                      <p className="font-sans">Lorem ipsum dipsum</p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h2 className="py-5 px-4 bg-black text-white text-xl">
                  Advertise
                </h2>
                <div className="px-4 py-3 bg-white">
                  <div className="h-56 flex justify-center items-center bg-gray-200 font-sans">
                    Your AD Here
                  </div>
                </div>
              </div>
              <div>
                <h2 className="py-5 px-4 bg-black text-white text-xl">Tags</h2>
                <div className="px-4 py-3 bg-white">
                  <div className="flex items-center font-sans flex-wrap">
                    <span className="px-2 bg-black text-white mr-1 mb-4 font-sans">
                      Fashion
                    </span>
                    {tags.map((tag, index) => {
                      return (
                        <span
                          className="px-2 bg-gray-100 mr-1 mb-4"
                          key={index}
                        >
                          {tag}
                        </span>
                      );
                    })}
                  </div>
                </div>
              </div>
              <div>
                <h2 className="py-5 px-4 bg-black text-white text-xl">
                  Inspiration
                </h2>
                <div className="px-4 py-3 bg-white grid grid-cols-2 gap-4">
                  <img
                    src="https://www.w3schools.com/w3images/jeans.jpg"
                    alt="gallery"
                  />
                  <img
                    src="https://www.w3schools.com/w3images/avatar_hat.jpg"
                    alt="gallery"
                  />
                  <img
                    src="https://www.w3schools.com/w3images/team1.jpg"
                    alt="gallery"
                  />
                  <img
                    src="https://www.w3schools.com/w3images/team4.jpg"
                    alt="gallery"
                  />
                </div>
              </div>
              <div>
                <h2 className="py-5 px-4 bg-black text-white text-xl">
                  Follow Me
                </h2>
                <div className="px-4 py-3 bg-white flex gap-2">
                  <span className="w-6 hover:opacity-50 cursor-pointer">
                    <Icon
                      icon="ri:facebook-box-fill"
                      className="w-full h-full"
                    />
                  </span>
                  <span className="w-6 hover:opacity-50 cursor-pointer">
                    <Icon icon="ph:instagram-logo" className="w-full h-full" />
                  </span>
                  <span className="w-6 hover:opacity-50 cursor-pointer">
                    <Icon
                      icon="fa-brands:snapchat-square"
                      className="w-full h-full"
                    />
                  </span>
                  <span className="w-6 hover:opacity-50 cursor-pointer">
                    <Icon icon="fa-brands:flickr" className="w-full h-full" />
                  </span>
                  <span className="w-6 hover:opacity-50 cursor-pointer">
                    <Icon icon="mdi:twitter" className="w-full h-full" />
                  </span>
                  <span className="w-6 hover:opacity-50 cursor-pointer">
                    <Icon
                      icon="akar-icons:linkedin-fill"
                      className="w-full h-full"
                    />
                  </span>
                </div>
              </div>
              <div>
                <h2 className="py-5 px-4 bg-black text-white text-xl">
                  Subscribe
                </h2>
                <div className="px-4 py-3 bg-white flex flex-col gap-3">
                  <p className="font-sans">
                    Enter your e-mail below and get notified on the latest blog
                    posts.
                  </p>
                  <input
                    type="email"
                    placeholder="Enter e-mail"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="placeholder:font-sans border border-gray-400 p-2"
                  />
                  <button className="font-sans text-center bg-red-500 py-2 text-white hover:bg-gray-300 hover:text-black">
                    Subscribe
                  </button>
                </div>
              </div>
            </aside>
          </section>
        </div>
      </main>
      <footer className="p-8 text-white flex flex-col justify-between bg-gray-800">
        <button
          className="flex bg-black w-max px-6 py-3 items-center mb-8"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <span className="mr-2 w-5">
            <Icon icon="typcn:arrow-up-thick" className="w-full h-full" />
          </span>
          <span className="font-sans">To the top</span>
        </button>
        <p className="font-sans">
          Powered by{" "}
          <a
            href="https://www.w3schools.com/w3css/default.asp"
            target="_blank"
            className="underline font-sans"
          >
            w3.css
          </a>
        </p>
      </footer>
    </>
  );
};

export default App;
