import { useState, useId } from 'react'
import './Filters.css'
import { useFilters } from '../hooks/useFilters'

export function Filters() {
    const { filters, setFilters } = useFilters()

    const minPriceFilterId = useId()
    const categoryFilter = useId()

    const handleChangeMinPrice = (e) => {

        setFilters(prevState => ({
            ...prevState,
            minPrice: e.target.value
        }))
    }

    const handleChangeCategory = (e) => {
        setFilters(prevState => ({
            ...prevState,
            category: e.target.value
        }))
    }

    return (
        <section className="filters" >
            <div>
                <label htmlFor={minPriceFilterId}>Precio a partir de:</label>
                <input type="range" id={minPriceFilterId} min="0" max="2000" onChange={handleChangeMinPrice} value={filters.minPrice} />
                <span>${filters.minPrice}</span>
            </div>

            <div>
                <label htmlFor={categoryFilter}>Categoria</label>
                <select id={categoryFilter} onChange={handleChangeCategory}>
                    <option value="all">Todas</option>
                    <option value="laptops">Portatiles</option>
                    <option value="smartphones">Celulares</option>
                </select>
            </div>
        </section>
    )
}