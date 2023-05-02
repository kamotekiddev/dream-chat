interface Props {
	chatMate: ChatMate;
}

const ChatMate = ({ chatMate }: Props) => {
	return (
		<div className='flex gap-4 p-4 transition-all duration-100 ease-linear cursor-pointer hover:bg-[#2e343d] rounded-xl'>
			<div className='w-12 h-12 overflow-hidden rounded-lg flex-shrink-0'>
				{chatMate?.image && (
					<img
						className='w-full h-full object-center object-cover'
						src={chatMate.image}
						alt='Chat Mate Picture'
					/>
				)}
			</div>
			<div className='flex-1 space-y-1'>
				<h1 className='font-medium'>{chatMate.name}</h1>
				<p className='text-xs line-clamp-1'>
					This is something urgent please reply kahite ano pa ito hindi ito
					lalagpas sa 1 line.
				</p>
			</div>
		</div>
	);
};

export default ChatMate;
