function Brand(props) {
    const image = props.image;
    const item = props.item;
    return (
        <div className="card mb-5">
            <div className="row">
                <div className="col-6">
                    <div className="embed-responsive embed-responsive-4by3">
                        <img className="card-img-left embed-responsive-item" src={image} alt={image}/>
                    </div>
                </div>
                <div className="col-6">
                    <div className="card-body">
                        <div className="row">
                            <span><strong>ABV : </strong>{item.abv}</span>
                        </div>
                        <div className="row">
                            <span><strong>IBU : </strong>{item.ibu}</span>
                        </div>
                        <div className="row">
                            <span><strong>ID : </strong>{item.id}</span>
                        </div>
                        <div className="row">
                            <span><strong>Style : </strong>{item.style}</span>
                        </div>
                        <div className="row">
                            <span><strong>Ounces : </strong>{item.ounces}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Brand;