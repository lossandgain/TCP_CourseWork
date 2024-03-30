import React, {useState} from 'react';
import Modal from "react-bootstrap/Modal";
import Form from 'react-bootstrap/Form';
import Button from "react-bootstrap/cjs/Button";
import {createBrand, createType} from "../../http/deviceAPI";

const CreateBrand = ({show, onHide}) => {

    const [value, setValue] = useState('')
    const addBrand= () => {
        createBrand({name :value}).then(data => setValue(''))
        onHide()
    }

    return (
        <Modal
            show={show}
            onHide={onHide}
            size="lg"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Добавить бренд
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Control
                            value={value}
                            onChange={e => setValue(e.target.value)}
                            placeholder="Бренд"
                            autoFocus
                        />
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-danger" onClick={onHide}> Закрыть</Button>
                <Button variant="outline-success" onClick={addBrand}> Добавить</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default CreateBrand;