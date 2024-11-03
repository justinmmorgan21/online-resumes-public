import { useLoaderData } from "react-router-dom"
export function StudentsShowPage() {

  const student = useLoaderData()[0];

  console.log(student);

  return (
    <main>
      <h1>{student.first_name} {student.last_name}</h1>
      <hr />
      <p>email: {student.contact_email}</p>
      <p>phone: {student.phone_number}</p>
      <p>about me: {student.short_bio}</p>
      <p>email: {student.email}</p>

    </main>
  )
}