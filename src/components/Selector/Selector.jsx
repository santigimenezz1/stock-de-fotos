import '../Selector/selector.css'
const Selector = () => {
    return (
        <div className="radio-inputs">
            <label className="radio">
                <input type="radio" name="radio" />
                <span className="name">Imagenes</span>
            </label>

            <label className="radio">
                <input type="radio" name="radio" />
                <span className="name">Videos</span>
            </label>
        </div>
    );
};

export default Selector;
