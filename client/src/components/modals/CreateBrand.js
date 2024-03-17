import React from 'react';
import Modal from "react-bootstrap/Modal";
import Form from 'react-bootstrap/Form';
import Button from "react-bootstrap/cjs/Button";

const CreateBrand = ({show, onHide}) => {
    return (
        <Modal
            show={show}
            onHide={onHide}
            size="lg"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Добавить тип
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Control>
                        placeholder={"Введите название типов"}
                    </Form.Control>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-danger" onClick={onHide}> Закрыть</Button>
                <Button variant="outline-success" onClick={onHide}> Добавить</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default CreateBrand;