import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

class DishDetail extends Component{
    constructor(props){
        super(props);
        
    }

    

    renderComments(dish){
        if(dish!=null){
            const disp = dish.comments.map((com)=>{
                return(
                    
                    <div key={com.id} className=" list-unstyled">
                        <div className="mt-3">{com.comment}</div>
                        <div className="mt-3">--{com.author},{" "}{new Intl.DateTimeFormat('en-US', {year:'numeric',month:'short',day:'2-digit'}).format(new Date(Date.parse(com.date)))}</div>
                    </div>
                    
                );
            });

            return(
                <div className="col-12 col-md-5 m-1">
                    <h4>Comments</h4>
                    {disp}
                </div>
            );
        }
        else{
            return (
                <div></div>
            );
        }
    }

    renderDish(dish){
        if(dish!=null) {
            console.log("in render img sec ", dish)
            return(
                <div className="col-12 col-md-5 m-1">
                    <Card>
                        <CardImg width="100%" object src={dish.image} alt={dish.name}/>
                        <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                        </CardBody>
                    </Card>
                </div>              
            );
        }
        else {
            return(
                <div></div>
            );
        }
    }

    render(){
        // console.log(this.props.dish);
        return (
            <div className="container">
                <div className="row">
                {this.renderDish(this.props.dish)}
                {this.renderComments(this.props.dish)}
                </div>
            </div>
        );
    }
}

export default DishDetail;