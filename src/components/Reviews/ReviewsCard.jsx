import React from 'react';
import {
  Author,
  Card,
  DateTime,
  Description,
  Infos,
} from './ReviewsCard.styled';
import { formateDate } from 'utils/formateDate';

const ReviewsCard = ({ review }) => {
  const { author, content, created_at } = review;
  return (
    <div>
      <Card className="card">
        <Infos className="infos">
          <DateTime className="date-time">{formateDate(created_at)}</DateTime>
          <Description className="description">{content}</Description>
        </Infos>

        <Author className="author">— {author}</Author>
      </Card>
    </div>
  );
};

export default ReviewsCard;
