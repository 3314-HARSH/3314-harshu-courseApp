import Course from "../Course/Course";
import "./CourseDeck.css";
import { courseData } from "../../db/courseData";
function CourseDeck() {
  return (
    <main className="deck">
      <h2>Our Course Deck</h2>
      <p>Innovate, Educate, Elevate: Transform with Our Tech Courses.</p>
      <ul className="courses">
        {courseData.map((course) => (
          <Course courseObj={course} key={course.title} />
        ))}
      </ul>
    </main>
  );
}

export default CourseDeck;
