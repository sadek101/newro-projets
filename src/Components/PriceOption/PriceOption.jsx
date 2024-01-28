import propTypes from 'prop-types'

const PriceOption = (option) => {
    const {name, price, feature} = option;
    return (
        <div>
           <h2>
            <span className='text-6xl'>{price}</span>
            </h2> 
        </div>
    );
};
PriceOption.propTypes ={
    option:propTypes.object
}

export default PriceOption;