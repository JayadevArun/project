import React,{useContext} from 'react'
import { useState } from 'react'

import './PlaceItem.css'
import Card from '../../shared/components/UIElements/Card'
import Button from '../../shared/components/FormElements/Button'
import Modal from '../../shared/components/UIElements/Modal'
import { useHttpClient } from '../../shared/hooks/http-hook'
import ErrorModal from '../../shared/components/UIElements/ErrorModal'

const PlaceItem = (props) => {
    const {isLoading,error,sendRequest,clearError}=useHttpClient();
    const [showConfirmModal,setshowConfirmModal]=useState(false)
    const showDeleteWarningHandler=()=>{
        setshowConfirmModal(true)
    }

    const cancelDeleteWarningHandler=()=>{
        setshowConfirmModal(false)
    }

    const confirmDeleteWarningHandler=async ()=>{
        setshowConfirmModal(false)
        try{
            await sendRequest(
                `${process.env.REACT_APP_BACKEND_URL}/places/${props.id}`,
                'DELETE',
                null,
            );
            props.onDelete(props.id);
        }catch(err){

        }
    };

  return (
    <React.Fragment>
        <ErrorModal error={error} onClear={clearError}/>
        <Modal 
            header={props.address} 
            contentClass="place-item__modal-content" 
            footerClass="place-item__modal-actions"
        >
            <div className='map-container'>
            </div>
        </Modal>

        <Modal 
            show={showConfirmModal}
            onCancel={cancelDeleteWarningHandler}
            header="Are you sure?" 
            footerClass="place-item__modal-actions" 
            footer={
                <React.Fragment>
                    <Button inverse onClick={cancelDeleteWarningHandler}>CANCEL</Button>
                    <Button danger onClick={confirmDeleteWarningHandler}>DELETE</Button>
                </React.Fragment>
            } 
        >
            <p>
                Do you want to proceed and delete this place? Please note that it cant be undone thereafter.
            </p>
        </Modal>

        <li className='place-item'>
        <Card className='place-item__content'>
            <div className='place-item__image'>
                <img src={`${process.env.REACT_APP_ASSET_URL}/${props.image}`} alt={props.title} />
            </div>
            <div className='place-item__info'>
                <h2>{props.title}</h2>
                <h3>{props.address}</h3>
                <p>{props.description}</p>
            </div>
            <div className='place-item__actions'>
            </div>
        </Card>
        </li>
    </React.Fragment>
  )
}

export default PlaceItem