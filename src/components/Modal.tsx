import React from 'react';

const Modal = ({
  content,
  isShowing,
  onClose,
}: {
  content: string;
  isShowing: boolean;
  onClose: React.MouseEventHandler<HTMLElement>;
}) => {
  return isShowing ? (
    <div className="modal" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <div className="modal-header">
          <h4 className="modal-title">Modal Title</h4>
        </div>
        <div className="modal-body">
          <span className="modal-body">{content}</span>
        </div>
        <div className="modal-footer">
          <button onClick={onClose}>Close</button>
        </div>
      </div>
    </div>
  ) : null;
};

export default Modal;
