import ChatHeader from '@/features/FreeForAllChat/ChatHeader';
import ChatBox from '@/features/SingleChat/ChatBox';
import MessageList from '@/features/SingleChat/MessageList';

const messages: Message[] = [
	{
		id: '13234',
		sender: { id: '1', image: '', name: 'Joshua Dela Cruz' },
		text: 'Hey there how are you all?',
	},
	{
		id: '13243',
		sender: { id: '2', image: '', name: 'Joshua Dela Cruz' },
		text: 'We are all good, are you there?',
	},
	{
		id: '12324',
		sender: { id: '1', image: '', name: 'Joshua Dela Cruz' },
		text: "Oh, that's cool. hope to be there sometimes.",
	},
	{
		id: '12344',
		sender: { id: '1', image: '', name: 'Joshua Dela Cruz' },
		text: 'I promise, It will be good.',
	},
	{
		id: '12345',
		sender: { id: '2', image: '', name: 'Joshua Dela Cruz' },
		text: 'We are having a plan to do this again on saturday, are you free? or do you wanna come along?',
	},
	{
		id: '12345',
		sender: { id: '1', image: '', name: 'Joshua Dela Cruz' },
		text: 'Yeah. sure, I will there on saturday. thanks for inviting.',
	},
];

const FeeForAll = () => {
	return (
		<div className='p-4 px-8 grid gap-4 grid-rows-[auto_1fr_auto]'>
			<ChatHeader />
			<MessageList messages={messages} />
			<ChatBox />
		</div>
	);
};

export default FeeForAll;
