interface Props {
	message: Message;
}

const MessageListItem = ({ message }: Props) => {
	const isMymessage = message?.sender?.id === '1';
	const messageAligment = isMymessage ? 'self-end' : 'self-start';
	const messageColor = isMymessage ? 'bg-blue-600' : 'bg-[#2E343D]';

	return (
		<div className={`flex max-w-lg  gap-5 ${messageAligment}`}>
			{!isMymessage && (
				<div className='h-14 flex-shrink-0 w-14 bg-gray-500 rounded-xl' />
			)}
			<div className={`${messageColor} h-max rounded-xl px-4 py-2 relative`}>
				{!isMymessage && (
					<>
						<div className='h-4 w-4 bg-[#2E343D] absolute -left-2 bottom-0' />
						<div
							className='h-4 w-4 bg-[#202329] absolute -left-4 bottom-0'
							style={{ borderRadius: '0 0 1rem 0' }}
						/>
					</>
				)}
				<p className='text-sm'>{message?.text}</p>
				{isMymessage && (
					<>
						<div
							className={`h-4 w-4 absolute -right-2 bottom-0 ${messageColor}`}
							style={{ borderRadius: '0 0 0 0' }}
						/>
						<div
							className='h-4 w-4 bg-[#202329] absolute -right-4 bottom-0'
							style={{ borderRadius: '0 0 0 1rem' }}
						/>
					</>
				)}
			</div>
		</div>
	);
};

export default MessageListItem;
