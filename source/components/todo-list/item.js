import React from 'react';
import PropTypes from 'prop-types';

Item.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  done: PropTypes.bool.isRequired,
  fnDone: PropTypes.func.isRequired,
  fnRemove: PropTypes.func.isRequired
};

export default function Item({ id, title, done, fnDone, fnRemove }) {
  const liClassName = "list-group-item px-3 py-2" + (done ? " list-group-item-success" : "");
  return (
    <li className={liClassName}>
      <div className="d-flex align-items-center">
        <div className="p-1 flex-grow-1">{title}</div>
        <div className="p-1">
          <button type="button" className="btn btn-success float-right btn-sm" onClick={() => fnDone(id)}>
            <svg aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path fill="currentColor" d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z" />
            </svg>
          </button>
        </div>
        <div className="p-1">
          <button type="button" className="btn btn-danger float-right ml-1 btn-sm" onClick={() => fnRemove(id)}>
            <svg aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
              <path fill="currentColor" d="M432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16zM53.2 467a48 48 0 0 0 47.9 45h245.8a48 48 0 0 0 47.9-45L416 128H32z" />
            </svg>
          </button>
        </div>
      </div>
    </li>
  );
}