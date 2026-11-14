import { memo } from "react";

function ChildDemo({ student }) {
  console.log("ChildDemo rendered");

  return (
    <p>
      Student: {student.name}, Age: {student.age}
    </p>
  );
}

export default memo(ChildDemo);