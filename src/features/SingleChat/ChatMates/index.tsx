import ChatMate from './ChatMate';
import Link from 'next/link';

const chatMates: ChatMate[] = [
	{
		id: '123123',
		name: 'Joshua Dela Cruz',
		image:
			'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzHQv_th9wq3ivQ1CVk7UZRxhbPq64oQrg5Q&usqp=CAU',
	},
	{
		id: '223123',
		name: 'Ezekiel Dela Cruz',
		image:
			'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzHQv_th9wq3ivQ1CVk7UZRxhbPq64oQrg5Q&usqp=CAU',
	},
	{
		id: '323123',
		name: 'Dela Cruz Family',
		image:
			'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzHQv_th9wq3ivQ1CVk7UZRxhbPq64oQrg5Q&usqp=CAU',
	},
];

const ChatMates = () => {
	return (
		<div className='space-y-2'>
			{chatMates?.map((chatMate) => (
				<Link href={`/chats/${chatMate?.id}`} key={chatMate?.id}>
					<ChatMate chatMate={chatMate} />
				</Link>
			))}
		</div>
	);
};

export default ChatMates;
