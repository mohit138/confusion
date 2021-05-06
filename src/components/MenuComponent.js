import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';


class Menu extends Component {

    constructor(props) {
        super(props);

        // console.log('menu components constructos is invoked');
    }

    componentDidMount(){
        // console.log(" menu component componentDidMount invokrd..");
    }

    render() {
        // console.log(" menu component render invokrd..");
        const menu = this.props.dishes.map((dish) => {
            return (
                <div key={dish.id} className="col-12 col-md-5 m-1">
                    <Card onClick={() => this.props.onClick(dish.id)}>  
                        <CardImg width="100%" object src={dish.image} alt={dish.name}/>
                        <CardImgOverlay>
                            <CardTitle>{dish.name}</CardTitle>
                        </CardImgOverlay>
                    </Card>
                </div>
            );

        });

        // console.log('menu components render is invoked');

        return ( 
            <div className="container">
                <div className='row'>
                    {menu}
                </div>
            </div>
        );
    }
}

export default Menu;