import React from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';


    function RenderComments({comments}){
        
            const disp = comments.map((com)=>{
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

    function RenderDish({dish}){
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

    const DishDetail = (props) => {
        // console.log(" dish detail component render invokrd..");
        // console.log(this.props.dish);
        if(props.dish != null){
        return (
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to='/menu'>Menu</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>{props.dish.name}</h3>
                        <hr />
                    </div>
                </div>
                <div className="row">
                <RenderDish dish={props.dish}/>
                <RenderComments comments={props.comments}/>
                </div>
            </div>
        );
        }
        else{
            return(
                <div className="container">
                <div className="row">
                </div>
            </div>
            );
        }
    }

export default DishDetail;