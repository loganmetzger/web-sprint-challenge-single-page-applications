import React from 'react'

export default function Form() {
    return (
        <div>
            <form>
                <label>Name:
                    <input name="name" value="name" />
                </label>
                <label>Size:
                    <select name="size" value={sizeOfZa}>
                        <option value="s">Small</option>
                        <option value="m">Medium</option>
                        <option value="l">Large</option>
                    </select>
                </label>
                <label>
                    Pineapple:
                    <input type="checkbox" checked={pineapple} />
                </label>
                <label>
                    Salami:
                    <input type="checkbox" checked={salami} />
                </label>
                <label>
                    Anchovie:
                    <input type="checkbox" checked={anchovie} />
                </label>
                <label>
                    Cheese:
                    <input type="checkbox" checked={cheese} />
                </label>
                <button>Submit Order!</button>
            </form>
        </div>
    )
}