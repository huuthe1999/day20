import { useEffect, useState } from 'react';
import Card from './Card';
import './Card.css';

export default function CardList({ data, name }) {
	const [filterCard, setFilterCard] = useState([]);

	useEffect(() => {
		if (name === 'All') {
			setFilterCard(data);
			return;
		}
		if (data.length > 0) {
			setFilterCard(data.filter(item => item.origin === name));
		}
	}, [name, data]);

	return filterCard.map(item => {
		const {
			id,
			name,
			origin,
			temperament,
			description,
			life_span,
			weight: { metric: weightMetric },
		} = item;
		const shortData = {
			id,
			name,
			origin,
			temperament,
			description,
			life_span,
			weightMetric,
		};
		return <Card key={id} data={shortData} />;
	});
}
