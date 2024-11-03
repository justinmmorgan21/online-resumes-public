import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import axios from 'axios';
import { Header } from "./Header";
// import { HomePage } from "./HomePage";
import { StudentsIndexPage } from "./StudentsIndexPage";
import { StudentsShowPage } from "./StudentsShowPage";
import { Footer } from "./Footer";
import { TwitterEmbed } from "./TwitterEmbed";


const router = createBrowserRouter([
  {
    element: (
      <div>
        <Header />
        <Outlet />
        <Footer />
      </div>
    ),
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/students",
        element: <StudentsIndexPage />,
        loader: ()=> 
          [
            {
              //dummy data goes here
              first_name: "bob",
              last_name: "ross",
              contact_email: "bob@ross.com",
              phone_number: "555-555-5555"
            }
          ]
          // axios.get("http://localhost:3000/students.json").then(response => response.data)
      },
      {
        path: "/students/:id",
        element: <StudentsShowPage />,
        loader: ()=> 
          [
            {
              //dummy data goes here
              first_name: "bob",
              last_name: "ross",
              contact_email: "bob@ross.com",
              phone_number: "555-555-5555",
              short_bio: "great at pytorch!",
              linkedin_url: "http://linkedin/bobross.com",
              twitter_handle: "http://twitter/bobross.com",
              website_url: "http://reallycoolprojectsite.com",
              resume_url: "http://resume.pdf",
              github_url: "http://github/bobross.com",
              profile_image: "http://myimage.jpg",
              experience: [
                  {
                  start_date: "2020-01-01",
                  end_date: "2022-01-01",
                  job_title: "data entry specialist",
                  company_name: "walmart",
                  details: "entered so much data"
                },
                {
                  start_date: "2020-01-01",
                  end_date: "2022-01-01",
                  job_title: "data entry specialist",
                  company_name: "walmart",
                  details: "entered so much data"
                }
              ],
              skill: [
                {
                  skill_name: "windows"
                },
                {
                  skill_name: "outlook"
                },
                {
                  skill_name: "word"
                }
              ],
              education: [
                {
                  start_date: "2010-01-01",
                  end_date: "2014-01-01",
                  degree: "underwater basket weaving",
                  university: "hard knocks",
                  details: "studdeed sooper hard"
                }
              ],
              capstone: {
                name: "vacation planner",
                description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus earum, quidem vero assumenda rem maiores a vel iste. Illum quam quibusdam ipsum fugit harum animi odit excepturi itaque ipsa amet?",
                capstone_url: "http://vacationplanner.com",
                capstone_image: "capstone_image.jpg"
              }
            }
          ]
          // axios.get(`http://localhost:3000/students/${id}.json`).then(response => response.data)
      }
    ]
  }
])

function App() {
  return (
    <div>
      <Header />
      <StudentsPage />
      <TwitterEmbed />
      <Footer />
      <RouterProvider router={router} />
    </div>
  )
}

export default App;