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
                        <div className="mt-1">{com.comment}</div>
                        <div className="mt-1">--{com.author},{" "}{com.date}</div>
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
        
        return (
           <div className="row">
               {this.renderDish(this.props.selectedDish)}
               {this.renderComments(this.props.selectedDish)}
            </div>
        );
    }
}

export default DishDetail;