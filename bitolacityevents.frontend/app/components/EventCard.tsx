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

export default function EventCard({ id, title, startTime, photos }: EventProps) {
	const date = startTime ? new Date(startTime) : null
	const imageUrl = photos && photos.length > 0 ? photos[0].url : '/placeholder-event.jpg'

	return (
		<article className="group h-full bg-white/10 backdrop-blur-md border border-white/20 rounded-xl overflow-hidden hover:bg-white/20 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl cursor-pointer">
			
			{/* Image Container */}
			<div className="relative h-48 overflow-hidden">
				<img 
					src={imageUrl} 
					alt={title} 
					className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
				/>
				<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
			</div>

			{/* Content Container */}
			<div className="p-5">
				{/* Date Badge */}
				<div className="flex items-center justify-between mb-3">
					<span className="inline-flex items-center gap-1 px-3 py-1 bg-indigo-400/30 text-indigo-100 text-xs font-semibold rounded-full">
						📅 {date ? date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' }) : 'TBD'}
					</span>
					<span className="text-indigo-200 text-xs font-medium">
						⏰ {date ? date.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }) : '-'}
					</span>
				</div>

				{/* Title */}
				<h3 className="text-white font-bold text-lg mb-2 group-hover:text-indigo-200 transition-colors line-clamp-2 min-h-14">
					{title}
				</h3>

				{/* Full Date Info */}
				<p className="text-indigo-100 text-sm mb-4">
					{date ? date.toLocaleString('en-US', { 
						weekday: 'long', 
						year: 'numeric', 
						month: 'long', 
						day: 'numeric',
						hour: '2-digit',
						minute: '2-digit'
					}) : 'Date TBD'}
				</p>

				{/* View Details Button */}
				<button className="w-full py-2.5 px-4 bg-gradient-to-r from-indigo-400 to-purple-500 text-white font-semibold rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-y-0 translate-y-2 hover:from-indigo-500 hover:to-purple-600 hover:scale-105 shadow-lg">
					View Details
				</button>
			</div>
		</article>
	)
}
