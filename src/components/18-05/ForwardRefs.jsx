import React, { useRef, forwardRef } from 'react';

// Child component that forwards the ref
const ChildComponent = forwardRef((props, ref) => {
    return <input ref={ref} />;
});

// Parent component
const ForwardRefs = () => {
    const inputRef = useRef(null);
    const focusInput = () => {
        inputRef.current.focus();
    };
    return (
        <div>
            <ChildComponent ref={inputRef} />
            <button onClick={focusInput}>Focus Input</button>
        </div>
    );
}
export default ForwardRefs