import { FaPaperclip } from 'react-icons/fa';
import { AiOutlineSend } from 'react-icons/ai';

const ChatBox = () => {
	return (
		<div className='py-4 flex gap-4 items-center'>
			<FaPaperclip />
			<input
				type='text'
				placeholder='Your Message...'
				className='bg-transparent outline-none flex-1'
			/>
			<AiOutlineSend />
		</div>
	);
};

export default ChatBox;
