import React from 'react'

type EventPhoto = {
	url: string
}

type EventProps = {
	id: string
	title: string
	startTime: string
	endTime?: string
	photos?: EventPhoto[]
}

export default function EventCard({ title, startTime, photos }: EventProps) {
	const date = startTime ? new Date(startTime) : null
	const imageUrl = photos && photos.length > 0 ? photos[0].url : '/placeholder-event.jpg'

	return (
		<article className="event-card" style={cardStyle}>
			<div style={imageWrapperStyle}>
				<img src={imageUrl} alt={title} style={imageStyle} />
			</div>
			<div style={contentStyle}>
				<h3 style={titleStyle}>{title}</h3>
				<p style={dateStyle}>{date ? date.toLocaleString() : 'TBD'}</p>
			</div>
		</article>
	)
}

const cardStyle: React.CSSProperties = {
	display: 'flex',
	gap: 12,
	alignItems: 'center',
	padding: 12,
	border: '1px solid #e5e7eb',
	borderRadius: 8,
	background: 'white',
}

const imageWrapperStyle: React.CSSProperties = {
	width: 96,
	height: 64,
	overflow: 'hidden',
	borderRadius: 6,
	flex: '0 0 96px',
}

const imageStyle: React.CSSProperties = {
	width: '100%',
	height: '100%',
	objectFit: 'cover',
	display: 'block',
}

const contentStyle: React.CSSProperties = {
	display: 'flex',
	flexDirection: 'column',
}

const titleStyle: React.CSSProperties = {
	margin: 0,
	fontSize: 16,
}

const dateStyle: React.CSSProperties = {
	margin: 0,
	color: '#6b7280',
	fontSize: 13,
}
