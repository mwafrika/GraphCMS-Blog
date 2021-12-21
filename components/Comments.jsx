import React, { useEffect, useState } from "react";
import moment from "moment";
import parse from "html-react-parser";

const Comments = ({ slug }) => {
  const [comments, setComments] = useState([]);
  return (
    <div>
      <h1>Comments</h1>
    </div>
  );
};

export default Comments;
