import { useLoaderData } from "react-router-dom"
import TwitterEmbed from "./TwitterEmbed";
export function StudentsShowPage() {

  const student = useLoaderData()[0];

  console.log(student);

  return (
    <div>
      <h1>{student.first_name} {student.last_name}</h1>
      <hr />
      <p>email: {student.contact_email}</p>
      <p>phone: {student.phone_number}</p>
      <p>about me: {student.short_bio}</p>

      <h3>Experience</h3>
      {
        student.experiences.map(experience => (
          <div key={experience.id}>
            <h4>{experience.company_name}</h4>
            <p>title: {experience.job_title}</p>
            <p>details: {experience.details}</p>
            <p>from: {experience.start_date}</p>
            <p>to: {experience.end_date}</p>
          </div>
        ))
      }
      <h3>Education</h3>
      {
        student.educations.map(education => (
          <div key={education.id}>
            <h4>{education.university}</h4>
            <p>title: {education.degree}</p>
            <p>details: {education.details}</p>
            <p>from: {education.start_date}</p>
            <p>to: {education.end_date}</p>
          </div>
        ))
      }
      <h3>Skills</h3>
      {
        student.skills.map(skill => (
          <div key={skill.id}>
            <p>{skill.skill_name}</p>
          </div>
        ))
      }
      <h3>Capstone</h3>
      <h4>{student.capstone.name}</h4>
      <p>{student.capstone.description}</p>
      <p>{student.capstone.capstone_url}</p>
      <p>{student.capstone.capstone_image}</p>
      <TwitterEmbed />
    </div>
  )
}