import axios from 'axios';
import { useEffect, useState } from 'react';
import './Card.css';

export default function Card({ data }) {
	const {
		id,
		name,
		origin,
		temperament,
		description,
		life_span,
		weightMetric,
	} = data;
	const [fetchData, setFetchData] = useState([]);

	useEffect(() => {
		const fetch = async () => {
			try {
				const result = await axios.get(
					`https://api.thecatapi.com/v1/images/search?breed_id=${id}`,
				);
				setFetchData(result.data);
			} catch (error) {
				console.log(error);
			}
		};
		fetch();
	}, [id]);
	return (
		<div className='card'>
			<div className='card-image'>
				<img src={fetchData[0]?.url} loading='lazy' alt={name} />
			</div>

			<div className='card-body'>
				<div>
					<h1 className='card-name'>{name}</h1>
					<p className='card-origin'>
						<strong>{origin}</strong>
					</p>
				</div>
				<div className='card-attributes'>
					<p>
						<span>Temperament:</span> {temperament}
					</p>
					<p>
						<span>Life Span:</span>
						{life_span} years
					</p>
					<p>
						<span>Weight:</span>
						{weightMetric} Kg
					</p>
				</div>
				<div className='card-desc'>
					<p>
						<span>Description</span>
					</p>
					<p>{description}</p>
				</div>
			</div>
		</div>
	);
}
