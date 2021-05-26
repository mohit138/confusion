import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem, Button, Modal, ModalHeader, ModalBody,
    Label, Col, Row } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Control, LocalForm, Errors } from 'react-redux-form';
import { Loading } from './LoadingComponent';
import { baseUrl } from '../shared/baseUrl';

const maxLength = (len) => (val) => !(val) || (val.length<=len);
const minLength = (len) => (val) => (val) && (val.length>=len);

    class CommentForm extends Component{

        constructor(props){
            super(props);

            this.state={
                isModalOpen : false
            };

            this.toggleModal = this.toggleModal.bind(this);
            this.handleSubmit = this.handleSubmit.bind(this);

        }

        handleSubmit(values){
            this.toggleModal();
            this.props.postComment(this.props.dishId, values.rating, values.author, values.comment );
            
        }

        toggleModal(){
            this.setState({
                isModalOpen: !this.state.isModalOpen
            });
        }

        render(){
            return(
                <div className="mt-3">
                <Button outline onClick={this.toggleModal}>
                    <span className="fa fa-pencil fa-lg"></span> Submit Comment
                </Button>
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Submit Comment</ModalHeader>
                    <ModalBody>
                        <div className="container">
                            <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
                                <Row className="form-group">
                                    <Label >Rating</Label>
                                    <Control.select model=".rating" name="rating" className="form-control">
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </Control.select>
                                </Row>
                                <Row className="form-group">
                                    <Label htmlFor="author">Your Name</Label>
                                    <Control.text model=".author" id="author" name="author" className="form-control"
                                        placeholder="Your Name"
                                        validators={{
                                            minLength: minLength(3), maxLength: maxLength(15) 
                                        }} />
                                    <Errors
                                        className="text-danger" 
                                        model=".author"
                                        show="touched"
                                        messages={{
                                            minLength: 'Must be greater than 2 characters',
                                            maxLength: 'Must be 15 characters or less'
                                        }} />
                                    
                                </Row>
                                <Row className="form-group">
                                    <Label htmlFor="comment">Comment</Label>
                                    <Control.textarea model=".comment" id="comment" name="comment" className="form-control"
                                        rows="9">
                                        
                                    </Control.textarea>
                                </Row>
                                <Row className="form-group">
                                    <Button type="submit" value="submit" color="primary">Submit</Button>
                                </Row>
                            </LocalForm>
                        </div>
                    </ModalBody>
                </Modal>
                
                </div>
            );
        }
    }

    function RenderComments({comments, postComment, dishId}){
        
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
                    <CommentForm dishId={dishId} postComment={postComment} />
                </div>
            );
    }

    function RenderDish({dish}){
        if(dish!=null) {
            return(
                <div className="col-12 col-md-5 m-1">
                    <Card>
                        <CardImg width="100%" object src={baseUrl + dish.image} alt={dish.name}/>
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
        if(props.isLoading){
            return(
                <div className="container">
                    <div className="row">
                        <Loading />
                    </div>
                </div>
            );
        }
        else if(props.errMess) {
            return(
                <div className="container">
                    <div className="row">
                        <h4>{props.errMess}</h4>
                    </div>
                </div>
            );
        }
        else if(props.dish != null){
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
                <RenderComments comments={props.comments}
                    postComment={props.postComment}
                    dishId={props.dish.id}/>
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