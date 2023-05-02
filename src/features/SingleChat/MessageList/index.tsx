import MessageListItem from './MessageListItem';

interface Props {
	messages?: Message[];
}

const MessageList = ({ messages }: Props) => {
	return (
		<div className='flex flex-col gap-2 justify-end'>
			{messages?.map((message) => (
				<MessageListItem key={message?.id} message={message} />
			))}
		</div>
	);
};

export default MessageList;
