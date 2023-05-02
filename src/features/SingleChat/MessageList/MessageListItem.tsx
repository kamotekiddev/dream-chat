interface Props {
	message: Message;
}

const MessageListItem = ({ message }: Props) => {
	const isMymessage = message?.sender?.id === '1';
	const messageAligment = isMymessage ? 'self-end' : 'self-start';
	const messageDirection = isMymessage && 'flex-row-reverse';

	return (
		<div className={`flex  gap-5 ${messageDirection} ${messageAligment}`}>
			<div className='h-14 w-14 bg-gray-500 rounded-xl' />
			<div className='bg-[#2E343D] rounded-xl p-4 relative bottom-2'>
				{!isMymessage && (
					<div>
						<div className='h-4 w-4 bg-[#2E343D] absolute -left-2 bottom-0' />
						<div
							className='h-4 w-4 bg-[#202329] absolute -left-4 bottom-0'
							style={{ borderRadius: '0 0 1rem 0' }}
						/>
					</div>
				)}
				<p className='text-xs'>{message?.text}</p>
				{isMymessage && (
					<div>
						<div
							className='h-4 w-4 bg-[#2E343D] absolute -right-2 bottom-0'
							style={{ borderRadius: '0 0 0 0' }}
						/>
						<div
							className='h-4 w-4 bg-[#202329] absolute -right-4 bottom-0'
							style={{ borderRadius: '0 0 0 1rem' }}
						/>
					</div>
				)}
			</div>
		</div>
	);
};

export default MessageListItem;
