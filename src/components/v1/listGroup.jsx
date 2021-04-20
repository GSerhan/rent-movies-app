import React from 'react';

const listGroup = props => {

    //declari niste constante in ES6 ca sa nu mai trebuiasca sa scrii props.genres in template
    const {genres, textProperty, valueProperty, onOrdonateMoviesByGenres} = props;

    //pot fi scrise si asa, practic sunt niste constante doar ca in ES6 le scrii pe toate odata ca toate vin din obiectul de props;
    // const genres = this.props.genres;
    // const valueProperty = this.props.valueProperty;
    // const textProperty = this.props.textProperty;

    return (
        <ul className="list-group col-3">
            {genres.map((item, index) => {
                return <li key={item[valueProperty]}
                           className={item.selected ? "list-group-item active" : "list-group-item"}
                           onClick={() => onOrdonateMoviesByGenres(item)}
                        >{item[textProperty]}</li>

            })}
        </ul>
    )

};

    //e acelasi lucru daca as trimite props direct din parinte textProperty='name'

    listGroup.defaultProps = {
        textProperty: 'name',
        valueProperty: '_id'
    };


export default listGroup;
