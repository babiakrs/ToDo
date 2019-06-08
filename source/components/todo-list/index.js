import React from 'react';
import PropTypes from 'prop-types';

import Item from './item';
import './styles.sass';

TodoList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      done: PropTypes.bool.isRequired
    })
  ).isRequired,
  fnDone: PropTypes.func.isRequired,
  fnRemove: PropTypes.func.isRequired
};

export default function TodoList({ items, fnDone, fnRemove }) {
  return (
    <ul className="list-group">
      {
        items
          .map((t) =>
            <Item
              key={t.id}
              {...t}
              fnDone={fnDone}
              fnRemove={fnRemove}
            />
          )
      }
    </ul>
  );
}