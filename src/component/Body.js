const Body = () => {

    const Products=[
        {title:"clothes",Price:"$22",Detail:"brand from Turkey"},
        {title:"shoes",Price:"$32",Detail:"brand from Turkey"}, 
        {title:"bags",Price:"$40",Detail:"brand from Turkey"}, 
        {title:"mens wears",Price:"$55",Detail:"brand from Turkey"},
        {title:"baby wears ",Price:"$15",Detail:"brand from Turkey"},
        {title:"laptops",Price:"$80",Detail:"brand from Turkey"},
    ]
    const Sidebar=[
        {title:"selected items", paragraph:" select mode of payment"},
        {title:"numbers of items", paragraph:"mode of payment"},
    
    ]
    return ( 
        <div className="body1">
            <div className="body2">
                {
                    Products.map(Product=>{
                        return(
                            <div className="product2">
                                <h2>{Product.title}</h2>
                                <h3>{Product.Price}</h3>
                                <p>{Product.Detail}</p>
                            </div>
                        )
                    })
                }

            </div>
            <div className="body3">
            {
                    Sidebar.map(Product=>{
                        return(
                            <div className="product3">
                                <h2>{Product.title}</h2>
                                <p>{Product.paragraph}</p>
                            </div>
                        )
                    })
                }

            </div>

        </div>
    )
}
 
export default Body ;