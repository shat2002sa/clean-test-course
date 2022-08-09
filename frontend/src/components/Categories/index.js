import { useState, useEffect } from 'react';
import axios from 'axios';
import style from './Categories.module.scss';
import { API_URL } from '../../utils/constants';

export default function Categories({ onSelect }) {
  const [categories, setCategories] = useState();
  const [selectedCat, setSelectedCat] = useState();
  useEffect(() => {
    if (!categories) {
      axios.get(`${API_URL}/api/category/?format=json`).then(({ data }) => {
        if (data.status === 'success') setCategories(data.data);
      });
    }
  }, [categories]);
  return (
    <div className={style.wrapper}>
      {categories &&
        categories.map((category) => (
          <span
            className={style.item}
            style={{
              borderBottom: `${
                selectedCat === category.name ? '1px solid black' : ''
              }`,
            }}
            key={category.name}
            data-testid='category-item'
            onClick={() => {
              setSelectedCat(category.name);
              onSelect(category.name);
            }}
          >
            {category.name}
          </span>
        ))}
    </div>
  );
}
