import React from 'react'

export default function Form(props) {

    const { 
        form 
    } = props

    return (
        <div>
            <form>
                <label>Name:
                    <input name="name" value={form.name} />
                </label>
                <label>Size:
                    <select name="size" value={form.size}>
                        <option value="s">Small</option>
                        <option value="m">Medium</option>
                        <option value="l">Large</option>
                    </select>
                </label>
                <label>
                    Pineapple:
                    <input type="checkbox" name="pineapple" checked={form.pineapple} />
                </label>
                <label>
                    Salami:
                    <input type="checkbox" name="salami" />
                </label>
                <label>
                    Anchovie:
                    <input type="checkbox" name="anchovies" />
                </label>
                <label>
                    Cheese:
                    <input type="checkbox" name="cheese" />
                </label>
                <button>Submit Order!</button>
            </form>
        </div>
    )
}