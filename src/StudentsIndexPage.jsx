import { useLoaderData, useNavigate } from "react-router-dom";
export function StudentsIndexPage() {

  const students = useLoaderData();
  const navigate = useNavigate();

  console.log(students);

  const handleShow = student => {
    console.log("SHOW");
    navigate(`/students/${student.id}`);
  };

  return (
    <main>
      <div className="profile-container">
      <h1 className="all-students">All Students</h1>
      {
        students.map(student => (
          <div key={student.id}>
            <p>{student.first_name} {student.last_name}</p>
            <button onClick={()=>handleShow(student)}>Show Resume</button>
            <hr />
          </div>
        ))
      }
      </div>
    </main>
  )
}