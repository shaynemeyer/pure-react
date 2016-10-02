import React from 'react';
import {people} from "../data/people";

let People = ({onPersonChange, selectedPerson}) => {

    return (
      <div className="people">
        <h2>PEOPLE</h2>
        <ul>
          {people.map(item =>
            <li key={item.id} className={`list-item${selectedPerson === item.id ? ' selected' : ''}`}>
                # <a onClick={onPersonChange.bind(this, item.id)}>{item.name}</a>
            </li>
          )}
        </ul>
      </div>
    )
}

export default People;