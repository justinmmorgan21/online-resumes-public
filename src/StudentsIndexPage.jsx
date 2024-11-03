import { useLoaderData } from "react-router-dom";
export function StudentsIndexPage() {

  const students = useLoaderData();

  console.log(students);

  return (
    <main>
      <div className="profile-container">
      <h1 className="all-students">All Students</h1>
      <p>{students[0].first_name}</p>
      </div>
    </main>
  )
}