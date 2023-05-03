import React from 'react';
import { FiSettings } from 'react-icons/fi';

const ChatHeader = () => {
	const subTitle = 'Participants 400, online 500';
	return (
		<header className='flex gap-4 items-center justify-between'>
			<div>
				<h1 className='text-lg font-bold'>Word Chat</h1>
				<p className='text-xs'>{subTitle}</p>
			</div>
			<FiSettings />
		</header>
	);
};

export default ChatHeader;
