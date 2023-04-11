const Stars = ({amount: ammount}: {amount: number}) => {
    const stars: JSX.Element[] = [];
    for (let i = 0; i < ammount; i++) {
        stars.push(<span>⭐</span>);
    }
    return (
        <div className="flex justify-center">
            {stars}
        </div>
    )
}

export default Stars;
