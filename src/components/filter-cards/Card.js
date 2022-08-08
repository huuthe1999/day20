import './Card.css';

export default function Card({ name, value, cardSelect, handleCardSelect }) {
	return (
		<div
			className={`filter-card ${
				cardSelect === name ? 'active' : undefined
			}`}
			onClick={handleCardSelect}
			value={name}>
			{name}
			{name !== 'All' && `(${value})`}
		</div>
	);
}
