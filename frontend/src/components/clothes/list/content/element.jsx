function ClothesElement({ item }) {
    
    return (
        <div className="card card-compact border-primary h-96 w-60 bg-base-300 shadow-xl m-7" >
            <figure className='h-64 w-60 '><img src={item.imageUrl} alt="Shoes" /></figure>
            <div className="card-body w-60 h-32">
                 <h2 className="card-title">
                    {item?.name}
                </h2>
                <div className="card-actions justify-end mt-auto">
                    <div className="badge badge-outline">{item?.colorType}</div>
                    <div className="badge badge-outline">{item?.ocasion}</div>
                </div> 
            </div>
        </div>
    )
}

export default ClothesElement