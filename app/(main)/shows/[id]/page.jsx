import { PageNotFoundError } from 'next/dist/shared/lib/utils';
import { notFound } from 'next/navigation';
import React from 'react'

export const dynamicParams = true;

export async function generateMetadata ( { params } ) {

    const id = params.id;

    const res = await fetch(`http://localhost:4000/shows/${id}`);
    const show = await res.json();
    
    return {
        title: `What's Next | ${show.title}`,
    };
}

export async function generateStaticParams () {
    const res = await fetch("http://localhost:4000/shows");
  
    const shows = await res.json();
  
    return shows.map((show) => ({
        params: {
            id: show.id.toString(),
        },
        }));


  }

async function getShow(id) {
    await new Promise((resolve) => setTimeout(resolve, 3000));

    const res = await fetch("http://localhost:4000/shows/" + id, {
      next: {
          revalidate: 60,
      },
    });

    if(!res.ok) {
        notFound();
    }
  
    return res.json();
  }

export default async function ShowDetails({ params }) {

    const show = await getShow(params.id);

    console.log(show);

  return (
    <main>
        <nav>
            <h2>Show Details</h2>
        </nav>
        <div className='card'>
            <h3>{show.title}</h3>
            <small>Created by {show.user_email}</small>
            <p>{show.body}</p>
            <div className={`pill ${show.priority}`}>
            {show.priority} priority
          </div>
        </div>
    </main>
  )
}
