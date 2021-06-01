const SubcategoryFilter = () => {
    return(
        <div>
            <div className="">
                <p>Цена, грн.</p>
                <p>0 - 10000</p>
                <input multiple={true} type="range"/>
            </div>
            <div className="">
                <p></p>
                <div className="">
                    <input type="checkbox"/>
                    <span>Все (320)</span>
                </div>
                <div className="">
                    <input type="checkbox"/>
                    <span>В наличии (270)</span>
                </div>
            </div>
        </div>
    )
}

export default SubcategoryFilter
