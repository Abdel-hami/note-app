import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import NoteModal from '../components/NoteModal';

const Home = () => {
    const [isModalOpen, setMoalOpen] = useState(false);
    const closeModal = () => {
        setMoalOpen(false)
    }
    const addNote = async (title, description) => {
        try {
            const response = await axios.post("http://localhost:5000/api/note/add",
                { title, description });
            if (response.data.success) {
                navigate("/");
                closeModal();
            }
        } catch (err) {
            console.error(err)
        }
    }
    return (
        <div className='bg-gray-100 min-h-screen'>
            <Navbar />
            <button
                onClick={() => setMoalOpen(true)}
                className='fixed  text-2xl right-4 bottom-4 text-white bg-teal-500 font-bold p-4 rounded-full'>
                +
            </button>
            {
                isModalOpen && <NoteModal closeModal={closeModal} addNote = {addNote}/>
            }
        </div>
    )
}

export default Home;