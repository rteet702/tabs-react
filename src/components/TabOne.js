const TabOne = () => {
    const exampleCallback = () => console.log('test')

    return (
        <div>
            <p>This is the content of the tab.</p>
            <p>Yeet</p>
            {exampleCallback()}
        </div>
    )
}

export default TabOne