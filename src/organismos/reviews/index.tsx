import React from "react";
import Review from "../../moleculas/review";
import "./style.css";

const Comments: React.FC = () => {
  const comments = [
    {
      author: "Juan",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ut arcu sapien. Cras auctor risus at augue pulvinar, sed auctor magna euismod. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent gravida a urna sed imperdiet. Nunc congue eu sem eget hendrerit. Quisque quis massa risus. ",
      date: "2021-09-01",
      rating: 4
    },
    {
      author: "Pedro",
      content:
        "Quisque sagittis in nibh sollicitudin varius. Proin sed nisl ut ante semper congue sit amet sed mi. Praesent sed nisl cursus, cursus purus mollis, volutpat dolor. Quisque nec fermentum tellus. Nam in turpis bibendum, pulvinar nisl finibus, dapibus arcu. Nunc eu mauris aliquam, interdum felis et, sodales purus. Maecenas non rhoncus diam. ",
      date: "2021-09-02",
      rating: 5,
    },
  ];
  return (
    <div className="comments">
      <h2>Comentarios</h2>
        {comments.map((comment) => <Review key={comment.author} {...comment}/>)}
    </div>
  );
};

export default Comments;
export {};