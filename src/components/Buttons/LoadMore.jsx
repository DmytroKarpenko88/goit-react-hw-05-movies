import React, { useState } from 'react';
import { LoadMoreBtn } from './Buttons.styled';

const LoadMore = ({ onClick }) => {
  const [activePage, setActivePage] = useState(1);
  onClick(activePage);

  const changePage = () => setActivePage(prev => prev + 1);

  return (
    <div>
      <LoadMoreBtn className="btn" type="button" onClick={changePage}>
        Load more
        <span className="icon-right"></span>
        <span className="icon-right after"></span>
      </LoadMoreBtn>
    </div>
  );
};

export default LoadMore;
