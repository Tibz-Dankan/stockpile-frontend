import React, { useState } from "react";
import axiosApiAuthorized from "./axiosAuthorized";
import Modal from "react-modal";
import { X } from "react-bootstrap-icons";
import "./../css/DeletePile.css";

const DeletePile = ({ pile }) => {
  // the modal state
  const [isModalOpen, setIsOpenModal] = useState(false);
  // let subtitle;
  // styles
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      color: "black",
      width: "40%",
    },
  };
  // open modal
  const openModal = () => {
    setIsOpenModal(true);
  };
  // close modal
  const closeModal = () => {
    setIsOpenModal(false);
  };
  // onAfterOpen modal
  const afterOpenModal = () => {
    // subtitle.style.color = "green";
  };
  // the modal element
  Modal.setAppElement(document.getElementsByClassName("user-pile"));

  const [pileId, setPileId] = useState(pile.todoid);

  // function to disable a button
  const disableButton = () => {
    document.getElementById("button").disabled = true;
  };

  // function to enable a button
  const enableButton = () => {
    document.getElementById("button").disabled = false;
  };

  // function to delete the pile
  const deletePile = async () => {
    // e.preventDefault();
    try {
      // console.log(renderAllPile.pile_id);
      console.log(pileId); // to test whether it is working properly
      disableButton();
      const response = await axiosApiAuthorized.delete(
        `api/delete-pile/${pileId}`
      );
      if (response.status === 200) {
        // And end the close modal
        closeModal();
        enableButton();
        // also refresh automatically the whole page for a user to visualize the changes
      } else {
        // when some thing goes wrong
      }
      console.log(response);
    } catch (error) {
      enableButton();
      console.log(error);
      // some state to capture error and alert the user when there is a problem on the server
    }
  };

  return (
    <div>
      <button className="delete-button delete-button-1" onClick={openModal}>
        Delete
      </button>
      <Modal
        isOpen={isModalOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Delete Pile"
      >
        <div className="modal-wrapper">
          <h4>This will be deleted permanently</h4>
          <div className="close-modal" onClick={closeModal}>
            <X size={30} />
          </div>
          <button
            className="delete-button delete-button-2"
            id="button"
            onClick={deletePile}
          >
            Delete
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default DeletePile;
