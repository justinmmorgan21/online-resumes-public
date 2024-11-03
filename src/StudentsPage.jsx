import { useLoaderData } from "react-router-dom"
export function StudentsPage() {

  const students = useLoaderData();

  console.log(students);

  return (
    <main>
      <h1>All Students</h1>
      <p>{students[0].first_name}</p>
    </main>
  )
}