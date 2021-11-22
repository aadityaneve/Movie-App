import React from "react";

function VideoPopup(props) {
    return props.trigger ? (
        <div className="videoPopup">
            <div className="videoPopupInner">
                <button
                    className="videoPopupCloseBtn"
                    onClick={() => {
                        props.setButtonPopup(false);
                    }}
                >
                    <strong> X </strong>
                </button>
                {props.children}
            </div>
        </div>
    ) : (
        ""
    );
}

export default VideoPopup;
