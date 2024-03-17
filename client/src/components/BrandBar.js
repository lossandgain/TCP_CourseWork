import React, {useContext} from 'react';
import {Context} from "../index";
import {observer} from "mobx-react-lite";
import Card from 'react-bootstrap/Card';
import Col from "react-bootstrap/Col";

const BrandBar = observer(() => {
    const {device} = useContext(Context)
    return (
        <Col className="d-flex">
            {device.brands.map(brand =>
                <Card
                    style={{cursor : 'pointer'}}
                    key={brand.id}
                    className="p-3"
                    onClick={()=> device.setSelectedBrand(brand)}
                    border={brand.id === device.selectedBrand.id ? 'danger' : 'light'}
                >
                    {brand.name}
                </Card>
            )}
        </Col>
    );
});

export default BrandBar;