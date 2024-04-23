// function Btn() {
//     const clickHandler = () => console.log('clicked')

//     return (
//         <button onClick={clickHandler}>
//             Click
//         </button>
//     );
// }

// export default Btn;

function Btn() {
    const clickHandler = () => console.log('mouse over')

    return (
        <button onMouseOver={clickHandler}>
            Click
        </button>
    );
}

export default Btn;