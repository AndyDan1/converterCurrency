import React, {memo} from 'react';

const EmptyComponent = ({children}) => {
  return (
    <div>
      {children}
    </div>
  );
};

export default memo(EmptyComponent);