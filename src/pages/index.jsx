import {
  addDoc,
  collection
} from 'firebase/firestore';
import { useState } from 'react';
import { database } from 'firebaseConfig';
export default function Home() {

  const [name, setName] = useState('');
  const [course, setCourse] = useState('');
  const [year, setYear] = useState('');
  const [message, setMessage] = useState('');
  const databaseReference = collection(database, 'Information');

  const addData = () => {
      addDoc(databaseReference, {
          name: name,
          course: course,
          year: year,
          message: message
      })
  }

  return (
    <div className="h-screen w-full bg-gradient-to-b from-white to-gray-700 items-center justify-center flex flex-col mx-auto">
           <h1 className="text-2xl sm:text-4xl font-bold text-gray-800 my-4">Student Information Form(try lang ni)</h1>
          
          <input
              placeholder="Student Name"
              className="rounded-md border text-2xl flex items-center justify-center flex-col my-4"
              onChange={(event) => setName(event.target.value)}
              value={name}
              
          >
          </input>
         
          <input
              placeholder="Course"
              className="rounded-md border text-2xl flex items-center justify-center flex-col "
              onChange={(event) => setCourse(event.target.value)}
              value={course}
          >
          </input>
        
          <input
              placeholder="Year"
              className="rounded-md border text-2xl flex items-center justify-center flex-col my-4"
              onChange={(event) => setYear(event.target.value)}
              value={year}
          >
          </input>
          
          <textarea 
           placeholder="Message"
           className="rounded-md border text-2xl flex items-center justify-center flex-col"
           onChange={(event) => setMessage(event.target.value)}
           value={message}
          >

          </textarea>
        
          <button
            className='text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex item-center rounded-md hover:scale-110 duration-300'
              onClick={addData}
          >
              Add
          </button>
      </div>
  )
}

