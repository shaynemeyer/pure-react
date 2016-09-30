import React from 'react';
import {people} from "../data/people";

function People() {
    return (
      <div className="people">
        <h2>PEOPLE</h2>
        <ul>
          {people.map(item =>
            <li className="list-item" key={item.id}>
              # {item.name}
            </li>
          )}
        </ul>
      </div>
    )
}

export default People;