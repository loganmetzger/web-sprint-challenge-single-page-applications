import React from 'react'

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
                        name="name" 
                        value={form.name}
                        onChange={handleChange}
                    />
                </label>
                <label>Size:
                    <select name="size" value={form.size} onChange={handleChange}>
                        <option value="s">Small</option>
                        <option value="m">Medium</option>
                        <option value="l">Large</option>
                    </select>
                </label>
                <label>
                    Pineapple:
                    <input 
                        type="checkbox" 
                        name="pineapple" 
                        checked={form.pineapple} 
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Salami:
                    <input 
                        type="checkbox" 
                        name="salami" 
                        value={form.salami}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Anchovie:
                    <input 
                        type="checkbox" 
                        name="anchovies" 
                        value={form.anchovies}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Cheese:
                    <input 
                        type="checkbox" 
                        name="cheese" 
                        value={form.cheese}
                        onChange={handleChange}
                    />
                </label>
                <button disabled={disable} type='submit'>Submit Order!</button>
            </form>
        </div>
    )
}