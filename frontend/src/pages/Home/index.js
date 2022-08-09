import Categories from '../../components/Categories';
import Foods from '../../components/Foods';
import Welcome from '../../components/Welcome';
import style from './Home.module.scss';

import { useState } from 'react';
export default function Home() {
  const [category, setCategory] = useState();
  return (
    <div className={style.wrapper}>
      <div data-testid='categories'>
        <Categories onSelect={(category) => setCategory(category)} />
      </div>
      {category ? <Foods category={category} /> : <Welcome />}
    </div>
  );
}
