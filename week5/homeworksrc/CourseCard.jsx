function CourseCard({ title, description }) {

    return (
        <article className="course-card">

            <h2>{title}</h2>

            <p>{description}</p>

        </article>
    );
}

export default CourseCard;