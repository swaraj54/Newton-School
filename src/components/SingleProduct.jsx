import React, { useEffect, useState } from 'react'
import { useParams, useSearchParams } from 'react-router-dom';


const SingleProduct = () => {

    const [singleProduct, setSingleProduct] = useState();
    const { id } = useParams();
    console.log(id, "id from params")

    useEffect(() => { console.log("WIll req to backend, id, setSingleProduct(res.data)") }, [id])

    return (
        <div>SingleProduct
            {id && id}
            {singleProduct?.name}
        </div>
    )
}

export default SingleProduct