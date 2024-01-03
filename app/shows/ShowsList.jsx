import React from "react";

async function getShows() {
  const res = await fetch("http://localhost:4000/shows", {
    next: {
        revalidate: 0, // use 0 to opt out of using cache
    },
  });

  return res.json();
}

export default async function ShowsList() {
  const shows = await getShows();
  console.log(shows);

  return (
    <>
      {shows.map((show) => (
        <div key={show.id} className="card my-5">
          <h3>{show.title}</h3>
          <p>{show.body.slice(0, 200)}...</p>
          <div className={`pill ${show.priority}`}>
            {show.priority} priority
          </div>
        </div>
      ))}
      {shows.length === 0 && <p className="text-center">No shows to show</p>}
    </>
  );
}
