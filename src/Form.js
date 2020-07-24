import React from 'react'
import Switch from './Switch'

export default function Form(props) {

    const { 
        form,
        handleChange,
        handleSubmit,
        disable 
    } = props

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>Name:
                    <input
                        className="name-input"
                        name="name" 
                        value={form.name}
                        onChange={handleChange}
                    />
                </label>
                <label>Size:
                    <select className="size" name="size" value={form.size} onChange={handleChange}>
                        <option value="s">Small</option>
                        <option value="m">Medium</option>
                        <option value="l">Large</option>
                    </select>
                </label>
                <label>
                    Pineapple:
                    <input 
                        className="pineapple"
                        type="checkbox" 
                        name="pineapple" 
                        checked={form.pineapple} 
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Salami:
                    <input 
                        className="salami"
                        type="checkbox" 
                        name="salami" 
                        value={form.salami}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Anchovie:
                    <input 
                        className="anchovies"
                        type="checkbox" 
                        name="anchovies" 
                        value={form.anchovies}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Cheese:
                    <input 
                        className="cheese"
                        type="checkbox" 
                        name="cheese" 
                        value={form.cheese}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Gluten Free Crust:
                    <Switch form={form} />
                </label>
                <button className="submit" disabled={disable} type='submit'>Submit Order!</button>
            </form>
        </div>
    )
}