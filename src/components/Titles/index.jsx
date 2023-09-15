import "./Titles.css";

function Titles({ title1, title2, titleBg }) {
    return (
        <div className="titlesContainer">
            <h5 className="title1">{title1}</h5>
            <h6 className="title2">{title2}</h6>
            <p className="titleBg">{titleBg}</p>
        </div>
    );
}

export default Titles;
