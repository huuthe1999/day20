import { useMemo } from 'react';
import { averageLife } from '../../Utils/averageLife';
import './Header.css';

export default function Header({ arrayLife, arrayWeight }) {
	const averLife = useMemo(() => {
		return averageLife(arrayLife);
	}, [arrayLife]);
	const averWeight = useMemo(() => {
		return averageLife(arrayWeight);
	}, [arrayWeight]);

	return (
		<div className='header'>
			<h1 className='header-title'>Cats Paradise</h1>
			<p>There are 67 cat breeds </p>
			<h2>
				On average a cat can weight about{' '}
				<strong className='average'>{averWeight}</strong> Kg and lives{' '}
				<strong className='average'>{averLife}</strong> years.
			</h2>
		</div>
	);
}
