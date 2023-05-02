import ChatBox from '@/features/SingleChat/ChatBox';
import ChatHeader from '@/features/SingleChat/ChatHeader';
import MessageList from '@/features/SingleChat/MessageList';

const messages: Message[] = [
	{
		id: '123423',
		sender: { id: '1', image: '', name: 'Joshua Dela Cruz' },
		text: 'This is just a dummy text to test the chat bubble component',
	},
	{
		id: '123424',
		sender: { id: '1', image: '', name: 'Joshua Dela Cruz' },
		text: 'This is just a dummy text to test the chat bubble component',
	},
	{
		id: '123425',
		sender: { id: '2', image: '', name: 'Ezekiel Dela Cruz' },
		text: 'This is just a dummy text to test the chat bubble component',
	},
];

const Chat = () => {
	const handleSettingsClick = () => {};

	return (
		<div className='grid grid-rows-[auto_1fr_auto] p-4 px-8 h-full space-y-8'>
			<ChatHeader
				isOnline
				title='Kamote Chat'
				onSettingsClick={handleSettingsClick}
			/>
			<MessageList messages={messages} />
			<ChatBox />
		</div>
	);
};

export default Chat;
