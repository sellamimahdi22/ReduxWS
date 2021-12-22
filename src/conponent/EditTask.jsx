import React, { useState } from 'react'
import Modal from "react-modal";
import { useDispatch } from 'react-redux';
import { edit } from '../redux/actions';
const customStyles = {
    content: {
        top: "50%",
        left: "50%",
        right: "auto",
        bottom: "auto",
        marginRight: "-50%",
        transform: "translate(-50%, -50%)",
    },
};

Modal.setAppElement("#root");
const EditTask = ({oldtask}) => {
    const [modalIsOpen, setIsOpen] = useState(false);
    const [oldst, setOldst] = useState(oldtask.Action);
const dispatch = useDispatch()
    const handleChange = (e) => setOldst(e.target.value);
    const handleSubmit = (e) => {
        e.preventDefault();
        const edited = { ...oldtask, Action: oldst };
        dispatch(edit(edited));
        closeModal();
    };
    function openModal() {
        setIsOpen(true);
    }
    function closeModal() {
        setIsOpen(false);
    }
    return (
        <div>
            <button onClick={openModal}>Edit</button>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
            >
                <form onSubmit={handleSubmit}>
                    <input

                        type="text"
                        value={oldst}
                        onChange={handleChange}
                    />
                    <button>Confirm</button>
                    <button onClick={closeModal}>
                        Cancel
                    </button>
                </form>
            </Modal>
        </div>
    )
}

export default EditTask
