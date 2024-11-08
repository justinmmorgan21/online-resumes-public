import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import axios from 'axios';
import { Header } from "./Header";
// import { HomePage } from "./HomePage";
import { StudentsIndexPage } from "./StudentsIndexPage";
import { StudentsShowPage } from "./StudentsShowPage";
import { Footer } from "./Footer";
import {TwitterEmbed} from "./TwitterEmbed";
import { SignupPage } from "./SignupPage";
import { LoginPage } from "./LoginPage";
import { LogoutLink } from "./LogoutLink";


const router = createBrowserRouter([
  {
    element: (
      <div>
        <Header />
        <LogoutLink />
        <Outlet />
        {/* <TwitterEmbed /> */}
        <Footer />
      </div>
    ),
    children: [
      // {
      //   path: "/",
      //   element: <HomePage />,
      // },
      {
        path: "/",
        element: <StudentsIndexPage />,
        loader: ()=> 
          // [
          //   {
          //     //dummy data goes here
          //     id:1,
          //     first_name: "bob",
          //     last_name: "ross",
          //     contact_email: "bob@ross.com",
          //     phone_number: "555-555-5555"
          //   },
          //   {
          //     //dummy data goes here
          //     id:2,
          //     first_name: "chris",
          //     last_name: "ross",
          //     contact_email: "bob@ross.com",
          //     phone_number: "555-555-5555"
          //   },
          //   {
          //     //dummy data goes here
          //     id:3,
          //     first_name: "debbie",
          //     last_name: "ross",
          //     contact_email: "bob@ross.com",
          //     phone_number: "555-555-5555"
          //   },
          //   {
          //     //dummy data goes here
          //     id:4,
          //     first_name: "julia",
          //     last_name: "ross",
          //     contact_email: "bob@ross.com",
          //     phone_number: "555-555-5555"
          //   }
          // ]
          axios.get("http://localhost:3000/students.json").then(response => response.data)
      },
      {
        path: "signup",
        element: <SignupPage />
      },
      {
        path: "login",
        element: <LoginPage />
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
              experiences: [
                {
                  id: 1,
                  start_date: "2020-01-01",
                  end_date: "2022-01-01",
                  job_title: "data entry specialist",
                  company_name: "walmart",
                  details: "entered so much data"
                },
                {
                  id: 2,
                  start_date: "2020-01-01",
                  end_date: "2022-01-01",
                  job_title: "salesperson",
                  company_name: "foot locker",
                  details: "sold shoes"
                }
              ],
              skills: [
                {
                  id: 1,
                  skill_name: "windows"
                },
                {
                  id: 2,
                  skill_name: "outlook"
                },
                {
                  id: 3,
                  skill_name: "word"
                }
              ],
              educations: [
                {
                  id: 1,
                  start_date: "2010-01-01",
                  end_date: "2014-01-01",
                  degree: "underwater basket weaving",
                  university: "hard knocks",
                  details: "studdeed sooper hard"
                },
                {
                  id: 2,
                  start_date: "2010-01-01",
                  end_date: "2014-01-01",
                  degree: "complex origami",
                  university: "sesame street",
                  details: "my fingers hurt bad"
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
  return (<RouterProvider router={router} />
  )
}

export default App;