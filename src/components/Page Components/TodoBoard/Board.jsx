import React, { useState } from 'react'
import Column from './Column'
import { DragDropContext } from 'react-beautiful-dnd'

const Board = () => {
    const [Todo, setTodo] = useState([
        {
            id: '1',
            priority: 'Low',
            title: 'Brainstorming',
            content: 'Brainstorming brings team members\' diverse experience into play.',
            // image:"./img1.png",
            avatars: ["./img1.png", "./img2.png",],
            commentCount: 12,
            fileCount: 0
        },
        {
            id: '2',
            priority: 'High',
            title: 'Research',
            content: 'User research helps you to create an optimal product for users.',
            // image:"./img1.png",
            avatars: ["./img2.png", "./img3.png"],
            commentCount: 10,
            fileCount: 3
        },
        {
            id: '9',
            priority: 'High',
            title: 'Wireframes',
            content: 'Low fidelity wireframes include the most basic content and visuals.',
            // image:"./img1.png",
            avatars: ["./img2.png", "./img3.png", "./img4.png"],
            commentCount: 10,
            fileCount: 3
        },
    ]);
    const [InProgress, setInProgress] = useState([
        {
            id: '3',
            priority: 'High',
            title: 'Onboarding Illustrations ',
            // content: 'Lorem3',
            image: ["./img8.png"],
            avatars: ["./img1.png", "./img2.png", "./img3.png"],
            commentCount: 14,
            fileCount: 15
        },
        {
            id: '4',
            priority: 'Low',
            title: 'Moodboard',
            // content: 'Lorem4',
            image: ["./img6.png", "./img7.png"],
            avatars: ["./img2.png"],
            commentCount: 9,
            fileCount: 10
        },
    ]);
    const [Done, setDone] = useState([
        {
            id: '5',
            priority: 'Completed',
            title: 'Mobile App Design',
            // content: 'Lorem5',
            image: ["./img5.png"],
            avatars: ["./img1.png", "./img2.png",],
            commentCount: 12,
            fileCount: 15
        },
        {
            id: '6',
            priority: 'Completed',
            title: 'Design System',
            content: 'It just needs to adapt the UI from what you did before ',
            // image:"./img1.png",
            avatars: ["./img2.png", "./img3.png", "./img4.png"],
            commentCount: 12,
            fileCount: 15
        },
    ]);
    const removeItemById = (items, id) => {
        return items.filter(item => item.id !== id);
    }
    const handleDragEnd = (result) => {
        const { destination, source, draggableId } = result;

        if (!destination) return;
        if (destination.droppableId === source.droppableId && destination.index === source.index) return;

        const start = source.droppableId;
        const finish = destination.droppableId;

        if (start === 'ToDo') {
            const newTodo = Array.from(Todo);
            const [removed] = newTodo.splice(source.index, 1);
            if (finish === 'On Progress') {
                setInProgress([...InProgress, removed]);
                setTodo(removeItemById(Todo, draggableId));
            }
            if (finish === 'Done') {
                removed.priority = 'Completed';
                setDone([...Done, removed]);
                setDone(removeItemById(Done, draggableId));
            }
        }
        if (start === 'On Progress') {
            const newInProgress = Array.from(InProgress);
            const [removed] = newInProgress.splice(source.index, 1);
            if (finish === 'ToDo') {
                setTodo([...Todo, removed]);
                setInProgress(removeItemById(InProgress, draggableId));
            }
            if (finish === 'Done') {
                removed.priority = 'Completed';
                setDone([...Done, removed]);
                setInProgress(removeItemById(InProgress, draggableId));
            }
        }
        if (start === 'Done') {
            const newDone = Array.from(Done);
            const [removed] = newDone.splice(source.index, 1);
            if (finish === 'ToDo') {
                removed.priority = 'Low';
                setTodo([...Todo, removed]);
                setDone(removeItemById(Done, draggableId));
            }
            if (finish === 'On Progress') {
                removed.priority = 'High';
                setInProgress([...InProgress, removed]);
                setDone(removeItemById(Done, draggableId));
            }
        }
    }
    return (
        <DragDropContext onDragEnd={handleDragEnd}>
            <div className="board justify-around flex flex-wrap w-100%">
                <Column title="ToDo" items={Todo} setItems={setTodo} />
                <Column title="On Progress" items={InProgress} setItems={setInProgress} />
                <Column title="Done" items={Done} setItems={setDone} />
            </div>
        </DragDropContext>
    )
}

export default Board