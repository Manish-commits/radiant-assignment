

function CartTile({cartItem}) {

    return (
        <div className="flex items-center p-5 justify-between bg-red-500 mt-2 mb-2 ">
            <div className="flex p-3">
                <img src={cartItem.image} alt={cartItem.title} className="h-28"/>
                <div className="ml-10 self-start space-y-5">
                    <h1 className="text-white">{cartItem.title}</h1>
                </div>
            </div>
        </div>
    )

}

export default CartTile;