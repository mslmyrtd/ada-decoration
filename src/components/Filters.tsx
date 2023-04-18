import { useFilterContext } from '../context/filter_context'
import { getUniqueValues, formatPrice } from '../utils/helpers'
import { FaCheck } from 'react-icons/fa'
import Wrapper from '../assets/wrappers/FiltersComp'


const Filters = () => {
  const {
    filters: {
      text,
      category,
      color,
      max_price,
      min_price,
      shipping,
      company,
      price,
    },
    updateFilters,
    clearFilters,
    all_products,
  } = useFilterContext()
  const categories = getUniqueValues(all_products, 'category')
  const companies = getUniqueValues(all_products, 'company')
  const colors = getUniqueValues(all_products, 'colors')

  return (
    <Wrapper>
      <div className='content'>
        <form onSubmit={(e) => e.preventDefault()}>
          <div className='form-control'>
            <input
              type='text'
              name='text'
              placeholder='search'
              className='search-input'
              value={text}
              onChange={updateFilters}
            />
          </div>
          <div className='form-control'>
            <h5>category</h5>
            <div>
              {categories.map((c: any, index) => {
                return (
                  <button
                    key={index}
                    onClick={updateFilters}
                    type='button'
                    name='category'
                    className={`${category === c.toLowerCase() ? 'active' : null
                      }`}
                  >
                    {c}
                  </button>
                )
              })}
            </div>
          </div>
          <div className='form-control'>
            <h5>company</h5>
            <select
              name='company'
              id='company'
              value={company}
              onChange={updateFilters}
              className='company'
            >
              {companies.map((c: any, index) => {
                return (
                  <option key={index} value={c}>
                    {c}
                  </option>
                )
              })}
            </select>
          </div>
          <div className='form-control'>
            <h5>colors</h5>
            <div className='colors'>
              {colors.map((c: any, index) => {
                if (c === 'all') {
                  return (
                    <button
                      name='color'
                      key={index}
                      onClick={updateFilters}
                      data-color='all'
                      className={`${color === 'all' ? 'all-btn active' : 'all-btn'
                        }`}
                    >
                      all
                    </button>
                  )
                }
                return (
                  <button
                    key={index}
                    name='color'
                    style={{ background: c }}
                    className={`${color === c ? 'color-btn active' : 'color-btn'
                      }`}
                    data-color={c}
                    onClick={updateFilters}
                  >
                    {color === c ? <FaCheck /> : null}{' '}
                  </button>
                )
              })}
            </div>
          </div>
          {/* price */}
          <div className='form-control'>
            <h5>price</h5>
            <p className='price'>{formatPrice(price)}</p>
            <input
              type='range'
              name='price'
              onChange={updateFilters}
              min={min_price}
              max={max_price}
              value={price}
            />
          </div>
          {/* shipping */}
          <div className="form-control shipping">
            <label htmlFor="shipping">free shipping</label>
            <input type="checkbox" name='shipping' id='shipping' onChange={updateFilters} checked={shipping} />
          </div>
        </form>
        <button type='button' className='clear-btn' onClick={clearFilters}> cleas filters</button>
      </div>
    </Wrapper>
  )
}



export default Filters
