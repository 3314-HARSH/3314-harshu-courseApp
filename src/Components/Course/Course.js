import "./Course.css";
function Course({ courseObj }) {
  return (
    <li className={`course ${courseObj.soldOut ? "sold-out" : ""}`}>
      <img src={courseObj.photoName} alt={courseObj.title} />
      <div className="course__detail">
        <h3>{courseObj.title}</h3>
        <p>{courseObj.about}</p>
        <div className="course__addOn">
          <span>{courseObj.soldOut ? "SOLD OUT" : `$${courseObj.price}`}</span>
          {!courseObj.soldOut && <button className="btn">Enroll</button>}
        </div>
      </div>
    </li>
  );
}

export default Course;
