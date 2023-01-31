import React from 'react';
import {InterfaceOrderFeedback} from "../../data/entities/OrderFeedback";
import {Avatar, Grid, Rating} from "@mui/material";
import './styles.css'

interface OrderFeedbackProps {
    feedback: InterfaceOrderFeedback
}

const OrderFeedbackCard = ({feedback}: OrderFeedbackProps) => {
    return (
        <Grid item xs={12} sm={6} md={4} lg={4}>
            <div className={'orderFeedbackLandingCardContainer'}>
                <img className={'orderFeedbackLandingCardBookCover'} alt={feedback.orderBook.id}
                     src={feedback.orderBook.coverLink}/>
                <div className={'orderFeedbackLandingCardText'} children={feedback.text}/>
                <div className={'orderFeedbackLandingCardUserInfo'}>
                    <div className={'orderFeedbackLandingCardUserInfoAvatar'}>
                        <Avatar alt={feedback.orderOwner.fullName} src={feedback.orderOwner.avatarLink}/>
                    </div>
                    <div className={'orderFeedbackLandingCardUserInfoName'} children={feedback.orderOwner.fullName}/>
                    <div className={'orderFeedbackLandingCardRating'}>
                        <Rating name="read-only" value={feedback.rating} readOnly/>
                    </div>
                </div>
            </div>
        </Grid>
    );
};

export default OrderFeedbackCard;