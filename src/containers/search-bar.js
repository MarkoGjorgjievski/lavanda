import React, { useState } from 'react'
import { BrowserRouter as Router} from 'react-router-dom'
import { SearchBar } from '../components'
import search from '../search.svg'
import close from '../close.svg'

export function SearchBarContainer({ children }) {
    const [category, setCategory] = useState('buy');
    const [input, setInput] = useState('Skopje');

    const handleChange = (e) => {
        setInput(e.target.value)
    }

    return (
        <Router>
            <SearchBar>
                <SearchBar.Options>
                    <SearchBar.Tab active={category === 'buy' ? 'true' : 'false'} onClick={() => setCategory('buy')}>Се продава</SearchBar.Tab>
                    <SearchBar.Tab active={category === 'rent' ? 'true' : 'false'} onClick={() => setCategory('rent')}>Се издава</SearchBar.Tab>
                </SearchBar.Options>
                <SearchBar.Form>
                    <SearchBar.Icon src={search}/>
                    <SearchBar.Input 
                        placeholder="Град или општина"
                        name="input"
                        value={input}
                        onChange={handleChange}
                    />
                    {input !== '' &&<SearchBar.CloseIcon input={input} src={close} onClick={() => setInput('')} /> }
                    <SearchBar.Submit>Барај</SearchBar.Submit>
                </SearchBar.Form>
            </SearchBar>
        </Router>
    )
}

