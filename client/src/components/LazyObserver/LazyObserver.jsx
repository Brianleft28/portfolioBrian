import React, { useState, useEffect, useRef } from "react";

const LazyLoading = ({ ElementID, Component, ...restProps }) => {
  const [show, setShow] = useState(false);
  const targetRef = useRef(null);

  useEffect(() => {
    const onChange = (entries) => {
      console.log(entries);
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setShow(true);
        }
      });
    };

    const observer = new IntersectionObserver(onChange, {
      rootMargin: "-100px",
    });

    if (targetRef.current) {
      observer.observe(targetRef.current);
    } else {
      console.log("No esta funcionado" + ElementID);
    }

    // Limpiar el observer cuando el componente se desmonte para evitar memory leaks
    return () => {
      observer.disconnect();
    };
  }, [ElementID]); // Asegúrate de pasar un array vacío como segundo argumento para que useEffect solo se ejecute una vez al montar el componente

  return (
    <div ref={targetRef}>{show ? <Component {...restProps} /> : null}</div>
  );
};

export default LazyLoading;
