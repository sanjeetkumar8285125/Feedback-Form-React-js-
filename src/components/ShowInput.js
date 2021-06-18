import React from "react";
export default function ShowInput({ list }) {
  return (
    <section className="ShowInput">
      {React.Children.toArray(
        list.map((element) => {
          return (
            <DataCard name={element.username} email={element.useremail} feedback={element.userfeedback} />
          );
        })
      )}
    </section>
  );

  function DataCard({ name,email,feedback }) {
    return (
      <div className="DataCard">
        <kbd>{name}</kbd>
        <kbd>{email}</kbd>
        <p>{feedback}</p>
      </div>
    );
  }
}
