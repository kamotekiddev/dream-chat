import { FiSettings } from 'react-icons/fi';

interface Props {
	title: string;
	numberOfMembers: number;
	numberOfOnline: number;
	onSettingsClick: () => void;
}

const ChatHeader = ({
	title,
	numberOfMembers,
	numberOfOnline,
	onSettingsClick,
}: Props) => {
	const subTitle = `${numberOfMembers} members, ${numberOfOnline} online`;

	return (
		<header className='flex gap-4 items-center justify-between'>
			<div>
				<h1 className='text-lg font-bold'>{title}</h1>
				<p className='text-xs text-gray-300'>{subTitle}</p>
			</div>
			<div>
				<FiSettings />
			</div>
		</header>
	);
};

export default ChatHeader;
