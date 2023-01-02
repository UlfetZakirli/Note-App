
const Header = ({ setToggleMode, toggleMode }) => {
    console.log({ toggleMode });

    const handleToggleMode = () => {
        setToggleMode((prev) => !prev)
    }

    return (
        <div className="header">
            <h1>Note App</h1>
            <button
                onClick={handleToggleMode}
                className={`${toggleMode && 'active'} toggle-btn`}
            >
                {toggleMode ? "Ligth mode" : 'Dark mode'}
            </button>
        </div>
    )
}

export default Header