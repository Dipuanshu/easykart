/** @format */
import React, { useState } from "react";
import { Link } from "react-router-dom";

function From1() {
  const [selectedId, setSelectedId] = useState();

  const items = [
    {
      id: 1,
      src: "https://media.istockphoto.com/id/864954528/photo/3d-man-working-on-laptop.jpg?s=1024x1024&w=is&k=20&c=fG9lYOP3mM5TEsOdku9RnPE2utzHyWsiVvyaZPiJWjQ=",
      title: "Student or soon to be enrolled",
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Profesional pursing a carrer",
    },
    {
      id: 3,
      src: "https://media.istockphoto.com/id/1426101069/photo/two-generation-family-spending-leisure-time-at-home.jpg?s=1024x1024&w=is&k=20&c=doELkfTkzZDIE0NJgai9m6eugonDm1r4Sw0DnkADbKk=",
      title: "Parant as a school age life",
    },

    {
      id: 4,
      src: "https://plus.unsplash.com/premium_photo-1661758837221-06f20046f57b?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Lifelong Learner",
    },
    {
      id: 5,
      src: "https://media.istockphoto.com/id/1330255708/photo/portrait-of-smiling-teacher-in-school-corridor-with-books-in-hand.jpg?s=1024x1024&w=is&k=20&c=OnRShZVO9nnsF8OlrijZiLh-WopN0e6lU9PdcDoA9mw=",
      title: "Teacher",
    },

    {
      id: 6,
      src: "https://media.istockphoto.com/id/1842446086/photo/back-shot-of-an-indian-boy-wearing-camouflaged-brown-jacket-walking-in-the-forest-park.jpg?s=1024x1024&w=is&k=20&c=2wJa36iDXXtyOZMqdUu2DFXnqZmHeDj1XH8fq0NRVOc=",
      title: "Other",
    },
  ];
  return (
    <div id="1">
      <h1 className=" md:mt-12 mt-20 flex items-center justify-center md:text-4xl font-bold text-2xl">
        Which describes you best?
      </h1>
      <h1 className="md:mt-5 flex items-center justify-center md:text-lg text-gray-600 mt-0">
        This will help us personalize your experience.
      </h1>
      <div className="mt-8 px-6">
        {items.map((item) => (
          <div className="mt-4 flex justify-center px-6" key={item.id}>
            <button
              className="md:w-3/5"
              onClick={() => {
                setSelectedId(item.id);
              }}
            >
              <div className="justify-center items-center flex">
                <div
                  className={`hover:border-orange-500 flex md:w-2/3 w-96 items-center rounded-md border  border-gray-300 ${
                    selectedId === item.id && "border-orange-500"
                  }`}
                >
                  <img className="w-20" src={item.src} />
                  <div className="ml-4 md:text-lg text-gray-700">
                    {item.title}
                  </div>
                </div>
              </div>
            </button>
          </div>
        ))}
      </div>
      <div className="md:mt-4 mt-16 flex items-center justify-center">
        <Link to={"/nextPage/"}>
          <button
            className="h-8 w-32 rounded-md border border-gray-100 bg-blue-500 font-bold text-white disabled:cursor-not-allowed disabled:bg-gray-400" //disable mai colour gray dikahyega aur jaise hi disable hatega waise hi blue dikha dega.//
            disabled={!selectedId}
          >
            Countionue
          </button>
        </Link>
      </div>
    </div>
  );
}
export default From1;
