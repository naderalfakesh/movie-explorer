import React from "react";
import PropTypes from "prop-types";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";

function ElevationScroll(props) {
    const { children } = props;
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 300,
    });
    return trigger
        ? React.cloneElement(children, {
              elevation: 4,
              color: "primary",
              className: "",
              position: "fixed",
          })
        : React.cloneElement(children);
}

ElevationScroll.propTypes = {
    children: PropTypes.element.isRequired,
    window: PropTypes.func,
};

export default ElevationScroll;
