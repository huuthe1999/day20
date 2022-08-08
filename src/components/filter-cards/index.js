import './Card.css';
import Card from './Card.js';

export default function CardFilter({ data, cardSelect, handleCardSelect }) {
	return (
		<div className='filter-cards'>
			<Card
				cardSelect={cardSelect}
				key={'all'}
				name={'All'}
				value={'All'}
				handleCardSelect={handleCardSelect}
			/>
			{Object.entries(data).map(([name, value]) => {
				return (
					<Card
						cardSelect={cardSelect}
						key={name}
						name={name}
						value={value}
						handleCardSelect={handleCardSelect}
					/>
				);
			})}
		</div>
	);
}
